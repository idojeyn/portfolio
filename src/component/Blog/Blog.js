import './Blog.css'

const Blogprops = (props) => {
	return (
		<div className='blogprops_div col-md-6 col-lg-4 p-lg-3 mb-4 mb-lg-4'>
			<img className='img-fluid' src={props.image} alt="a" />
			<p className='hour'>Create Beautiful Website In Less Than An Hour</p>
			<p className='brook'>Ham Brook • Jan 18, 2019 • <span className='rangi'>News</span></p>
			<p className='blogprops_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
			<p className='continu'>Continue Reading...</p>
		</div>
	)
}

const Blog = () => {
	return (
		<div id='Blok' className='container mb-md-5 padd'>
			<p className='blog_text'>Blog</p>
			<div className='cardd row '>
			<Blogprops image='/images/img_1.jpg.webp' />
			<Blogprops image='/images/img_2.jpg.webp' />
			<Blogprops image='/images/img_1.jpg.webp' />
			</div>
		</div>
	)
}

export default Blog