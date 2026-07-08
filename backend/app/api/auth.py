from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.user import UserCreate, UserResponse
from app.services.auth_service import create_user
from app.core.dependencies import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserResponse, UserLogin
from app.services.auth_service import create_user, login_user
router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return create_user(db, user)



@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    token = login_user(
        db,
        user.email,
        user.password
    )

    if token is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return token