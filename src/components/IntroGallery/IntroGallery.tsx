import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../assets/img/TataBarahona1.png'
import Image2 from '../../assets/img/mubastik.png'
import Image3 from '../../assets/img/trovadores2.png'


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Image1} alt="image1" className="d-block w-100" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="image2" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} alt="image3" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselFadeExample