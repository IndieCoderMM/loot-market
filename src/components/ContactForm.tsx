import { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Container } from 'react-bootstrap';
import Toast from './Toast';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('contact');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
    }
  }, [state]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" ref={nameRef} required />
        </Form.Group>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" ref={emailRef} required />
        </Form.Group>

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            ref={messageRef}
            required
          />
        </Form.Group>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {state.succeeded && (
          <Toast
            title="Message Sent!"
            message="Thanks for reaching out to us."
            variant="light"
          />
        )}

        <Button variant="danger" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
