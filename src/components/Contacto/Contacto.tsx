import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import './contacto.css'

const Contacto = () => {
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setShowSuccess(true)
      form.reset()
    } catch (error) {
      setShowError(true)
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <div className='custom-form'>
      <Form className='m-5' onSubmit={handleSubmit} action="https://formsubmit.co/7b450afe941e0d5b65d7597f877b5abb" method="POST">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Envíanos un mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <Button className="btn fw-bold" type="submit">
          Enviar
        </Button>
        {showError && <Alert variant="danger" className="mt-3">Error al enviar el formulario. Inténtalo de nuevo más tarde.</Alert>}
        {showSuccess && <Alert variant="success" className="mt-3">¡El formulario se envió correctamente!</Alert>}
      </Form>
    </div>
  )
}

export default Contacto
