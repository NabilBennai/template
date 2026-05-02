# Déploiement

- Développement local: Docker Compose (`docker compose up -d --build`)
- CI: GitHub Actions (`frontend-ci`, `backend-ci`, `docker-ci`, `security`)
- Build backend reproductible: Maven Wrapper (`./mvnw -f backend/pom.xml ...`)
- Le projet peut être déployé ensuite sur GHCR/Kubernetes selon vos besoins.
