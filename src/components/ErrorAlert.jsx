import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function ErrorAlert({ error }) {
  return (
    <Alert variant="danger" className="d-flex justify-content-between align-items-center">
      <div>{error}</div>
      <Button variant="outline-danger" onClick={() => window.location.reload()}>
        Recargar
      </Button>
    </Alert>
  );
}

export default ErrorAlert;
