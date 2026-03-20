# 🏛️ MaziFoundry
>
> **The personal lab of maziidev.**

## 🎯 Goal

To become a **Full-Stack Machine Learning Engineer**, mastering the entire pipeline—from hardware-level logic to production-grade AI systems.

---

## 🏗️ Roadmap

- [ X ] **Phase 01:** Python Fundamentals & Dev Environment
- [ X ] **Phase 02:** Advanced Python & Mathematics for ML
- [ ] **Phase 03:** Data Analysis & Visualization
- [ ] **Phase 04:** Backend Engineering (FastAPI)
- [ ] **Phase 05:** Data Engineering Fundamentals
- [ ] **Phase 06:** Machine Learning Fundamentals
- [ ] **Phase 07:** Deep Learning Fundamentals
- [ ] **Phase 08:** NLP & Transformers
- [ ] **Phase 09:** MLOps Fundamentals
- [ ] **Phase 10:** DevOps & Infrastructure
- [ ] **Phase 11:** Advanced AI Systems (RAG & Agents)
- [ ] **Phase 12:** Capstone: Production-Grade ML System

---

## 🛠️ Tech Stack & Tools

*To be updated as the journey progresses.*

- **Languages:** Python
- **AI Mentors:** Claude 3.7 (Architecture), DeepSeek (Logic)
- **Environment:** VS Code, Git, Terminal

---

## 📦 Package Management

### Switched from `pip` to `uv`

We migrated from `pip` + `venv` to `uv` for faster, cleaner dependency management.

`uv` is a modern Python package manager written in Rust. It replaces `pip`, `venv`, and `pip-tools` in one tool.

---

### Why We Switched

- `pip` requires manual venv creation and activation per project
- Multiple stages created multiple conflicting venvs
- `uv` manages one unified environment at the `mazii-foundry` root
- `uv` is significantly faster than `pip`

---

### Installation

```bash
# Option 1 — curl installer
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

# Option 2 — snap (if Option 1 fails)
sudo snap install astral-uv --classic
```

Verify installation:

```bash
uv --version
```

---

### Project Setup

```bash
# Initialize uv in your project root
cd ~/Documents/mazii-foundry
uv init .

# Add dependencies
uv add numpy pandas matplotlib seaborn plotly jupyter ipykernel

# Run a file
uv run python3 filename.py

# Add a new package later
uv add package-name
```

---

### Project Structure After Setup

```
mazii-foundry/
├── .venv/              ← single unified virtual environment
├── .python-version     ← locked Python version
├── pyproject.toml      ← replaces requirements.txt
├── 01-python-basics/
├── 02-advanced-python/
├── 03-data-analysis/
└── README.md
```

---

### VS Code Setup

1. Open the entire `mazii-foundry` folder in VS Code
2. `Ctrl + Shift + P` → `Python: Select Interpreter`
3. Select: `~/Documents/mazii-foundry/.venv/bin/python3`
4. One interpreter for all stages — no confusion

*"We don't just use tools; we understand how they are built."*
