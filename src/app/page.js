'use client'
import { Flipwords } from "../components/ui/flip-words";
import HomeCard from "@/components/HomeCard";
import { homeProps } from "@/components/Content";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const words = ["mind", "soul", "body", "life"];

  return (
    <div className="mt-[-24px]">
      <div
        className="h-[41rem] flex flex-col justify-start align-top bg-cover bg-center mt-6 bg-blend-multiply pt-[200px]"
        style={{
          backgroundImage: "url('/images/home1.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="lg:text-[60px] text-[40px] mx-auto font-serif align-top text-[white] dark:text-[white]">
          Nurture your <br />
          <Flipwords words={words} /> <br /> with us
        </div>
      </div>

      {/* <div className="bg-[#5d175d] mt-16 h-[300px] mb-[100px] flex justify-center items-center" style={{
        backgroundImage: 'linear-gradient(to right, #cb5acb, #5d175d, #cb5acb)',
        animation: 'moveGradient 5s ease infinite',
        backgroundSize: '200% 200%',
      }}>
        <div className="lg:pl-[200px] lg:pr-[400px] px-10 pt-8">
          <div
            className="lg:text-5xl text-2xl font-bold text-[white]"
          >
            Take a personalised quiz now !
          </div>
          <button className="mt-4 bg-transparent border-2 border-[white] rounded-lg text-[white] hover:text-[white] hover:border-navyBlue cursor-pointer inline-block font-semibold text-base leading-normal m-0 min-h-[3.75em] min-w-0 outline-none px-4 py-2.5 transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] select-none will-change-transform hover:text-white hover:bg-navyBlue hover:shadow-lg hover:translate-y-[-2px] active:shadow-none active:translate-y-0">
            <Link href="/quiz">Go to Quiz page</Link>
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
      </div> */}

      <div className="flex mt-[40px] lg:flex-row flex-col lg:pl-[200px] lg:pr-[190px] px-10 pt-8 items-center">
        <div className="">
          <div
            className="lg:text-5xl text-4xl font-semibold text-[black] bg-clip-text pb-4"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFBF00, #8B8000, #8B8000)',
              backgroundSize: '200% 200%',
              animation: 'moveGradient 1s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
          }}
          >
            Take a personalised quiz now
          </div>
          <button className="lg:mt-2 bg-transparent border-[1px] border-[black] rounded-lg text-[black] hover:text-[white] hover:border-navyBlue cursor-pointer inline-block font-semibold text-base leading-normal m-0 min-h-[3.75em] min-w-0 outline-none px-4 py-2.5 transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] select-none will-change-transform hover:text-white hover:bg-navyBlue hover:shadow-lg hover:translate-y-[-2px] active:shadow-none active:translate-y-0">
            <Link href="/quiz">Go to Quiz page</Link>
          </button>
        </div>
        <div className="bounce-animation lg:ml-[40px] lg:mt-0 mt-[60px]">
          <Image src="/images/quiz.jpg" width={420} height={420}></Image>
        </div>
      </div>

      <div className="flex mt-[-70px] lg:flex-row flex-col lg:pl-[170px] lg:pr-[190px] px-10 pt-8 items-center">
      <div className="bounce-animation lg:mr-[40px] lg:mt-0 mt-[60px]">
          <Image src="/images/chat1.jpg" width={420} height={420}></Image>
        </div>
        <div className="">
          <div
            className="lg:text-5xl text-4xl font-semibold text-[black] bg-clip-text pb-4"
            style={{
              backgroundImage: 'linear-gradient(to right, #790581, #fa02b8, #fa02b8)',
              backgroundSize: '200% 200%',
              animation: 'moveGradient 1s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
          }}
          >
            AI powered mental health assistance
          </div>
          <button className="lg:mt-2 bg-transparent border-[1px] border-[black] rounded-lg text-[black] hover:text-[white] hover:border-navyBlue cursor-pointer inline-block font-semibold text-base leading-normal m-0 min-h-[3.75em] min-w-0 outline-none px-4 py-2.5 transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] select-none will-change-transform hover:text-white hover:bg-navyBlue hover:shadow-lg hover:translate-y-[-2px] active:shadow-none active:translate-y-0">
            <Link href="/chat">Go to Chatbot</Link>
          </button>
        </div>
      </div>

      <div className="mt-[90px] flex flex-col gap-20 mb-[60px]">
        {homeProps.map((props, index) => (
          <HomeCard
            key={index}
            pos_left={!props.imageRight} // Use imageRight to determine the position
            extraLarge={props.extraLarge} // Pass extraLarge property
            description={props.description}
            heading={props.heading}
            imageURL={props.imageURL}
            title={props.title} />
        ))}
      </div>
    </div>
  );
}
