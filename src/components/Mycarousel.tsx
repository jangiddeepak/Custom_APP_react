import Carousel from 'react-bootstrap/Carousel';
import img1 from '../static/images/h2.jpg';
import img2 from '../static/images/h3.jpg';
import img3 from '../static/images/h4.webp'
import img4 from '../static/images/h5.webp'
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';

function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to={'/electronics'}>
      <img height="600px" width="100%" src={img2}></img>
        <Carousel.Caption>
          <h3 style={{color:"red"}}>ONeplus 6+</h3>
          <p>
            A Latest phone with snapdragon processor
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
     <Carousel.Item>
      <Link to={'/she/her'}>
      <img height="600px" width="100%" src={img3}></img>
        <Carousel.Caption>
          <h3 >new Jacket from levis</h3>
          <p>A new winter collection by levis</p>
        </Carousel.Caption>
        </Link>
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
      <Carousel.Item>
        <img height="600px" width="100%" src={img1}></img>
        <Carousel.Caption>
          <h3  style={{color:"yellow"}}> Amazon echo </h3>
          <p>Amazon echo with ultimate</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;