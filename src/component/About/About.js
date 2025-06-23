import './About.css'

const OurTeamprops = (props) => {
	return (
		<div className='ourteamprops_div col-md-6 col-lg-4 mb-lg-0 p-3'>
			<img src={props.img} alt="" />
			<p className='ourteamprops_div_name'>{props.name}</p>
			<p className='ourteamprops_div_work'>{props.work}</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
			<div className='iconca_div'>
				<i className="fa-brands fa-facebook"></i>
				<i className="fa-brands fa-square-twitter"></i>
				<i className="fa-brands fa-linkedin"></i>
				<i className="fa-brands fa-square-instagram"></i>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div>
			<div id="about">
				<hr className='hrr' />
				<div className='aboutus_containerr_div container'>
					<div className="row mb-5">
						<div className='About_picture col-md-6 mb-5 order-md-2'>
							<img className='img-fluid rounded' src="/images/about_1.jpg.webp" alt="" />
						</div>
						<div className='aboutus_div col-md-6  row'>
							<p className='aboutus col-lg-12'>About Us</p>
							<p className='aboutus_text col-12 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit hic quos minus similique deserunt quas perspiciatis. Porro dolorum molestias, deleniti praesentium iste, voluptatum accusamus culpa nostrum assumenda obcaecati voluptatem earum.</p>
							<div className='ikonkali_div mb-md-4 col-lg-6 col-md-12'>
								<i className="fa-solid fa-laptop-code"></i>
								<p className='nomi'>Web & Mobile Specialties</p>
								<p className='nomi_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
								<a href="a">Learn more</a>
							</div>
							<div className='ikonkali_div mb-md-4 col-lg-6 col-md-12'>
								<i className="fa-solid fa-puzzle-piece"></i>
								<p className='nomi'>Intuitive Thinkers</p>
								<p className='nomi_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
								<a href="a">Learn more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='ourteam' className="container my-5">
				<p className='ourteam'>Our Team</p>
				<div className='ourteam_div row mb-5'>
					<OurTeamprops img='/images/person_2.jpg' name='John Rooster' work='Co-Founder, President' />
					<OurTeamprops img='/images/person_3.jpg' name='John Rooster' work='Co-Founder, President' />
					<OurTeamprops img='/images/person_4.jpg' name='John Rooster' work='Co-Founder, President' />
				</div>
			</div>
			<hr className='hrr' />
		</div>

	)
}

export default About