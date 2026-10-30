# API Documentation Plan & Specification

## 1. Overview
This document specifies the REST API and WebSocket interfaces provided by the FastAPI backend service for the Examination Monitoring System.

---

## 2. Base Configuration
- **Base URL**: `http://localhost:8000/api/v1`
- **WebSocket URL**: `ws://localhost:8000/ws`
- **Authentication Scheme**: Bearer JWT (`Authorization: Bearer <token>`)

---

## 3. Endpoints Blueprint

### 3.1 Authentication (`/auth`)
- `POST /auth/login`
  - **Purpose**: Authenticate teacher/invigilator and return JWT access token.
  - **Payload**: `{ "username": "string", "password": "string" }`
  - **Response**: `{ "access_token": "string", "token_type": "bearer" }`
- `POST /auth/refresh`
  - **Purpose**: Refresh expired access token.
- `GET /auth/me`
  - **Purpose**: Retrieve current logged-in teacher details.

### 3.2 Devices (`/devices`)
- `GET /devices`
  - **Purpose**: List registered student examination devices.
- `POST /devices/register`
  - **Purpose**: Register a new student device to an examination session.
- `GET /devices/{device_id}`
  - **Purpose**: Retrieve status, health, and battery/network metrics for a specific device.
- `DELETE /devices/{device_id}`
  - **Purpose**: Deregister or remove device from session.

### 3.3 Examinations (`/exams`)
- `GET /exams`
  - **Purpose**: List all scheduled and ongoing exams.
- `POST /exams`
  - **Purpose**: Schedule a new examination session.
- `GET /exams/{exam_id}`
  - **Purpose**: Retrieve detailed exam specifications and metadata.
- `PUT /exams/{exam_id}/status`
  - **Purpose**: Transition exam status (`SCHEDULED`, `ACTIVE`, `PAUSED`, `CONCLUDED`).

### 3.4 Events (`/events`)
- `POST /events`
  - **Purpose**: Ingest student monitoring event (e.g., tab switch, face disappeared, audio spike, multi-device anomaly).
- `GET /events`
  - **Purpose**: Query events filtered by `exam_id`, `device_id`, severity, or timestamp.

### 3.5 Alerts (`/alerts`)
- `GET /alerts`
  - **Purpose**: Fetch suspicious activity alerts flagged by the monitoring algorithms.
- `PUT /alerts/{alert_id}/acknowledge`
  - **Purpose**: Allow proctors to mark an alert as reviewed, false positive, or confirmed infraction.

### 3.6 WebSockets (`/ws`)
- `ws://localhost:8000/ws/monitoring/{exam_id}`
  - **Purpose**: Real-time bidirectional channel streaming live status, telemetry feeds, and instantaneous infraction alerts to the invigilator dashboard.
- `ws://localhost:8000/ws/student/{device_id}`
  - **Purpose**: Heartbeat, status stream, and remote instructions for the student examination client.

---

## 4. Status Codes & Error Formats
All errors will follow standard RFC 7807 problem details:
```json
{
  "detail": "Error description message"
}
```
- `200 OK`: Success
- `201 Created`: Resource created
- `400 Bad Request`: Input validation failure
- `401 Unauthorized`: Missing or invalid bearer token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Target resource not found
- `500 Internal Server Error`: Unhandled server exception

