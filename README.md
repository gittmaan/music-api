# Music API

## Overview

A REST-API for storing metadata of music tracks to a Relational Database, fetching the metadata from the external Spotify REST API.

## Quickstart

Use [degit](https://github.com/Rich-Harris/degit) to scaffold the repository:

```terminal
npx degit gittmaan/music-api
```

Or clone it manually with `git`:

```terminal
git clone https://github.com/gittmaan/music-api.git
```

**Note**: Don't forget to delete the `.git` folder.

Create an environment configuration file (`.env`):

```terminal
cp .env.example .env
```

Start the database with `docker-compose`:

```terminal
docker-compose up --build -d
```

Initialize the database and run the migrations:

```terminal
npm run knex:migrate:latest
```

Start the application with:

```terminal
npm run dev
```

Now, go to your browser and open `http://localhost:3000`.

### Backend

Backend is available at

1. `http://localhost:3000/api/v1/artists`.
2. `http://localhost:3000/api/v1/artists/:id`.
3. `http://localhost:3000/api/v1/tracks/:isrc`.

### Frontend

Frontend is available at `http://localhost:3000`.
