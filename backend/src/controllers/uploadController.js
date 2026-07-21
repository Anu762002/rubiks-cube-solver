import { detectCube } from "../services/pythonService.js";

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image uploaded"
            });
        }

        const pythonResponse = await detectCube(req.file.path);

        return res.status(200).json({
            success: true,
            message: "Image uploaded and processed successfully",
            uploadedImage: {
                filename: req.file.filename,
                path: req.file.path
            },
            pythonResponse
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to process image",
            error: error.message
        });
    }
};