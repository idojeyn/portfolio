import './work_page.css'



const WorkProps = (props) => {
  return (
    <div className="col-md-6 col-lg-4 pb-3">
      <div className="media-1">
        <img src={props.img} alt="Img" className="img-fluid mb-lg-0 mb-4" />
        <div className="media-1-content img-fluid">
          <h2>{props.name}</h2>
          <span className="category">{props.span}</span>
        </div>
      </div>
    </div>
  )
}


const WorkPage = () => {
  return (
    <div id='Work' className='box1'>
      <div className="container1">
        <div className="text col-md-8 py-3">
          <h1 className='bolder'>Our Works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
        </div>
        <div className="row m-3">
          <WorkProps img="/images/img_1.jpg.webp" name='Bonzai Tree' span='WEB APPLICATION'/>
          <WorkProps img="/images/img_2.jpg.webp" name='Simple Woman' span='BRANDING'/>
          <WorkProps img="/images/img_3.jpg.webp" name='Fruits' span='WEBSITE'/>
          <WorkProps img="/images/img_4.jpg.webp" name='Design Material' span='WEB APPLICATION'/>
          <WorkProps img="/images/img_5.jpg.webp" name='Handy Food' span='BRANDING'/>
          <WorkProps img="/images/img_6.jpg.webp" name='Cat With Cup' span='WEBSITE'/>
        </div>
      </div>
      <div className="clr"></div>
    </div>
  )
}

export default WorkPage