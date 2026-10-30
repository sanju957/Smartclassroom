# Hackathon Team Guidelines & Engineering Standards

## 1. Team Principles
- **Modularity**: Never intertwine `frontend/`, `backend/`, and `student-app/`. Keep dependencies completely isolated within their respective sub-directories.
- **Contract First**: Always agree on API contracts (in `API_DOCUMENTATION.md`) and database schemas (in `DATABASE_STRUCTURE.md`) before writing feature implementations.
- **Security & Hygiene**: Never commit secrets, passwords, or `.env` files. Ensure `.gitignore` is respected at all times.

---

## 2. Git Workflow & Collaboration

### 2.1 Branch Naming Conventions
- `main`: Clean, stable, deployable code. Direct pushes are disabled.
- `dev`: Primary staging/integration branch where team members merge features.
- Feature branches:
  - `feat/frontend-<feature-name>` (e.g., `feat/frontend-live-grid`)
  - `feat/backend-<feature-name>` (e.g., `feat/backend-ws-manager`)
  - `feat/student-<feature-name>` (e.g., `feat/student-telemetry`)
  - `fix/<issue-name>` (e.g., `fix/token-expiry`)

### 2.2 Pull Request (PR) Workflow
1. Branch off `dev`.
2. Implement and test locally.
3. Open a PR targeting `dev`.
4. Ensure PR description details:
   - What changed
   - Any modifications to schemas or environment variables
   - Steps to test
5. Require at least one peer review before merging.

---

## 3. Technology Stack Conventions

### 3.1 Backend (`backend/`)
- Python 3.10+
- Framework: FastAPI with Pydantic v2 schemas
- Code formatting: Follow PEP 8 style guide
- Configuration: Store all configuration in `backend/app/core/config.py` using `pydantic-settings`
- Secrets: Read from `backend/.env` (use `backend/.env.example` as a template)

### 3.2 Frontend (`frontend/`)
- Node.js 18+ / React 18+ / Vite
- Formatting: Clean ES6+ JavaScript, modular CSS / standard naming
- State management: Use Context API or modular hooks
- API communication: Encapsulate all API calls in `src/services/`
- Configuration: Use Vite environment variables (`VITE_API_URL`, etc.) via `frontend/.env`

### 3.3 Student App (`student-app/`)
- Stack to be finalized by the designated teammate.
- Must communicate via the contracts established in `docs/API_DOCUMENTATION.md`.

---

## 4. Issue Tracking & Hackathon Milestones
- **Phase 1**: Project Structure & Environment Setup (Current)
- **Phase 2**: Authentication & Core Data Models
- **Phase 3**: Exam Creation, Device Registration & WebSocket Hub
- **Phase 4**: Real-time Monitoring Dashboard & Student Telemetry Ingestion
- **Phase 5**: Alert Pipeline & Final Integration Testing

