import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesData, setSelectedFile } from '../redux/features/files/filesSlice';

function FileSelector() {
  const dispatch = useDispatch();
  const { selectedFile, fileOptions } = useSelector((state) => state.files);

  const handleFileChange = (e) => {
    const file = e.target.value;
    dispatch(setSelectedFile(file));
    dispatch(getFilesData(file));
  };

  return (
    <Form.Group className="mb-3 px-4" controlId="fileSelect">
      <Form.Label>Filtrar por archivo</Form.Label>
      <Form.Select value={selectedFile} onChange={handleFileChange}>
        <option value="">Todos los archivos</option>
        {fileOptions.map((file, index) => (
          <option key={index} value={file}>{file}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default FileSelector;
