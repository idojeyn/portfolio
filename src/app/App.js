import Header from '../component/header/Header'
import './App.css'
import HomePage from '../component/home_page/home_page'
import WorkPage from '../component/work_page/work_page'
import WorkPageCard from '../component/work_page_card/work_page_card'
import ServicesPage from '../component/services_page/services_page'
import Blog from '../component/Blog/Blog'
import About from '../component/About/About'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'



const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <WorkPage />
      <WorkPageCard />
      <ServicesPage />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App