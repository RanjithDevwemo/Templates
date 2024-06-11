import Carousel from 'react-bootstrap/Carousel';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Css/BlogSection.css"
// import img2 from "../assets/Images/UI-UX_Blog.jpg"
function BlogSection() {





  return (
    <div className="main-Blog">
        <div className="blog-content">
            <h1 className='blog-h'>Our Blog</h1>
            <p className='blog-p'>Our goal is to create a product and service 
                that you’re satisfied with and use it every day. This is why we’re
                 constantly working on our services to make it better every day and really 
                listen to what our users has to say.</p>
                <button>View All</button>
        </div>
      

 <Carousel data-bs-theme="dark" className='blog-sec'> 
     
              <Carousel.Item className=''>
      <h1>container one</h1>
        {/* <img
          className="d-block w-100 img-block"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        /> */}
        <div className="blog-p d">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore praesentium ad consequatur, exercitationem accusamus nisi 
        incidunt provident, ab unde
         illo rem molestiae eius .
</div>
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
 

      <Carousel.Item>
        {/* <img
          className="d-block  b-image"
          src={img2}
          alt="Second slide"
        /> */}

                <h1 className='blog-h'>container Two</h1>
                <div className="blog-p d">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore praesentium ad consequatur, exercitationem accusamus nisi 
        incidunt provident, ab unde
         illo rem molestiae eius .
</div>
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        /> */}
        <h1>container Three</h1>
        <div className="blog-p d">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore praesentium ad consequatur, exercitationem accusamus nisi 
        incidunt provident, ab unde
         illo rem molestiae eius .
</div>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default BlogSection;




