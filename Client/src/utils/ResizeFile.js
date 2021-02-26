import Resizer from 'react-image-file-resizer';
export const resizeFile = (file, width = 150, height = 150, type = 'jpeg') =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      type,
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });
