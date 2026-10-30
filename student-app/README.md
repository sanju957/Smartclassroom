# Student Application

## 📌 Overview
This directory is reserved for the student-facing examination client application. 

This component will be developed by the designated teammate. Its primary responsibility will be running on student devices during an examination, capturing monitoring telemetry, handling local events, and interfacing with the central backend.

---

## ⚙️ Technology Stack
> **Note**: The technology stack for this application has not been locked yet. Do not initialize or assume a specific framework until decided by the team.

Potential candidates under team evaluation:
* Electron / React desktop client
* Flutter desktop / mobile application
* Native Python client (PyQt / Tkinter / CLI agent)
* Web-based locked client (Kiosk mode)

---

## 🔌 Integration Contracts
Regardless of the chosen stack, this client must interface with the backend using the specifications documented in:
* `docs/API_DOCUMENTATION.md`: REST endpoints for device registration (`/api/v1/devices/register`) and event ingestion (`/api/v1/events`).
* `docs/SYSTEM_ARCHITECTURE.md`: WebSocket channel specifications (`/ws/student/{device_id}`) for heartbeat and real-time instructions.

---

## 🛠️ Setup Instructions
*To be filled once the teammate initializes the project template.*

