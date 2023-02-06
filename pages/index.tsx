import type { NextPage } from 'next'
import DemoWidget from '../components/demo-widget'

const Home: NextPage = () => {
  return (
    <div className="p-4 h-[1000px]">
      <DemoWidget />
    </div>
  )
}

export default Home
