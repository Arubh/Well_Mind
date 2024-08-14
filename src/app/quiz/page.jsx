'use client'
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Ensure you have chart.js installed: npm install chart.js
import { updateQuizScores } from '@/utils/action'; // Adjust the import path if needed
import { Questions, QuestionCategory, ResponseOptions, ScoringKey } from './data';
import QuizStart from '@/components/QuizStart';
import QuestionCard from '@/components/QuestionCard';

// Quiz Component
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
    // Call the server-side function to update quiz scores
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
  }, [results]); // This effect runs only when `results` is updated

  if (results) {
    return (
      <div>
        <h1>Here is a detailed graphical representation of your quiz results. </h1>
        <h2>Detailed Scores</h2>
        <ul>
          {Object.entries(results).map(([category, score], index) => (
            <li key={index}>
              <strong>{category}:</strong> {score.toFixed(2)}%
            </li>
          ))}
        </ul>
        <div className="chart-divs w-[600px]">
          <canvas id="results-chart"></canvas>
        </div>
        <button className="button" onClick={resetQuiz}>
          Take Quiz Again
        </button>
      </div>
    );
  }

  if (currentQuestionIndex === null) {
    return (
      <QuizStart handleStartQuiz={handleStartQuiz}/>
    );
  }

  return (
    <QuestionCard questionObject={questionObjects[currentQuestionIndex]} onAnswer={handleAnswer}
    />
  );
};

export default Quiz;
