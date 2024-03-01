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
            <div className='text-white'>
              <h5 className='fw-bold'>A.D.P.</h5>
              <p>@Amigos Del Puangue.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white">
              <h5 className='fw-bold'>Patrocinio</h5>
              <p>@Chichas Duran</p>
              <p>Vamos! Ayudanos a cuidar.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white">
              <h5 className='fw-bold'>Enlaces</h5>
              <a href="https://www.instagram.com/festin_sin_piedra2024?igsh=NjgxZ292ZTRzY2Nv" target="_blank" rel="noopener noreferrer">Instagram</a>
              <p>Facebook</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white">
              <h5 className='fw-bold'>Contacto</h5>
              <p>amigosdelpuangue.cvi@gmail.com </p>
              <p>Haz click en nuestras redes sociales.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
