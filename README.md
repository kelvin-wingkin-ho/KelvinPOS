# Kelvin POS

## Prerequisites

To start the app locally, ensure you have the following set up:

1. **Node.js and npm** - This app is verified to be able to run under node v20.19.6 / npm v10.8.2
2. **Start Docker Daemon** - Launch Docker Desktop (or your Docker daemon)
3. **Start the PostgreSQL database** - Start the PostgreSQL database as specified in `docker-compose.yaml`

You can start the database by running:
```bash
docker-compose up -d
```

## Getting Started
1. docker-compose up -d
2. npm install
3. npx prisma generate --schema=./Backend/prisma/schema.prisma
4. npm run dev
