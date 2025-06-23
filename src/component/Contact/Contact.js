import './Contact.css'

const Contact = () => {
	return (
		<div id='Contact' className='bagroundi_contact'>
			<div className=" container">
				<p className='contactus'>Contact Us</p>
				<div className="row">
					<div className='contactform col-md-7 m-md-3 m-2'>
						<p className='contact_form_text'>Contact Form</p>
						<div className="row">
							<div className="name">
								<label className='col-md-5'>First Name
									<input type="text" placeholder='First Name' /></label>
								<label className='col-md-5'>Last Name
									<input type="text" placeholder='Last Name' /></label>
							</div>
							<label className='col-12' >Email
								<input className='col-12' type="email" placeholder='Email' />
							</label>
							<label className='col-12' >Subject
								<input className='col-12' type="text" placeholder='Subject' />
							</label>
							<label >Message
								<textarea className='textara col-12' placeholder='Message'></textarea>
							</label>
						</div>
						<button className='sendmessage'>SEND MESSAGE</button>
					</div>
					<div className='joylashuv col-md-4 m-md-3 m-2'>
						<h5>Address</h5>
						<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
						<h5>Phone</h5>
						<p className='raqam_rangi'>+1 232 3235 324</p>
						<h5>Email Address</h5>
						<p className='raqam_rangi'>youremail@domain.com</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact