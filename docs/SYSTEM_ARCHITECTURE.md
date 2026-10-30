# System Architecture Plan & Overview

## 1. High-Level Architecture Overview

The **Examination Monitoring System** is composed of three decoupled core tiers:

1. **Student Application (`student-app/`)**: Client application running on examinee devices that captures telemetry, streams heartbeats, and detects environment events.
2. **Backend API & WebSocket Server (`backend/`)**: High-throughput FastAPI application managing business logic, state persistence in MongoDB, event streaming, and real-time WebSocket routing.
3. **Teacher / Invigilator Dashboard (`frontend/`)**: Single-page application built on React + Vite allowing proctors to manage examinations, monitor real-time device status, inspect alerts, and review audit reports.

---

## 2. Component Topology Diagram

```
+-------------------------------------------------------+
|                 Student Application                   |
|  - Telemetry Capture (audio/video/device state)       |
|  - Real-time client events via REST & WebSockets     |
+---------------------------+---------------------------+
                            |
                     (HTTPS / WSS)
                            |
                            v
+-------------------------------------------------------+
|               FastAPI Backend (app/)                 |
|  - Authentication & Authorization (JWT)              |
|  - REST API Routers (/auth, /devices, /exams, etc.)   |
|  - Real-time WebSocket Hub (manager.py)               |
|  - Event Ingestion & Alert Rule Engine                |
+-------------+---------------------------+-------------+
              |                           |
        (Async Driver)              (WSS / REST)
              |                           |
              v                           v
+---------------------------+   +-----------------------+
|     MongoDB Database      |   |  Proctor Frontend     |
| - teachers, exams         |   |  - Real-time Dashboard|
| - devices, events, alerts |   |  - Live Grid Feeds    |
+---------------------------+   |  - Incident Alerts    |
                                +-----------------------+
```

---

## 3. Communication Protocols

| Channel | Source | Destination | Protocol | Purpose |
|---|---|---|---|---|
| Invigilation Stream | Backend | Frontend | WebSocket (`/ws/monitoring/{exam_id}`) | Instant status updates, alerts, telemetry metrics |
| Student Heartbeat | Student App | Backend | WebSocket (`/ws/student/{device_id}`) | Keep-alive heartbeat, real-time alerts |
| CRUD & Management | Frontend | Backend | HTTP/REST (`/api/v1/*`) | Exam scheduling, teacher authentication, report generation |
| Telemetry Fallback | Student App | Backend | HTTP/REST (`/api/v1/events`) | Offline-buffered event synchronization |

---

## 4. Key Subsystems

### 4.1 Real-Time WebSocket Manager
- Manages connection lifecycle (connect, disconnect, broadcast).
- Isolates event channels by `exam_id` to ensure proctors only receive updates relevant to their active session.

### 4.2 Event Ingestion & Alert Service
- Validates student telemetry events against examination policies.
- Automatically flags anomalies (e.g., loss of focus, multi-face presence) and creates Alert records dispatched in real time.

### 4.3 Scalability & Resilience
- Independent frontend and backend deployments.
- Stateless REST and WebSocket services allowing horizontal scaling behind a reverse proxy (e.g., Nginx).

