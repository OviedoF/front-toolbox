import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="secondary" />
      <p className="mt-3">Cargando datos...</p>
    </div>
  );
}

export default LoadingSpinner;
