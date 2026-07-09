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
    db.query(OTPCode).filter(
        OTPCode.user_id == user.id,
        OTPCode.is_used == False
    ).update(
        {"is_used": True}
)

    db.commit()

    otp = generate_otp()

    otp_record = OTPCode(
        user_id=user.id,
        otp_code=otp,
        expires_at=datetime.utcnow() + timedelta(minutes=5)
    )

    db.add(otp_record)
    db.commit()

    return otp
from datetime import datetime

def verify_otp(db: Session, email: str, otp: str):

    print(f"\n===== VERIFY OTP =====")
    print(f"Email: {email}")
    print(f"OTP Entered: {otp}")

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        print("User not found")
        return False

    print(f"User ID: {user.id}")

    otp_record = db.query(OTPCode).filter(
        OTPCode.user_id == user.id,
        OTPCode.otp_code == otp,
        OTPCode.is_used == False
    ).first()

    if not otp_record:
        print("OTP not found")
        return False

    print(f"Database OTP: {otp_record.otp_code}")
    print(f"Expires At: {otp_record.expires_at}")
    print(f"Current Time: {datetime.utcnow()}")

    if otp_record.expires_at < datetime.utcnow():
        print("OTP expired")
        return False

    otp_record.is_used = True
    user.is_verified = True

    db.commit()

    print("OTP verified successfully")

    return True