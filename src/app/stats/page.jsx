import PrevalenceChart from '@/components/charts/PrevalenceChart'
import RecievedCareChart from '@/components/charts/ReceivedCareChart'
import DepressionChart from '@/components/charts/DepressionChart'
import SuicideRatesChart from '@/components/charts/SuicideRatesChart'
import PtsdChart from '@/components/charts/PtsdChart'

export default function page() {
  return (
    <div>
      <h1 id="chart-h1">Statistics</h1>
        <section>
          <h2>Prevalence of Mental Health Conditions</h2>
          <div className="chart-divs">
            <PrevalenceChart />
          </div>
          <a href="https://www.nimh.nih.gov/health/statistics/mental-illness"><cite>https://www.nimh.nih.gov/health/statistics/mental-illness</cite></a>
          <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics"><cite>https://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics</cite></a>
        </section>

        <section>
          <h2>Proportion That Received Treatment in Past Year</h2>
          <div className="chart-divs">
            <RecievedCareChart />
          </div>
          <a href="https://www.nimh.nih.gov/health/statistics/mental-illness"><cite>https://www.nimh.nih.gov/health/statistics/mental-illness</cite></a>
        </section>

        <section>
          <h2>Symptoms of Anxiety or Depression During Past 7 Days</h2>
          <div className="chart-divs">
            <DepressionChart />
          </div>
          <a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7013e2.htm"><cite>https://www.cdc.gov/mmwr/volumes/70/wr/mm7013e2.htm</cite></a>
        </section>

        <section>
          <h2>Suicide Rates</h2>
          <div className="chart-divs">
            <SuicideRatesChart />
          </div>
          <a href="https://www.cdc.gov/nchs/products/databriefs/db241.htm"><cite>https://www.cdc.gov/nchs/products/databriefs/db241.htm</cite></a>
        </section>

        <section>
          <h2>PTSD Prevalence Past Year (2001-2003)</h2>
          <div className="chart-divs">
            <PtsdChart />
          </div>
          <a href="https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder-ptsd"><cite>https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder-ptsd</cite></a>
        </section>
    </div>
  )
}
