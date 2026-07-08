from fastapi import FastAPI

from app.core.database import engine, Base
from app.models.user import User
from app.models.otp import OTPCode
from app.api import auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Insider Threat Behavioral Intelligence System")


@app.get("/")
def home():
    return {
        "message": "Backend is running successfully!"
    }


app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"]
)