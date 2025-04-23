// backend/middlewares/upload.js
import multer from "multer";
import path from "path";

// Folder where uploaded files are saved
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Save with unique name
  },
});

const upload = multer({ storage });
export default upload;
