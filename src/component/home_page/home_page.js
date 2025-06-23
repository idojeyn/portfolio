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

  const BoxProps = (props) => {
    return (
      <div className="col-md-6 col-lg-4 p-lg-3">
        <div className="p-lg-3 number-box">
          <div className="number">{props.number}</div>
          <h2 className="text-primary1">{props.name}</h2>
          <p className='mb-lg-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio consequatur aut doloribus voluptate quis sapiente adipisci sit ab tempora.</p>
          <ul className="list-unstyled ul-check primary">
            <li><i className="fas fa-check text-primary1 "></i> {props.p1}</li>
            <li><i className="fas fa-check text-primary1 "></i> {props.p2}</li>
            <li><i className="fas fa-check text-primary1 "></i> {props.p3}</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div id='home'>
      <div className="img">
        <div className="dark-overley">
          <h1>We Love To Build <span style={{ color: 'white' }}>{text}</span>
            <Cursor cursorStyle="|" /></h1>
          <h4>Free Web Template by <span>Colorlib</span></h4>
          <a href='index.html' className="btn btn-primary btn-md">WATCH VEDIO</a>
        </div>
      </div>
      <div className='box'>
        <div className="container">
          <div className="row">
            <BoxProps number='01.' name='Innovate' p1='Customer Experience' p2='Product Management' p3='Proof of Concept' />
            <BoxProps number='02.' name='Create' p1='Web Design' p2='Branding' p3='Web & App Development' />
            <BoxProps number='03.' name='Scale' p1='Social Media' p2='Paid Campaigns' p3='Marketing & SEO' />
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </div>
  )
}

export default HomePage