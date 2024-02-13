import Form from 'react-bootstrap/Form'
import './contacto.css'

const Contacto = () => {
  return (
    <div className='custom-form'>
    <Form className='m-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Envianos un un mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
  )
}

export default Contacto
