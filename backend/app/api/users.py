from fastapi import APIRouter, Depends

from app.core.security import get_current_user
from app.models.user import User
from app.core.roles import require_roles

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def get_my_profile(
    current_user: User = Depends(get_current_user)
):
    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "role": current_user.role,
        "is_verified": current_user.is_verified,
        "is_active": current_user.is_active
    }

@router.get("/admin")
def admin_dashboard(
    current_user: User = Depends(
        require_roles(["Administrator"])
    )
):

    return {
        "message": "Welcome Administrator!",
        "user": current_user.username,
        "role": current_user.role
    }

@router.get("/security-manager")
def security_manager_dashboard(
    current_user: User = Depends(
        require_roles([
            "Security Manager",
            "Administrator"
        ])
    )
):

    return {
        "message": "Welcome Security Manager!",
        "user": current_user.username,
        "role": current_user.role
    }

@router.get("/soc-engineer")
def soc_engineer_dashboard(
    current_user: User = Depends(
        require_roles([
            "SOC Engineer",
            "Administrator"
        ])
    )
):

    return {
        "message": "Welcome SOC Engineer!",
        "user": current_user.username,
        "role": current_user.role
    }

@router.get("/security-analyst")
def security_analyst_dashboard(
    current_user: User = Depends(
        require_roles([
            "Security Analyst",
            "Administrator"
        ])
    )
):

    return {
        "message": "Welcome Security Analyst!",
        "user": current_user.username,
        "role": current_user.role
    }