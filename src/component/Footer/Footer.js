import './Footer.css'

const Footer = () => {
	return (
		<div>
			<div className='footer_lets'><p>Let's Get Started</p></div>
			<div className='footer_footer'>
				<div className='footer1-div'>
					<h3>About Us</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
				</div>
				<div className='footer2-div'>
					<h3>Features</h3>
					<p>About Us</p>
					<p>Services</p>
					<p>Testimonials</p>
					<p>Contact Us</p>
				</div>
				<div className='footer3-div'>
					<h3>Follow Us</h3>
					<i className="fa-brands fa-facebook"></i>
					<i className="fa-brands fa-square-twitter"></i>
					<i className="fa-brands fa-linkedin"></i>
					<i className="fa-brands fa-square-instagram"></i>
				</div>
				<div className='footer4-div'>
					<h3>Subscribe Newsletter</h3>
					<input type="text" name="" id="" placeholder='Enter Email' className='email_footer' />
					<button className='send'>Send</button>
				</div>
				<div className='footer_hr'></div>
				<p className='ortaga'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
			</div>
		</div>
	)
}

export default Footer