import './work_page_card.css'
import { useState, useEffect } from 'react';

const CardProps = (props) => {
  return (
    <div className="p-3 col-6">
      <p><i className={props.icon}></i> {props.name}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
      <u>Read More</u>
    </div>
  )
}

const WorkPageCard = () => {
  const texts = [
    "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci facilis dignissimos doloribus architecto tempora necessitatibus sint maxime nihil.\" ",
    "\" Esse adipisci facilis dignissimos doloribus architecto tempora necessitatibus sint maxime nihil veritatis.\" ",
    "\"Error, nam aut aperiam provident est eos nostrum, necessitatibus hic, nemo repellendus corrupti aliquid alias vel impedit eligendi? In sit tenetur quasi?\" "
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const handleDotClick = (i) => {
    setIndex(i);
  };
  return (
    <div className='box1'>
      <div className="container dark ">
        <div className="row align-items-center py-3">
          <div className="col-6">
            <img className='p-3' src="/images/about_1.jpg.webp" height={'450px'} alt="" />
          </div>
          <div className="col-6 row">
            <CardProps icon="fas fa-umbrella-beach fa-2x" name='Strategy' />
            <CardProps icon="fas fa-paint-roller fa-2x" name='Art Direction' />
            <CardProps icon="fas fa-wrench fa-2x" name='Web Development' />
            <CardProps icon="fas fa-comments fa-2x" name='Copywriting' />
          </div>
        </div>
      </div>
      <div className="clr"></div>
      <div className="containerCorusel">
        <div className="carousel-container">
          <h1 className='content2'>Testimonials</h1>
          <div className="carousel-text"><i><p>{texts[index]}</p></i></div>
          <div className="carousel-dots">
            {texts.map((_, i) => (
              <span key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => handleDotClick(i)}></span>
            ))}
          </div>
        </div>
      </div>
      <div className="clr"></div>
    </div>
  )
}

export default WorkPageCard