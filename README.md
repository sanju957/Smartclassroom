# Examination Monitoring System

An automated, full-stack examination proctoring and real-time monitoring platform designed for hackathon collaboration.

## 📌 Project Architecture

The repository is modularly structured into independent micro-services/workspaces:

* **`frontend/`**: Web-based proctor/teacher dashboard built with **React**, **Vite**, **JavaScript**, and **CSS**.
* **`backend/`**: High-performance backend API and WebSocket server built with **Python**, **FastAPI**, **MongoDB**, and **WebSockets**.
* **`student-app/`**: Dedicated workspace for the student-facing examination client (stack to be defined by teammates).
* **`docs/`**: Comprehensive project documentation, API contracts, system architecture diagrams, and team collaboration guidelines.

---

## 🚀 Repository Structure

```
├── .gitignore
├── README.md
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_STRUCTURE.md
│   ├── SYSTEM_ARCHITECTURE.md
│   └── TEAM_GUIDELINES.md
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── .env.example
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
├── backend/
│   ├── requirements.txt
│   ├── .env.example
│   ├── tests/
│   └── app/
│       ├── __init__.py
│       ├── main.py
│       ├── core/
│       ├── database/
│       ├── models/
│       ├── routes/
│       ├── schemas/
│       ├── services/
│       ├── utils/
│       └── websocket/
└── student-app/
    └── README.md
```

---

## 👥 Hackathon Team Collaboration Guidelines

1. **Independent Sub-Projects**: `frontend/`, `backend/`, and `student-app/` are decoupled. Do not cross-import code between these root directories.
2. **Environment Variables**: Never commit `.env` files. Always duplicate `.env.example` to `.env` and fill in local development values.
3. **Branching Strategy**:
   * `main`: Production-ready code only.
   * `dev`: Primary integration branch.
   * `feature/<feature-name>`: Developer feature branches.
4. **Documentation**: Refer to `docs/` for architecture blueprints, database design, and API schemas before implementing features.

