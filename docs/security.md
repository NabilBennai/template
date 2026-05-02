# Sécurité

- Auth stateless avec JWT access/refresh
- Filtre `JwtAuthenticationFilter` pour authentifier les routes protégées
- Spring Security avec `SessionCreationPolicy.STATELESS`
- Blacklist des refresh tokens dans Redis (`bl:<token>`)
- Endpoint public: `/api/auth/**`, `/actuator/health`
- Endpoint protégé: `/api/me`
