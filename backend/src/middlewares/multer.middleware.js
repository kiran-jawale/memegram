import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/images");
  },
  filename: function (req, file, cb) {
    const unique = uuidv4(); //generating unique if/name for image
    cb(null, unique + path.extname(file.originalname)); //new name with extension of original
  },
});

const upload = multer({ storage });
export default upload;
