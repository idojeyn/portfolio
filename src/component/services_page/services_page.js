import './services_page.css'


const ServicesProps = (props) => {
  return (
      <div className="col-lg-4 col-md-6 p-lg-5 my-2">
        <div className="unit-4 d-flex">
          <div className="px-3 text-primary1">
            <i className={props.icon}></i>
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus?</p>
            <p className='text-primary1'><u>Learn More</u></p>
          </div>
        </div>
      </div>
  )
}



const ServicesPage = () => {
  return (
    <div id='Services' className='serves'>
      <div className="container">
        <h1>Our Services</h1>
        <div className="row">
          <ServicesProps name='Web Design' icon="fas fa-laptop fa-2x"/>
          <ServicesProps name='eCommerce' icon="fas fa-cart-shopping fa-2x"/>
          <ServicesProps name='Web Applications' icon="fas fa-comments fa-2x"/>
          <ServicesProps name='Branding' icon="fas fa-paint-roller fa-2x"/>
          <ServicesProps name='Copy Writing' icon="fas fa-puzzle-piece fa-2x"/>
          <ServicesProps name='Mobile Applications' icon="fas fa-laptop-code fa-2x"/>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage