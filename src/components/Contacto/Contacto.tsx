import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './contacto.css';

const Contacto = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSending, setShowSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setShowSending(true);

    try {
      await emailjs.sendForm(
        'service_a0x141h',
        'template_oi5ampe',
        form,
        'c4a3zcM5kTNKDmSEk'
      );

      setShowSuccess(true);
      form.reset();
    } catch (error) {
      setShowError(true);
      console.error('Error al enviar el formulario:', error);
    } finally {
      setShowSending(false);
    }
  };

  return (
    <div className='custom-form'>
      <Form className='m-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Envíanos un mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <Form.Group className='mb-3 d-flex flex-column'>
          <Form.Label>Nuestro email : amigosdelpuangue.cvi.20@gmail.com</Form.Label>
          <Button className="submit-button fw-bold" type="submit" disabled={showSending}>
            {showSending ? 'Enviando...' : 'Enviar'}
          </Button>
        </Form.Group>
        {showError && <Alert variant="danger" className="mt-3">Error al enviar el formulario. Inténtalo de nuevo más tarde.</Alert>}
        {showSuccess && <Alert variant="success" className="mt-3">¡El formulario se envió correctamente!</Alert>}
      </Form>
    </div>
  );
};

export default Contacto;
