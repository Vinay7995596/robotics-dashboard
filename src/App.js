import './App.css'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import LineChart from './components/LineChart'
import ArcCircle from './components/ArcCircle'
import Battery from './components/BatterStatus'
import Content from './components/Content'

const App = () => {
  return (
    <div>
      <div className='bg-container'>
        <div className='linechart-container'>
          <LineChart />
        </div>
        <div>
          <Content />
        </div>
      </div>
      <div className='bg-container'>
        <div className='bar-charts-container'>
          <BarChart />
        </div>

        <div className='pie-charts-container'>
          <PieChart />
        </div>
      </div>
      <div className='arc-bar-app-container'>
        <div>
          <ArcCircle />
        </div>
        <div>
          <Battery />
        </div>
        <div>
          <img src='https://images.techhive.com/images/article/2016/01/thinkstockphotos-511283035-100638943-large.jpg' alt='robo image' className='image-robo' />
        </div>
      </div>
    </div>
  )
}

export default App