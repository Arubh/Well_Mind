import React from 'react'

export default function QuizStart(props) {
  return (
    <div className="lg:pl-[200px] h-[700px] lg:pr-[400px] px-10 mb-[100px] pt-[100px]"
    style={{
      backgroundImage: "url('/images/footer.jpg')",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backgroundBlendMode: "multiply",
    }}
    >
      <div id="quiz-box">
        <h2
          className="text-5xl font-bold inline-block text-[#cccc25]" 
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
