import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function FileTable() {
  const { files } = useSelector((state) => state.files);

  return (
    <Table striped bordered hover responsive>
      <thead className="table-light">
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((row, index) => (
          <tr key={index}>
            <td>{row.fileName}</td>
            <td>{row.text}</td>
            <td>{row.number}</td>
            <td className="text-break">{row.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FileTable;
