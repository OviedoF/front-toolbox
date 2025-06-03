import env from '../../../env';

export const fetchFileList = async () => {
  const res = await fetch(`${env.API_URL}/files/list`);
  if (!res.ok) throw new Error('Error al obtener la lista de archivos');
  return await res.json();
};

export const fetchFileData = async (fileName = '') => {
  const url = fileName
    ? `${env.API_URL}/files/data?fileName=${encodeURIComponent(fileName)}`
    : `${env.API_URL}/files/data`;
  const res = await fetch(url);
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || 'Error al obtener datos');
  }
  const files = await res.json();
  return files.flatMap(file =>
    file.lines.map(line => ({
      fileName: file.file,
      text: line.text,
      number: line.number,
      hex: line.hex,
    }))
  );
};
