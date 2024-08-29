import React from 'react'

export default function QuizStart(props) {
  return (
    <div className="lg:pl-[200px] lg:pr-[400px] px-10 pt-8 mb-[100px]">
      <div id="quiz-box">
        <h2
          className="lg:text-5xl text-2xl font-bold inline-block text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, yellow, green, yellow)',
            backgroundSize: '200% 200%', 
            animation: 'moveGradient 10s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} 
        > 
          Are you ready to predict your mental health status?
        </h2>
        <button className="fetch mt-8" id="yes" onClick={props.handleStartQuiz}>
          Take the quiz 
        </button> 
      </div>
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}
