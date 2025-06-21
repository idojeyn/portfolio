import Header from '../header/Header'
import './App.css'
import HomePage from '../home_page/home_page'
import HomePageBox from '../home_page_box/home_page_box'
import WorkPage from '../work_page/work_page'
import WorkPageCard from '../work_page_card/work_page_card'
import WorkPageCorusel from '../work_page_corusel/work_page_corusel'
import ServicesPage from '../services_page/services_page'



const App = () => {
  return (
    <div>
        <Header/>
        <HomePage/>
        <HomePageBox/>
        <WorkPage/>
        <WorkPageCard/>
        <WorkPageCorusel/>
        <ServicesPage/>
    </div>
  )
}

export default App