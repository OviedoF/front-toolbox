import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesList, getFilesData } from './redux/features/files/filesSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FileSelector from './components/FileSelector';
import FileTable from './components/FileTable';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFilesList());
    dispatch(getFilesData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <FileSelector />
      <Container fluid className="px-4">
        {error ? <ErrorAlert error={error} /> : loading ? <LoadingSpinner /> : <FileTable />}
      </Container>
    </div>
  );
}

export default App;
