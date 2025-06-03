import { fetchFileList, fetchFileData } from './filesAPI';

global.fetch = jest.fn();

describe('filesAPI', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetchFileList debería retornar lista de archivos', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ['file1.csv', 'file2.csv'],
    });

    const result = await fetchFileList();
    expect(result).toEqual(['file1.csv', 'file2.csv']);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetchFileData sin nombre de archivo debería retornar líneas', async () => {
    const mockData = [
      {
        file: 'test.csv',
        lines: [{ text: 'a', number: '1', hex: 'abc123' }],
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchFileData();
    expect(result).toEqual([
      { fileName: 'test.csv', text: 'a', number: '1', hex: 'abc123' },
    ]);
  });

  it('debería lanzar error si fetch falla', async () => {
    fetch.mockResolvedValueOnce({ ok: false, json: async () => ({ message: 'Error custom' }) });

    await expect(fetchFileData()).rejects.toThrow('Error custom');
  });
});
