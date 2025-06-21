import './services_page.css'

const ServicesPage = () => {
  return (
    <div className='serves'>
      <div className="container">
        <h1>Our Services</h1>
        <div className="row">
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-laptop fa-2x"></i>
              </div>
              <div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-cart-shopping fa-2x"></i>
              </div>
              <div>
                <h3>eCommerce</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-comments fa-2x"></i>
              </div>
              <div>
                <h3>Web Applications</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-paint-roller fa-2x"></i>
              </div>
              <div>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-puzzle-piece fa-2x"></i>
              </div>
              <div>
                <h3>Copy Writing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="unit-4 d-flex">
              <div className="px-3 text-primary1">
                <i className="fas fa-laptop-code fa-2x"></i>
              </div>
              <div>
                <h3>Mobile Applications</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
                <p className='text-primary1'><u>Learn More</u></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServicesPage