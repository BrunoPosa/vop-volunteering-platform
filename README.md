# Volunteering Platform

A web application for discovering, managing, and enrolling in volunteering events.  
This is a full-stack project under active development, following a milestone-based roadmap.

---

## Project Scope

The platform includes:

- **User page**: Browse and enroll in available events.
- **Admin page**: Create, update, and manage events.

---

## Planned Features

| Milestone | Description |
|----------|-------------|
| **M1**    | Basic backend with in-memory data, simple frontend UI |
| **M2**    | Integrate SQLite database for persistence |
| **M3**    | Containerize with Docker + PostgreSQL |
| **M4**    | Deploy full stack to cloud (Railway / Render) |

Bonus: CI/CD (GitHub Actions), tests, image upload, categories, map integration

---

## Tech Stack (WIP)

- **Language**: TypeScript (Node.js)
- **Frontend**: React with Vite
- **Backend**: Fastify with TypeBox schema
- **DB**: first SQLite, later PostgreSQL
- **Hosting**: Render
- **DevOps**: Docker, GitHub Actions

---

## Example Event Model

```json
{
  "id": 1,
  "name": "Beach Cleanup",
  "description": "Help clean the shoreline at Hietaniemi beach",
  "location": "Helsinki",
  "datetime": "2025-07-01T10:00:00Z",
  "availablePlaces": 20
}
```
