import Image from "next/image";

const HomeCard = (props) => {

  const ordering = props.pos_left ? ['lg:order-first', 'lg:order-last'] : ['lg:order-last', 'lg:order-first'];

  const extraLarge = {
    panelWidth: '',
    textSize: {
      sm: 'text-sm',
      mid: '',
    },
    divWidth: '',
  };
 
  extraLarge.panelWidth = props.extraLarge ? 'lg:max-w-6xl' : 'lg:max-w-4xl';
  extraLarge.divWidth = props.extraLarge ? 'max-w-lg' : 'max-w-md';
  extraLarge.textSize.sm = props.extraLarge ? 'text-md' : 'text-sm';
  extraLarge.textSize.mid = props.extraLarge ? 'text-md' : 'text-base';

  return (
    <div className={`font-serif max-w-sm mx-auto sm:max-w-md flex flex-col lg:flex-row justify-center items-center ${extraLarge.panelWidth} gap-0`}>
      <div className={`${ordering[0]}`}>
        <Image className="rounded-[30px] w-[320px] h-[220px]" src={props.imageURL} alt={props.heading || ''} width={400} height={400} />
      </div>
      <div className={`transition-transform duration-300 ease-in-out transform hover:scale-110 mt-4 w-full h-[100%] flex flex-col justify-center gap-4 px-10 text-sub-text-color ${extraLarge.divWidth} ${ordering[1]}`}>
        <h1 className={`font-sans font-bold ${extraLarge.textSize.mid}`}>{props.title}</h1>
        <h1 className={`font-sans font-semibold ${extraLarge.textSize.mid}`}>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
