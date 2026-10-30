# Database Structure Plan & Specification

## 1. Database Engine
- **Engine**: MongoDB (Document-oriented NoSQL)
- **Database Name**: `exam_monitoring_db`

---

## 2. Collections & Schema Specifications

### 2.1 `teachers` Collection
Stores proctor/invigilator credentials and profile details.
```json
{
  "_id": "ObjectId",
  "username": "String (unique, indexed)",
  "email": "String (unique, indexed)",
  "hashed_password": "String",
  "full_name": "String",
  "department": "String",
  "is_active": "Boolean",
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```

### 2.2 `exams` Collection
Stores metadata, schedules, and active configurations of examinations.
```json
{
  "_id": "ObjectId",
  "title": "String",
  "course_code": "String",
  "created_by": "ObjectId (ref: teachers)",
  "start_time": "ISODate",
  "end_time": "ISODate",
  "duration_minutes": "Integer",
  "status": "String (enum: SCHEDULED, ACTIVE, PAUSED, CONCLUDED)",
  "monitoring_rules": {
    "tab_switch_limit": "Integer",
    "face_detection_required": "Boolean",
    "audio_monitoring_enabled": "Boolean",
    "screen_recording_interval_sec": "Integer"
  },
  "created_at": "ISODate"
}
```

### 2.3 `devices` Collection
Tracks student hardware clients connected to an examination.
```json
{
  "_id": "ObjectId",
  "exam_id": "ObjectId (ref: exams, indexed)",
  "student_id": "String (indexed)",
  "student_name": "String",
  "mac_address": "String",
  "ip_address": "String",
  "os_info": "String",
  "client_version": "String",
  "connection_status": "String (enum: ONLINE, OFFLINE, RECONNECTING)",
  "last_heartbeat": "ISODate",
  "registered_at": "ISODate"
}
```

### 2.4 `events` Collection
Time-series style telemetry log for audit events during an examination.
```json
{
  "_id": "ObjectId",
  "exam_id": "ObjectId (ref: exams, indexed)",
  "device_id": "ObjectId (ref: devices, indexed)",
  "student_id": "String (indexed)",
  "event_type": "String (enum: HEARTBEAT, TAB_SWITCH, WINDOW_BLUR, MULTI_FACE, NO_FACE, AUDIO_SPIKE)",
  "severity": "String (enum: INFO, WARNING, CRITICAL)",
  "metadata": "Object (custom contextual payload)",
  "timestamp": "ISODate (indexed)"
}
```

### 2.5 `alerts` Collection
Flagged security violations or proctor notifications triggered by anomaly evaluation.
```json
{
  "_id": "ObjectId",
  "exam_id": "ObjectId (ref: exams, indexed)",
  "device_id": "ObjectId (ref: devices, indexed)",
  "event_id": "ObjectId (ref: events)",
  "title": "String",
  "description": "String",
  "severity": "String (enum: LOW, MEDIUM, HIGH, CRITICAL)",
  "status": "String (enum: UNRESOLVED, ACKNOWLEDGED, DISMISSED, FLAGGED_INFRACTION)",
  "proctor_notes": "String",
  "created_at": "ISODate (indexed)"
}
```

---

## 3. Recommended Indexes
- `teachers`: `{ username: 1 }`, `{ email: 1 }`
- `exams`: `{ status: 1, start_time: 1 }`, `{ created_by: 1 }`
- `devices`: `{ exam_id: 1, student_id: 1 }`, `{ last_heartbeat: 1 }`
- `events`: `{ exam_id: 1, timestamp: -1 }`, `{ device_id: 1, timestamp: -1 }`
- `alerts`: `{ exam_id: 1, status: 1, created_at: -1 }`

