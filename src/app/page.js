import { Flipwords } from "../components/ui/flip-words";
import HomeCard from "@/components/HomeCard";
import { homeProps } from "@/components/Content"; // Assuming homeProps is exported from here

export default function Page() {
  const words = ["mind", "soul", "body", "life"];

  return (
    <div className="mt-[-15px]">
      <div
        className="h-[35rem] flex flex-col justify-start align-top bg-cover bg-center mt-6 bg-blend-multiply pt-[200px]"
        style={{
          backgroundImage: "url('/images/home.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="text-[60px] mx-auto font-serif align-top text-[white] dark:text-[white]">
          Nurture your
          <Flipwords words={words} /> <br />with us
        </div>
      </div>
      <div className="mt-[100px] flex flex-col gap-20">
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
