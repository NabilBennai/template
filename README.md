# Template Full-Stack Auth First (Angular + Spring Boot)

Template orienté **authentification complète prête à cloner** pour démarrer rapidement vos futurs projets.

## Versions utilisées (vérifiées)
- Angular 21
- Spring Boot 4
- Java 25

## Ce qui est prêt immédiatement
- Register / Login / Refresh / Logout backend (`/api/auth/*`)
- JWT access + refresh token
- Blacklist refresh token avec Redis
- Endpoint protégé `/api/me`
- i18n backend (`fr`/`en`) via `MessageSource`
- i18n frontend (`fr`/`en`) avec fichiers JSON
- Seed dev: `admin@example.com` et `user@example.com`

## Lancer le projet
```bash
cp .env.example .env
docker compose up -d --build
```

## Endpoints auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/refresh`
- POST `/api/auth/logout`
- GET `/api/me`

## Structure
- `frontend/`: base Angular 21 auth-ready + i18n
- `backend/`: API Spring Boot 4 auth-ready + i18n + Flyway
- `docs/`: architecture, sécurité, api, déploiement
