import json
from fastapi import APIRouter, Request, HTTPException, status
from svix.webhooks import Webhook, WebhookVerificationError
from app.core.config import settings
from app.core.clerk import clerk

router = APIRouter(prefix="/api/webhooks", tags=["webhooks"])

PRO_TIER_SLUG = "pro_tier"
FREE_TIER_LIMIT = settings.FREE_TIER_LIMIT
UNLIMITED_LIMIT = 1000000


def set_org_member_limit(org_id: str, limit: int):
    clerk.organizations.update(
        organization_id=org_id,
        max_allowed_memberships=limit
    )


def has_active_pro_plan(items: list) -> bool:
    return any(
        item.get("plan", {}).get("slug") == PRO_TIER_SLUG
        and item.get("status") == "active"
        for item in items
    )