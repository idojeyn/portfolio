import './work_page.css'

const WorkPage = () => {
  return (
    <div className='box1'>
      <div className="container1">
        <div className="text py-3">
          <h1 className='bolder'>Our Works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
        </div>
        <div className="row m-3">
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_1.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Bonzai Tree</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_2.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Smile Woman</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_3.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Fruit</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_4.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Bonzai Tree</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_5.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Bonzai Tree</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-4 pb-3">
            <div className="media-1">
              <img src="/images/img_6.jpg.webp" alt="Img" className="img-fluid" />
              <div className="media-1-content">
                <h2>Bonzai Tree</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clr"></div>
    </div>
  )
}

export default WorkPage