from typing import Optional

from pydantic import BaseModel, Field


class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    description: Optional[str]=Field(default=" ", max_length=500)
    priority: str = Field(default="medium", pattern="^(low|medium|high)$")

class TaskResponse(BaseModel):
    id:int
    title:str
    description: str
    priority:str
    completed: bool


class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None,  min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    priority: Optional[str] = Field(None, pattern="^(low|medium|high)$")
    completed: Optional[bool] = None
