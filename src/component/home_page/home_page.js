import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './home_page.css'

const HomePage = () => {

  const [text] = useTypewriter({
    words: ['Web Apps', 'WordPress', 'Mobile Apps'],
    loop: true,
    typeSpeed: 130,
    deleteSpeed: 60,
    delaySpeed: 3000,
  });


  return (
    <div>
      <div className="img">
        <div className="dark-overley">
          <h1>We Love To Build <span style={{color:'white'}}>{text}</span>
        <Cursor cursorStyle="|"  /></h1>
        <h4>Free Web Template by <span>Colorlib</span></h4>
        <a href='index.html' className="btn btn-primary btn-md">WATCH VEDIO</a>
        </div>
      </div>
    </div>
  )
}

export default HomePage