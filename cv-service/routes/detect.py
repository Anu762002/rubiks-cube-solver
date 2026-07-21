from fastapi import APIRouter, UploadFile, File
import os

router = APIRouter(
    prefix="/detect",
    tags=["Detection"]
)

UPLOAD_DIR = "temp"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")
async def detect(image: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, image.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await image.read())

    return {
        "success": True,
        "filename": image.filename,
        "path": file_path
    }