import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import "../Css/Testimonial.css"

import ban1 from "../assets//Images/banner1.jpg"
import ban2 from "../assets//Images/banner2.jpg"
import ban3 from "../assets//Images/banner3.jpg"

import Carousel from 'react-bootstrap/Carousel';

function Testimonial() {
  const [value, setValue] = React.useState(4);

  return (
  <Box
  sx={{
    '& > legend': { mt: 4 },
  }}
>
  <h1 className='test-h1'>Cutomer Testimonial</h1>
    <Carousel data-bs-theme="dark" className='caro'>
      <Carousel.Item>
        <img
          className="d-img"
          src={ban1}
          alt="First slide"
        />
           <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
<Rating
name="simple-controlled"
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-img"
          src={ban2}
          alt="Second slide"
        />
               <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<Rating
name="simple-controlled"
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
/>
        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-img"
          src={ban3}
          alt="Third slide"
        />

<h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
<Rating
name="simple-controlled"
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Box>
  );
}

export default Testimonial;






