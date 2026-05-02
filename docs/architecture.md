# Architecture

## Frontend (`/frontend`)

Architecture modulaire Angular 21:

- `core/`: services transverses, guards, interceptors
- `shared/`: composants/utilitaires réutilisables
- `features/`: fonctionnalités métier
- `auth/`: écrans login/register
- `layout/`: layouts public/private/admin

Principes:

- appels HTTP via services dédiés
- routes protégées par guards
- i18n via `@ngx-translate/core` (`fr`/`en`)

## Backend (`/backend`)

Architecture Spring Boot 4:

- `config/`, `security/`, `auth/`, `user/`, `common/`, `exception/`

Principes:

- exposition API via DTOs (pas d'entité brute)
- erreurs API uniformisées
- i18n via `messages.properties` et `messages_en.properties`
- migrations gérées via Flyway (`db/migration`)
