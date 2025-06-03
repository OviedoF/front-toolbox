import reducer, { setSelectedFile } from './filesSlice';

const initialState = {
  fileOptions: [],
  files: [],
  selectedFile: '',
  loading: false,
  error: '',
};

describe('filesSlice', () => {
  it('debería retornar el estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('debería actualizar selectedFile', () => {
    const nextState = reducer(initialState, setSelectedFile('archivo.csv'));
    expect(nextState.selectedFile).toBe('archivo.csv');
  });

  it('debería manejar getFilesData.pending', () => {
    const action = { type: 'files/getData/pending' };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe('');
  });

  it('debería manejar getFilesData.fulfilled', () => {
    const payload = [{ fileName: 'f1.csv', text: 't', number: '1', hex: 'abc123' }];
    const action = { type: 'files/getData/fulfilled', payload };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.files).toEqual(payload);
  });

  it('debería manejar getFilesData.rejected', () => {
    const action = {
      type: 'files/getData/rejected',
      error: { message: 'Algo falló' },
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Algo falló');
  });
});
