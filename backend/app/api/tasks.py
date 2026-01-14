from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from typing import List
from backend.app.core.database import  get_db
from backend.app.core.auth import get_current_user, require_view, require_create, require_delete, require_edit, AuthUser
from backend.app.models.task import Task
from backend.app.schemas.task import TaskCreate, TaskUpdate, TaskStatusUpdate, TaskResponse

route = APIRouter(prefix="/api/tasks", tags=["tasks"])

@route.get("", response_model=List[TaskResponse])
def list_tasks(user: AuthUser = Depends(require_view),
                db: Session =  Depends(get_db)):
    tasks = db.query(Task).filter(Task.org_id == user.org_id).all()
    return tasks

@route.post("", response_model=TaskResponse)
def list_tasks(task_data: TaskCreate,
               user: AuthUser = Depends(require_create),
               db: Session =  Depends(get_db)):
    task = Task(
        title=task_data.title,
        description=task_data.description,
        status=task_data.status,
        org_id=user.org_id,
        created_by=user.user_id
    )
    db.add(task)
    db.commit()
    db.refresh(task)

    return task

