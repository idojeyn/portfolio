import './Footer.css'

const Footer = () => {
	return (
		<div>
			<div className='footer_lets'><p>Let's Get Started</p></div>
			<div className='footer_footer '>
				<div className="container">
					<div className="row">
						<div className='col-4'>
							<h3>About Us</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
						</div>
						<div className='col-2'>
							<h3>Features</h3>
							<p>About Us</p>
							<p>Services</p>
							<p>Testimonials</p>
							<p>Contact Us</p>
						</div>
						<div className=' col-2'>
							<h3>Follow Us</h3>
							<i className="fa-brands fa-facebook"></i>
							<i className="fa-brands fa-square-twitter"></i>
							<i className="fa-brands fa-linkedin"></i>
							<i className="fa-brands fa-square-instagram"></i>
						</div>
						<div className=' col-4'>
							<h3>Subscribe Newsletter</h3>
							<input type="text" placeholder='Enter Email' className='email_footer' />
							<button className='send'>Send</button>
						</div>
					</div>
				</div>
				<hr className='hrr' />
				<p className='ortaga'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
			</div>
		</div>
	)
}

export default Footer