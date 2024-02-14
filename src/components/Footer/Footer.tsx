import logo from '../../assets/img/logo2.jpeg'
import './Footer.css'


const Footer = () => {
    return (
        <footer className='footer d-flex justify-content-around align-items-center p-3 mt-3'>
            <div className="d-flex gap-3 text-white align-items-center">
                <div className='logo-footer'>
                <img src={logo} alt="logo"/>
                </div>
                <div className='text-white'>
                    <h5 className='fw-bold'>A.D.P.</h5>
                    <p>Amigos Del Puangue.</p>
                </div>
            </div>
            <div className="text-white">
                <h5 className='fw-bold'>Patrocinio</h5>
                <p>@Chichas Duran</p>
                <p>Vamos! Ayudanos a cuidar.</p>
            </div>
            <div className="text-white">
                <h5 className='fw-bold'>Enlaces</h5>
                <p>instagrams</p>
                <p>facebook</p>
            </div>
            <div className="text-white">
                <h5 className='fw-bold'>Contacto</h5>
                <p>amigosdelpuangue.cvi@gmail.com </p>
                <p>Telefono</p>
            </div>
        </footer>
    );
}

export default Footer