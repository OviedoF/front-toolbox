import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFileList, fetchFileData } from './filesAPI';

export const getFilesList = createAsyncThunk('files/getList', async () => {
  return await fetchFileList();
});

export const getFilesData = createAsyncThunk('files/getData', async (fileName) => {
  return await fetchFileData(fileName);
});

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    fileOptions: [],
    files: [],
    selectedFile: '',
    loading: false,
    error: '',
  },
  reducers: {
    setSelectedFile(state, action) {
      state.selectedFile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilesList.fulfilled, (state, action) => {
        state.fileOptions = action.payload.files;
      })
      .addCase(getFilesData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getFilesData.fulfilled, (state, action) => {
        state.files = action.payload;
        state.loading = false;
      })
      .addCase(getFilesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error cargando datos';
      });
  },
});

export const { setSelectedFile } = filesSlice.actions;
export default filesSlice.reducer;