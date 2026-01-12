import httpx
from fastapi import HTTPException, status, Depends, Request
from clerk_backend_api.security import AuthenticateRequestOptions
from config import settings
from clerk import clerk

class AuthUser:
    def __init__(self, user_id: str, org_id: str, org_permissions: list):
        self.user_id = user_id
        self.org_id = org_id
        self.org_permissions = org_permissions

