import { useState, useEffect } from 'react';
import './work_page_corusel.css';

const WorkPageCorusel = () => {
  const texts = [
    "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci facilis dignissimos doloribus architecto tempora necessitatibus sint maxime nihil veritatis.\" ",
    "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci facilis dignissimos doloribus architecto tempora necessitatibus sint maxime nihil veritatis.\" ",
    "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci facilis dignissimos doloribus architecto tempora necessitatibus sint maxime nihil veritatis.\" "
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
    <div>
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
  );
};

export default WorkPageCorusel;
