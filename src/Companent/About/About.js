import './About.css'

const About = () => {
	return (
		<div className='aboutus_containerr_div'>
			<div className='aboutus_div'>
				<p className='aboutus'>About Us</p>
				<p className='aboutus_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit hic quos minus similique deserunt quas perspiciatis. Porro dolorum molestias, deleniti praesentium iste, voluptatum accusamus culpa nostrum assumenda obcaecati voluptatem earum.</p>
				<div className='ikonkali_div'>
					<i class="fa-solid fa-laptop-code"></i>
					<p className='nomi'>Web & Mobile Specialties</p>
					<p className='nomi_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
					<a href="a">Learn more</a>
				</div>
				<div className='ikonkali_div'>
					<i class="fa-solid fa-puzzle-piece"></i>
					<p className='nomi'>Intuitive Thinkers</p>
					<p  className='nomi_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
					<a href="a">Learn more</a>
					</div>
			</div>
			<div className='About_picture'></div>
		</div>
	)
}

export default About