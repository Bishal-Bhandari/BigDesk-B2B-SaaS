import httpx
from fastapi import HTTPException, status, Depends, Request
from clerk_backend_api.security import AuthenticateRequestOptions
from config import settings
from clerk import clerk