import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/img/logo2.jpeg'

const NavBar = () => {

  const setActiveClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-color-one text-decoration-none me-3 fw-bold fst-italic"
      : "text-color-two text-decoration-none me-3"
  }

  return (
    <Navbar expand="md" className="custom-navbar" fixed='top'>
      <Container>
        <Navbar.Brand href="https://amigosdelpuangue.netlify.app/" className='d-flex align-items-center gap-2'>
          <div className='logo-navbar'>
            <img src={logo} alt="logo" />
          </div>
          <h3 className='text-success'>A.D.P.</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={setActiveClass}>
              Inicio
            </NavLink>
            <NavLink to="/us" className={setActiveClass}>
              Nosotros
            </NavLink>
            <NavLink to="/news" className={setActiveClass}>
              Noticias
            </NavLink>
            <NavLink to="/Contact" className={setActiveClass}>
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar