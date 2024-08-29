'use client'
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { updateQuizScores } from '@/utils/action';
import { Questions, QuestionCategory, ResponseOptions, ScoringKey } from './data';
import QuizStart from '@/components/QuizStart';
import QuestionCard from '@/components/QuestionCard';

const Quiz = () => {


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [questionsAlreadyAsked, setQuestionsAlreadyAsked] = useState([]);
  const [questionObjects, setQuestionObjects] = useState(
    Questions.map((question, i) => ({
      question,
      questionCategory: QuestionCategory[i],
      responseOptions: ResponseOptions[i],
      responseOptionScores: ScoringKey[i],
      userResponse: null,
      index: i,
    }))
  );

  const [results, setResults] = useState(null);

  const handleStartQuiz = () => {
    askNextQuestion();
  };

  const askNextQuestion = () => {
    const nextQuestionIndex = questionObjects.findIndex(
      (q, i) => !questionsAlreadyAsked.includes(i)
    );
    if (nextQuestionIndex >= 0) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setQuestionsAlreadyAsked([...questionsAlreadyAsked, nextQuestionIndex]);
    } else {
      calculateResults();
    }
  };

  const handleAnswer = (selectedOptionIndex) => {
    const updatedQuestions = [...questionObjects];
    updatedQuestions[currentQuestionIndex].userResponse = selectedOptionIndex;
    setQuestionObjects(updatedQuestions);
    askNextQuestion();
  };

  const calculateResults = async () => {
    const categories = {};
    questionObjects.forEach((q) => {
      if (!categories[q.questionCategory]) {
        categories[q.questionCategory] = 0;
      }
      categories[q.questionCategory] += q.responseOptionScores[q.userResponse];
    });

    setResults(categories);
    console.log(categories)
    const response = await updateQuizScores(categories);
    if (response.error) {
      console.error('Error updating quiz scores:', response.error);
    } else {
      console.log('Quiz scores updated successfully');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(null);
    setQuestionsAlreadyAsked([]);
    setQuestionObjects(
      Questions.map((question, i) => ({
        question,
        questionCategory: QuestionCategory[i],
        responseOptions: ResponseOptions[i],
        responseOptionScores: ScoringKey[i],
        userResponse: null,
        index: i,
      }))
    );
    setResults(null);
  };

  useEffect(() => {
    if (results) {
      const labels = Object.keys(results);
      const data = Object.values(results);

      const canvas = document.getElementById('results-chart');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              {
                label: 'Score',
                data,
                backgroundColor: '#6B88D1',
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: '% of Maximum Possible Score',
                },
              },
            },
          },
        });
      }
    }
  }, [results]); 

  if (results) {
    return (
      <div className="lg:pl-[200px] lg:pr-[400px] px-10 pt-8 mb-[200px]">
        <div className="lg:text-4xl text-3xl text-violet font-bold inline-block">Here is a detailed graphical representation of your quiz results</div>
        <div className="flip-card md:w-[660px] w-auto h-[450px] mt-4">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="text-start font-semibold flex sm:pl-[80px] pl-6 sm:pt-[70px] pt-12 md:text-[25px] text-[20px] font-sans">
                <ul>
                  {Object.entries(results).map(([category, score], index) => (
                    <li key={index} className={score.toFixed(2) > 80 ? 'text-[#ff0000] mb-2' : 'text-azure mb-2'}>
                      <span>
                        {category}:
                      </span>{' '}
                      {score.toFixed(2)}%
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-[40px]">Hover to see the graph</div>
            </div>
            <div className="flip-card-back flex justify-center">
              <div className="my-auto">
                <div className="chart-divs md:w-[600px] w-full">
                  <canvas id="results-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="fetch mt-4" onClick={resetQuiz}>
          Take Quiz again
        </button>
      </div>
    );
  }

  if (currentQuestionIndex === null) {
    return (
      <QuizStart handleStartQuiz={handleStartQuiz} />
    );
  }

  return (
    <QuestionCard questionObject={questionObjects[currentQuestionIndex]} onAnswer={handleAnswer}
    />
  );
};

export default Quiz;
