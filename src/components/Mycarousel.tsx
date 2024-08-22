import Carousel from 'react-bootstrap/Carousel';
import img1 from '../static/images/h2.jpg';
import img2 from '../static/images/h3.jpg';
import img3 from '../static/images/h4.webp'
import img4 from '../static/images/h5.webp'
import { colors } from '@mui/material';

function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img height="600px" width="100%" src={img2}></img>
        <Carousel.Caption>
          <h3 style={{color:"red"}}>ONeplus 6+</h3>
          <p>
            A phone with snapdragon processor
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="600px" width="100%" src={img1}></img>
        <Carousel.Caption>
          <h3  style={{color:"yellow"}}> Mobile </h3>
          <p>New smart phone with ultimate features</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height="600px" width="100%" src={img3}></img>
        <Carousel.Caption>
          <h3 >new Jacket from levis</h3>
          <p>A new winter collection by levis</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img height="600px" width="100%" src={img4}></img>
        <Carousel.Caption>
          <h3 >New stock for kids </h3>
          <p>
            best fit for kids is here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;