"""Main FastAPI Application Entrypoint (Placeholder)."""

from fastapi import FastAPI

app = FastAPI(
    title="Examination Monitoring System API",
    description="Backend service providing REST and WebSocket monitoring endpoints.",
    version="0.1.0",
)


@app.get("/")
async def root():
    """Placeholder health check endpoint."""
    return {"message": "Examination Monitoring System Backend Scaffold Ready"}

