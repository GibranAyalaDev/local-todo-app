# Local Todo App

Local Todo App is a multitask local server for managing secrets, notes and todos written in java script

Requeriments:
  * MongoDB
  * Node

## Install

1. Start MongoDB

```bash
sudo systemctl start --now mongodb
```

2. Clone the repository

```bash
git clone https://github.com/GibranAyalaDev/local-todo-app.git
```

3. Start the server

```bash
cd local-todo-app
npm start
```

## Models

* Todo

```typescript
{
  name: String,
  description: String,
  creation_date: Date,
  due_date: Date
}
```

* Secret

```typescript
{
  note: String,
  content: String
}
```

* Note

```typescript
{
  note: String,
  title: String
}
```
