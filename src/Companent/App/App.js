import './App.css';
import About from '../About/About'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import OurTeam from '../OurTeam/OurTeam'

function App() {
  return (
    <div className="App">
      <About />
      <OurTeam />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
