import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../assets/img/festin2024/festin2024-10.jpeg'
import Image2 from '../../assets/img/festin2024/festin2024-2.jpeg'
import Image3 from '../../assets/img/festin2024/festin2024-14.jpeg'


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Image1} alt="image1" className="d-block w-100" />
        <Carousel.Caption>
        <h3>Festin Sin Piedra</h3>
          <p>2024.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="image2" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Festin sin piedra</h3>
          <p> 2024.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} alt="image3" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Festin sin piedra</h3>
          <p>
            2024.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselFadeExample