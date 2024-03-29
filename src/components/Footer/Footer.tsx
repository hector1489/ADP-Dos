import logo from '../../assets/img/logo2.jpeg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer p-3'>
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-3">
            <div className='logo-footer'>
              <img src={logo} alt="logo" />
            </div>
            <div className='text-white mt-1'>
              <h5 className='fw-bold'>A.D.P.</h5>
              <p>Amigos Del Puangue.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column text-white">
              <h5 className='fw-bold'>Patrocinio</h5>
              <p>@Chichas Duran</p>
              <p>Vamos! Ayudanos a cuidar.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column text-white">
              <h5 className='fw-bold'>Enlaces</h5>
              <a href="https://www.instagram.com/amigosdelpuangue/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.youtube.com/@amigosdelpuangue7242" target="_blank" rel="noopener noreferrer">Youtube</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column text-white">
              <h5 className='fw-bold'>Contacto</h5>
              <p>amigosdelpuangue.cvi.20@gmail.com </p>
              <p>Haz click en nuestras redes sociales.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
