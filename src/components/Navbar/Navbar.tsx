import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/img/logo_amigosDelPuangue.png'

const NavBar = () => {

  const setActiveClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-color-one text-decoration-none me-3 fw-bold"
      : "text-color-two text-decoration-none me-3"
  }

  return (
    <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='d-flex align-items-center gap-2'>
          <div className='logo-navbar'>
            <img src={logo} alt="logo" />
          </div>
          <h3>A.D.P.</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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