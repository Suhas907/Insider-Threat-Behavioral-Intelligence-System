# from fastapi import FastAPI

# from app.core.database import engine, Base
# from app.models.user import User
# from app.models.otp import OTPCode
# from app.api import auth
# from app.api import users

# Base.metadata.create_all(bind=engine)

# app = FastAPI(title="Insider Threat Behavioral Intelligence System")


# @app.get("/")
# def home():
#     return {
#         "message": "Backend is running successfully!"
#     }


# app.include_router(
#     auth.router,
#     prefix="/auth",
#     tags=["Authentication"]
# )

from fastapi import FastAPI

from app.core.database import engine, Base
from app.models.user import User
from app.models.otp import OTPCode
from app.api import auth
from app.api import users

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Insider Threat Behavioral Intelligence System")


@app.get("/")
def home():
    return {
        "message": "Backend is running successfully!"
    }


# app.include_router(
#     auth.router,
#     prefix="/auth",
#     tags=["Authentication"]
# )

# app.include_router(
#     users.router,
#     tags=["Users"]
# )
# app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
# app.include_router(users.router)
app.include_router(auth.router)
app.include_router(users.router)