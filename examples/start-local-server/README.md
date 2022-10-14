# Start local API server for development

## Prerequisites

- Docker and docker compose plugin must be installed on your computer

## Commands

- Start the server

```bash
docker compose up -d
```

- Stop the server

```bash
docker compose down
```

## Networking info

- API server will be served at port `3000` (endpoint: `localhost:3000`)

- Phpmyadmin (Web-based DB client) will be served at port `8080` (endpoint: `localhost:8080`)
