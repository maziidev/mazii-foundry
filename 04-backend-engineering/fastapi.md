# Stage 4 — FastAPI CRUD + Pydantic

## Pydantic Rules

- Plain type (str, int) → query parameter → in URL
- Pydantic model → request body → in JSON body
- Path variable {id} → path parameter → in URL path

## Schema Pattern

```python
# Incoming — strict validation
class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    priority: str = Field(default="medium", pattern="^(low|medium|high)$")

# Outgoing — shapes the response
class TaskResponse(BaseModel):
    id: int
    title: str
    completed: bool

# Partial update — all fields optional
class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=100)
    completed: Optional[bool] = None
```

## Full CRUD Pattern

```python
GET    /tasks          → list all — 200
POST   /tasks          → create   — 201
GET    /tasks/{id}     → get one  — 200
PATCH  /tasks/{id}     → update   — 200
DELETE /tasks/{id}     → delete   — 204
```

## HTTPException — Returning Errors

```python
raise HTTPException(status_code=404, detail="Task not found")
```

## Key Rules

- raise HTTPException AFTER the loop — not inside it
- response_model filters what goes out to the client
- model_dump(exclude_unset=True) — only fields user sent
- 204 No Content returns nothing — no response body
- Always use status.HTTP_xxx constants not raw numbers
