import PrevalenceChart from '@/components/charts/PrevalenceChart'
import RecievedCareChart from '@/components/charts/ReceivedCareChart'
import DepressionChart from '@/components/charts/DepressionChart'
import SuicideRatesChart from '@/components/charts/SuicideRatesChart'
import PtsdChart from '@/components/charts/PtsdChart'

export default function page() {
  return (
    <div className='lg:pl-[200px] lg:pr-[200px] px-10 pt-8 mt-2'>
       <h2
          className="lg:text-6xl text-5xl font-bold inline-block text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, red, orange, yellow)',
            backgroundSize: '200% 200%',
            animation: 'moveGradient 10s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        > 
          Statistical data from the past years 
        </h2>
      <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
              <PrevalenceChart />
            </div>
          </div>
          <div className="flip-card-back">
          <div className='overflow-clip'>
              <a href="https://www.nimh.nih.gov/health/statistics/mental-illness"><cite>https://www.nimh.nih.gov/health/statistics/mental-illness</cite></a>
              <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics"><cite>https://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics</cite></a>
            </div>
          </div>
        </div>
      </div>

       <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
            <RecievedCareChart />
            </div>
          </div>
          <div className="flip-card-back">
            <div>
              <a href="https://www.nimh.nih.gov/health/statistics/mental-illness"><cite>https://www.nimh.nih.gov/health/statistics/mental-illness</cite></a>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
            <DepressionChart />
            </div>
          </div>
          <div className="flip-card-back">
            <div>
              <a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7013e2.htm"><cite>https://www.cdc.gov/mmwr/volumes/70/wr/mm7013e2.htm</cite></a>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
            <SuicideRatesChart />
            </div>
          </div>
          <div className="flip-card-back">
            <div>
              <a href="https://www.cdc.gov/nchs/products/databriefs/db241.htm"><cite>https://www.cdc.gov/nchs/products/databriefs/db241.htm</cite></a>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
            <PtsdChart />
            </div>
          </div>
          <div className="flip-card-back">
            <div>
              <a href="https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder-ptsd"><cite>https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder-ptsd</cite></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
