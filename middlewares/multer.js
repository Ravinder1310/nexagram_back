import multer from "multer";
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        // Allow only image and video file types
        if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
            cb(null, true); // Accept file
        } else {
            cb(new Error('Unsupported media type'), false); // Reject file
        }
    },
    limits: {
        fileSize: 100 * 1024 * 1024 // Limit file size to 10MB (optional)
    }
});
export default upload;
