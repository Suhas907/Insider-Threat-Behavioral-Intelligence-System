from datetime import datetime, timedelta

from sqlalchemy.orm import Session

from app.models.user import User
from app.models.otp import OTPCode

from app.core.security import generate_otp


def create_otp(db: Session, email: str):

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        return None

    otp = generate_otp()

    otp_record = OTPCode(
        user_id=user.id,
        otp_code=otp,
        expires_at=datetime.utcnow() + timedelta(minutes=5)
    )

    db.add(otp_record)
    db.commit()

    return otp
def verify_otp(db: Session, email: str, otp: str):

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        return False

    otp_record = db.query(OTPCode).filter(
        OTPCode.user_id == user.id,
        OTPCode.otp_code == otp,
        OTPCode.is_used == False
    ).first()

    if not otp_record:
        return False

    if otp_record.expires_at < datetime.utcnow():
        return False

    otp_record.is_used = True

    user.is_verified = True

    db.commit()

    return True