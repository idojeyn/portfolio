import './work_page_card.css'

const WorkPageCard = () => {
  return (
    <div className='box1'>
      <div className="container dark">
        <div className="row align-items-center py-3">
          <div className="col-5">
            <img className='p-3' src="/images/about_1.jpg.webp" height={'450px'} alt="" />
          </div>
          <div className="col-3 ml-avto">
            <div className="ml-avto p-3">
              <div className="mb-5">
                <p><i className="fas fa-umbrella-beach"></i> Strategy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                <a href="more"><u>Read More</u></a></div>
            </div>
            <div className='p-3'>
              <p><i className="fas fa-wrench"></i> Strategy</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <a href="more"><u>Read More</u></a>
            </div>
          </div>
          <div className="col-3">
            <div className="ml-avto p-3">
              <div className="mb-5">
                <p><i className="fas fa-umbrella-beach"></i> Strategy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                <a href="more"><u>Read More</u></a></div>
            </div>
            <div className='p-3'>
              <p><i className="fas fa-wrench"></i> Strategy</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
              <a href="more"><u>Read More</u></a>
            </div>
          </div>
        </div>
      </div>
      <div className="clr"></div>
    </div>
  )
}

export default WorkPageCard