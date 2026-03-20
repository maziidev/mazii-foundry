# Stage 4 — Backend Engineering Stack

## The Full Stack Explained

### 🌐 Web Framework

| Package   | What it does                                                   |
| --------- | -------------------------------------------------------------- |
| `fastapi` | The web framework — handles HTTP requests, routing, validation |
| `uvicorn` | The server that runs FastAPI — like an engine for the car      |

### 🗄️ Database

| Package           | What it does                                                 |
| ----------------- | ------------------------------------------------------------ |
| `sqlalchemy`      | ORM — lets you write Python instead of raw SQL               |
| `alembic`         | Database migrations — tracks changes to your database schema |
| `asyncpg`         | Async PostgreSQL driver — talks to PostgreSQL asynchronously |
| `psycopg2-binary` | Sync PostgreSQL driver — needed by Alembic                   |

### ✅ Validation

| Package    | What it does                                                        |
| ---------- | ------------------------------------------------------------------- |
| `pydantic` | Data validation — ensures incoming data is the right shape and type |

### 🔐 Security

| Package       | What it does                                            |
| ------------- | ------------------------------------------------------- |
| `python-jose` | JWT tokens — creates and verifies authentication tokens |
| `passlib`     | Password hashing toolkit                                |
| `bcrypt`      | The actual hashing algorithm passlib uses               |

### ⚡ Caching

| Package | What it does                                 |
| ------- | -------------------------------------------- |
| `redis` | Redis client — connects to Redis for caching |

### 🧪 Testing

| Package          | What it does                                             |
| ---------------- | -------------------------------------------------------- |
| `httpx`          | HTTP client — used to make requests to your API in tests |
| `pytest`         | Testing framework                                        |
| `pytest-asyncio` | Allows pytest to test async code                         |

### ⚙️ Configuration

| Package         | What it does                                        |
| --------------- | --------------------------------------------------- |
| `python-dotenv` | Loads `.env` files — keeps secrets out of your code |

---

## The Analogy

Think of it like building a house:

- `fastapi` + `uvicorn` = the house structure and foundation
- `sqlalchemy` + `postgresql` = the plumbing
- `pydantic` = the building inspector — rejects anything that doesn't meet spec
- `python-jose` + `passlib` = the locks and security system
- `redis` = a fast notepad on the wall for quick lookups
- `pytest` + `httpx` = the quality control team

---

## Install Command

```bash
uv add fastapi uvicorn sqlalchemy alembic asyncpg psycopg2-binary pydantic python-jose passlib bcrypt redis httpx pytest pytest-asyncio python-dotenv
```

---

## Project Structure

```
task-api/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── routes/
│   │       │   ├── tasks.py
│   │       │   ├── users.py
│   │       │   └── auth.py
│   │       └── router.py
│   ├── core/
│   │   ├── config.py       ← environment variables
│   │   ├── security.py     ← JWT, hashing
│   │   └── logging.py
│   ├── db/
│   │   ├── models.py       ← SQLAlchemy models
│   │   ├── session.py      ← database connection
│   │   └── repository/     ← database logic
│   ├── schemas/            ← Pydantic models
│   ├── services/           ← business logic
│   └── main.py             ← entry point
├── tests/
├── alembic/                ← migrations
├── .env                    ← secrets — never commit this
├── docker-compose.yml
└── pyproject.toml
```

---

## Key Rules

- Never hardcode secrets — always use `.env`
- Always validate incoming data with Pydantic
- Never store passwords in plaintext — always hash with bcrypt
- Always version your API — `/api/v1/`
- Separate concerns — routes, services, repositories are different layers
