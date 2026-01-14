from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from typing import List
from backend.app.core.database import  get_db
from backend.app.core.auth import get_current_user, require_view, require_create, require_delete, require_edit
from backend.app.models.task import Task
from backend.app.schemas.task import TaskCreate, TaskUpdate, TaskStatusUpdate, TaskResponse

