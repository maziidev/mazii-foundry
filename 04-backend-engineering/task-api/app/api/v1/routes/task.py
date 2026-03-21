from typing import List

from fastapi import APIRouter, HTTPException, status

from app.schemas.task import TaskCreate, TaskResponse, TaskUpdate

router = APIRouter()
# database comes later
tasks = []

@router.get("/", response_model=List[TaskResponse])
async def get_tasks():
    return tasks

@router.post("/", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
async def create_tasks(task:TaskCreate):
    new_task = {
        "id": len(tasks) + 1,
        "title": task.title,
        "description": task.description,
        "priority": task.priority,
        "completed": False
    }
    tasks.append(new_task)
    return new_task


@router.get("/{task_id}", response_model=TaskResponse)
async def get_task(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@router.patch("/{task_id}", response_model=TaskResponse)
async def update_task(task_id: int, task_update: TaskUpdate):
    for task in tasks:
        if task["id"] ==task_id:
            updates =task_update.model_dump(exclude_unset=True)
            for key, value in updates.items():
                task[key] = value
            return task
    raise HTTPException(status_code=404, detail=f"Task with id{task_id} not found")

@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_task(task_id: int):
    for idx, task in enumerate(tasks):
        if task['id'] == task_id:
            tasks.pop(idx)
            return
    raise HTTPException(status_code=404, detail="Task not found")