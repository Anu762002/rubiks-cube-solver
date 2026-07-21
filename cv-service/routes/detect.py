from fastapi import APIRouter

router = APIRouter(
    prefix="/detect",
    tags=["Detection"]
)

@router.get("/")
def detect():
    return {
        "success": True,
        "message": "Detection API Working"
    }