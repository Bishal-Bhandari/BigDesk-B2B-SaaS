import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    CLERK_SECRET_KEY: str = os.getenv("CLERK_SECRET_KEY", "")
    CLERK_PUBLISHABLE_KEY: str = os.getenv("CLERK_PUBLISHABLE_KEY", "")
    CLERK_WEBHOOK_KEY: str = os.getenv("CLERK_WEBHOOK_KEY", "")
    CLERK_JWT_KEY: str = os.getenv("CLERK_JWT_KEY", "")

    DATABASE_URL: str = os.getenv("DATABASE_URL", "")
    FRONTEND_URL: str = os.getenv("FRONTEND_URL", "")

    FREE_TIER_MEMBERSHIP_LIMIT: int = 2
    PRO_TIER_MEMBERSHIP_LIMIT: int = 0 # No limit