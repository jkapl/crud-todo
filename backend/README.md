# API

| Method  | Endpoint  | Description
|---|---|---|
| POST | /api/v1/tasks/:username/create | Create a todo |
| GET | /api/v1/tasks/:username/all | Get all todos for specified user |
| PUT | /api/v1/tasks/:username/:id | Toggle `completed` field for specified todo |
| DELETE | /api/v1/tasks/:username/:id | Delete specified todo |