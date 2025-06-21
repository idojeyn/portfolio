import './Contact.css'

const Contact = () => {
	return (
		<div className='bagroundi_contact'>
			<p className='contactus'>Contact Us</p>
			<div className='contactform'>
				<p className='contact_form_text'>Contact Form</p>
				<label htmlFor="">First Name</label>
				<label htmlFor="" className='label_text'>Last Name</label><br />
				<input type="text" name="" id="" placeholder='First Name'  className='inputli'/>
								<input type="text" name="" id="" placeholder='Last Name'  className='input_surish'/><br />
				<label htmlFor="">Email</label><br />
				<input type="email" name="" id="" placeholder='Email' /><br />
				<label htmlFor="">Subject</label><br />
				<input type="text" name="" id="" placeholder='Subject' /><br />
				<label htmlFor="">Message</label><br />
				<textarea name="" id="" className='textara' placeholder='Message'></textarea>
				<button className='sendmessage'>SEND MESSAGE</button>
			</div> 
			<div className='joylashuv'>
				<h3>Address</h3>
				<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
				<h3>Phone</h3>
				<p className='raqam_rangi'>+1 232 3235 324</p>
				<h3>Email Address</h3>
				<p className='raqam_rangi'>youremail@domain.com</p>
				</div>
		</div>
	)
}

export default Contact