import Container from 'react-bootstrap/Container';

const NotFound = () => {
  return (
    <Container
      className="my-5"
      style={{
        minHeight: '50vh',
      }}
    >
      <div
        className="bg-black rounded-3 p-3 p-sm-5 text-center text-white"
        style={{
          height: '40vh',
          maxHeight: '400px',
        }}
      >
        <h1 className="fw-bold mb-3">Page Not Found!</h1>
        <p className="px-1 px-md-5 mb-4 text-center">
          The page you're looking for doesn't exist. Please check the URL and
          try again. If you think this is a mistake, please contact us.
        </p>
        <p>
          <strong>Email Address:</strong>{' '}
          <a href="mailto:support@gamezon.com" className="text-white">
            support@gamezon.com
          </a>
        </p>
        <div className="d-flex align-items-center mt-5 justify-content-center">
          <button
            type="button"
            className="btn btn-outline-light btn-lg px-5"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </Container>
  );
};
export default NotFound;
