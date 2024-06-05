import { useState } from 'react';
import { Form, Button, Alert, FormGroup } from 'react-bootstrap';
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
      <Form className='form m-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email <span className='text-warning fw-bold'>:</span></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Envíanos un mensaje <span className='text-warning fw-bold'>:</span></Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <FormGroup>
        </FormGroup>
        <Form.Group className='mb-3 mt-4'>
          <Form.Label className='text-center'>
            <p className='span-label'><span className='text-info'>Nuestro email </span><span className='text-warning fw-bold'>:</span> amigosdelpuangue.cvi.20@gmail.com</p>
          </Form.Label>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-2">
            <a className='social-icon' href="https://www.instagram.com/amigosdelpuangue/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a className='social-icon' href="https://www.youtube.com/@amigosdelpuangue7242" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <Button className="submit-button fw-bold" type="submit" disabled={showSending}>
              {showSending ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </Form.Group>
        {showError && <Alert variant="danger" className="mt-3">Error al enviar el formulario. Inténtalo de nuevo más tarde.</Alert>}
        {showSuccess && <Alert variant="success" className="mt-3">¡El formulario se envió correctamente!</Alert>}
      </Form>
  );
};

export default Contacto;
