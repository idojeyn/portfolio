import './Header.css'

const Header = () => {
  return (
    <div className='cont'>
      <div className='nav1'>
        <div className="container">
          <div className="phone">
            <p>phone: <span >+1 234 5678 9101 </span> </p>
            <p> email: <span >info@yourdomain.com</span></p>
          </div>
          <div className="icon">
            <i className="fab fa-facebook-f "></i>
            <i className="fab fa-twitter "></i>
            <i className="fab fa-instagram "></i>
            <i className="fab fa-linkedin "></i>
          </div>
        </div>
      </div>
      <header className='navbar '>
        <div className="container">
          <h2><a href="index.html" className='logo'>Create <span>.</span></a></h2>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="a" role="button" aria-expanded="false">About</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#about">About</a></li>
                <li><a className="dropdown-item" href="#ourteam">Our team</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#Blok">Blok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href='#Contact'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="clr"></div>
    </div>
  )
}

export default Header