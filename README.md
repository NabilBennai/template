# Template Full-Stack Auth-First (Angular + Spring Boot)

Template **auth-first prêt à cloner** pour démarrer rapidement un projet Angular + Spring Boot avec sécurité, i18n et
CI.

## Stack cible

- Frontend: Angular 21, Tailwind CSS 4, Preline
- Backend: Spring Boot 4, Java 25, Maven
- Base de données: PostgreSQL + migrations Flyway
- Cache/session sécurité: Redis

## Fonctionnalités incluses

- Auth complète backend: `register`, `login`, `refresh`, `logout`
- Endpoint protégé: `GET /api/me`
- JWT access/refresh avec stockage frontend
- i18n frontend (`fr`/`en`) et backend (`messages*.properties`)
- CI GitHub Actions: `frontend-ci`, `backend-ci`, `docker-ci`, `security`

## Lancement local (Docker)

```bash
cp .env.example .env
docker compose up -d --build
```

## Développement local

### Frontend

```bash
cd frontend
npm ci
npm run lint
npm run test
npm run build
npm start
```

### Backend

```bash
./mvnw -f backend/pom.xml clean verify
./mvnw -f backend/pom.xml spring-boot:run
```

## IntelliJ (important)

- Ouvrir **le dossier racine** `template/` (pas uniquement `frontend/`)
- Attendre l'import Maven depuis `pom.xml` racine
- Si besoin: onglet Maven > Reload All Projects

## Structure

- `frontend/`: application Angular modulaire (`core`, `shared`, `features`, `auth`, `layout`)
- `backend/`: API Spring Boot (`config`, `security`, `auth`, `user`, `common`, `exception`)
- `docs/`: documentation architecture, API, sécurité et déploiement

## Endpoints auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/me`
