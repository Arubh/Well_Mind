import PrevalenceChart from '@/components/charts/PrevalenceChart'
import RecievedCareChart from '@/components/charts/ReceivedCareChart'
import DepressionChart from '@/components/charts/DepressionChart'
import SuicideRatesChart from '@/components/charts/SuicideRatesChart'
import PtsdChart from '@/components/charts/PtsdChart'
import Link from 'next/link'

export default function page() {
  return (
    <div className='lg:pl-[200px] lg:pr-[200px] px-10 pt-8 mt-2 mb-[200px]'>
      <h2
        className="lg:text-5xl text-2xl font-bold inline-block text-transparent bg-clip-text"
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
      <div className="flip-card md:w-[680px] w-auto h-[50vw] md:h-[41vw] lg:h-[33vw] xl:h-[28vw] mt-10 z-[-400]">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="chart-divs">
              <PrevalenceChart />
            </div>
          </div>
          <div className="flip-card-back">
            <div className='mt-10 flex flex-col justify-center items-center align-middle'>
              <div className='text-3xl font-bold'>Resources</div>
              <Link href="https://www.nimh.nih.gov/health/statistics/mental-illness" className='underline'>Mental illness data</Link>
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
              <div className='text-3xl font-bold'>Resources</div>
              <Link href="https://www.nimh.nih.gov/health/statistics/mental-illness" className='underline'>Received care data</Link>
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
              <div className='text-3xl font-bold'>Resources</div>
              <Link href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7013e2.htm" className='underline'>Depression data</Link>
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
            <div className='text-3xl font-bold'>Resources</div>
            <Link href="https://www.cdc.gov/nchs/products/databriefs/db241.htm" className='underline'>Suicides rate data</Link>
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
            <div className='text-3xl font-bold'>Resources</div>
            <Link href="https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder-ptsd" className='underline'>PTSD rate data</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
