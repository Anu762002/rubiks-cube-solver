from fastapi import FastAPI
from routes.detect import router

app = FastAPI(title="Rubik Cube CV Service")

app.include_router(router)

@app.get("/")
def root():
    return {
        "success": True,
        "message": "CV Service Running"
    }