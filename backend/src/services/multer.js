import multer from "multer";

const storage = multer.memoryStorage(); // guarda archivos en memoria
const upload = multer({ storage });

export default upload;
