import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const PYTHON_API = "http://127.0.0.1:8000/detect/";

export const detectCube = async (imagePath) => {
    try {
        const form = new FormData();

        form.append("image", fs.createReadStream(imagePath));

        const response = await axios.post(
            PYTHON_API,
            form,
            {
                headers: form.getHeaders()
            }
        );

        return response.data;

    } catch (err) {
        console.error(err.message);
        throw err;
    }
};