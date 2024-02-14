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
          <h3>Tata Barahona</h3>
          <p>Festin sin piedra 2020.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="image2" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Festin sin piedra 2020.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} alt="image3" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Trovadores De La Loma</h3>
          <p>
            Festin sin piedra 2020.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselFadeExample