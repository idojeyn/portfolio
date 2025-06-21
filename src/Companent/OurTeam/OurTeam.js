import './OurTeam.css'
const OurTeamprops = (props) => {
	return (
		<div className='ourteamprops_div'>
			<img src={props.img} alt="" />
			<p className='ourteamprops_div_name'>{props.name}</p>
			<p className='ourteamprops_div_work'>{props.work}</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
			<div className='iconca_div'>
				<i class="fa-brands fa-facebook"></i>
				<i class="fa-brands fa-square-twitter"></i>
				<i class="fa-brands fa-linkedin"></i>
				<i class="fa-brands fa-square-instagram"></i>
			</div>
		</div>
	)
}

const OurTeam = () => {
	return (
		<div>
			<p className='ourteam'>Our Team</p>
			<div className='ourteam_div'>
			<OurTeamprops img='/images/person_2.jpg' name='John Rooster' work='Co-Founder, President' />
						<OurTeamprops img='/images/person_3.jpg' name='John Rooster' work='Co-Founder, President' />
									<OurTeamprops img='/images/person_4.jpg' name='John Rooster' work='Co-Founder, President' />
									</div>
									<hr className='hrr' />
		</div>
	)
}

export default OurTeam