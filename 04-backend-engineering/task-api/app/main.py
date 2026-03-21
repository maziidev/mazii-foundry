from fastapi import FastAPI
from app.api.v1 import router as v1_router

app = FastAPI(
    title ="Task Management API",
    description="A production-grade task management API",
    version="1.0.0"
)

app.include_router(v1_router, prefix="/api/v1")
@app.get("/")
async def root():
    return{
        "msg": "Task API is running",
        "version": "1.0.0"
    }

@app.get('/health')
async def health_check():
    return{
        "status": "healthy"
    }