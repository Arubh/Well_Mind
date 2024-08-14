import { Flipwords } from "../components/ui/flip-words";

export default function Page() {
  const words = ["mind", "soul", "body", "life"];
 
  return (
    // <div className="h-[40rem] flex justify-center items-center px-4 bg-navyBlue">
   <div className="mt-[-15px]">
     <div className="h-[35rem] flex flex-col justify-start align-top bg-cover bg-center mt-6 bg-blend-multiply pt-[200px]" style={{ backgroundImage: "url('/images/home.jpg')", backgroundColor: "rgba(0, 0, 0, 0.6)", backgroundBlendMode: "multiply" }}>
      <div className="text-[60px] mx-auto font-serif align-top text-[white] dark:text-[white]">
        Nurture your 
        <Flipwords words={words} /> <br />with us
      </div>
    </div>
    lorem100
   </div>
  );
}
