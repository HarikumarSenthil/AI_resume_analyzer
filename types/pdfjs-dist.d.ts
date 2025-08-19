

declare module 'pdfjs-dist/build/pdf.mjs' {
  import * as pdfjs from 'pdfjs-dist';
  export = pdfjs;
}

declare module 'pdfjs-dist/build/pdf.worker.mjs?url' {
  const workerSrc: string;
  export default workerSrc;
}
