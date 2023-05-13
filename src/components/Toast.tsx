import { useState } from 'react';
import { ToastContainer, Toast as ToastBs } from 'react-bootstrap';

type ToastProps = {
  title: string;
  message: string;
  variant: string;
};

function Toast({ title, message, variant }: ToastProps) {
  const [show, setShow] = useState(true);
  return (
    <ToastContainer
      className="p-3"
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50vw',
        transform: 'translateX(-50%)',
      }}
    >
      <ToastBs
        onClose={() => setShow(false)}
        show={show}
        bg={variant}
        delay={3000}
        autohide
      >
        <ToastBs.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
        </ToastBs.Header>
        <ToastBs.Body>{message}</ToastBs.Body>
      </ToastBs>
    </ToastContainer>
  );
}

export default Toast;
