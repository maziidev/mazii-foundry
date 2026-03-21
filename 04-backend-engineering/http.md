# HTTP & Web Fundamentals

## HTTP Request Structure

```
METHOD /path HTTP/1.1
Headers
Body (optional)
```

## HTTP Methods — CRUD Mapping

| Method | CRUD   | Purpose                   |
| ------ | ------ | ------------------------- |
| GET    | Read   | Retrieve data             |
| POST   | Create | Create new resource       |
| PUT    | Update | Replace entire resource   |
| PATCH  | Update | Partially update resource |
| DELETE | Delete | Remove resource           |

## Status Codes

### 2xx Success

- 200 OK — successful GET, PUT, PATCH
- 201 Created — successful POST
- 204 No Content — successful DELETE

### 4xx Client Errors

- 400 Bad Request — invalid data
- 401 Unauthorized — not logged in
- 403 Forbidden — no permission
- 404 Not Found — resource missing
- 422 Unprocessable Entity — validation failed
- 429 Too Many Requests — rate limited

### 5xx Server Errors

- 500 Internal Server Error — server crashed
- 503 Service Unavailable — server down

## REST Design Rules

1. Use nouns not verbs in URLs
2. Use plural nouns — /tasks not /task
3. Nest resources — /users/1/tasks
4. Use HTTP methods for actions
5. Always version — /api/v1/

## Standard REST Endpoints

```
GET    /api/v1/tasks      → list all
POST   /api/v1/tasks      → create
GET    /api/v1/tasks/{id} → get one
PUT    /api/v1/tasks/{id} → replace
PATCH  /api/v1/tasks/{id} → partial update
DELETE /api/v1/tasks/{id} → delete
```

## Key Headers

- Content-Type: application/json
- Authorization: Bearer <token>
- Accept: application/json
- Cache-Control: max-age=3600
