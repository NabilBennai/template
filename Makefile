install:
	cd frontend && npm install
	cd backend && mvn -q -DskipTests compile
start:
	docker compose up -d --build
stop:
	docker compose down
logs:
	docker compose logs -f
frontend-start:
	cd frontend && npm start
backend-start:
	cd backend && mvn spring-boot:run
test:
	cd frontend && npm test -- --watch=false
	cd backend && mvn test
build:
	cd frontend && npm run build
	cd backend && mvn clean package
lint:
	cd frontend && npm run lint
format:
	cd frontend && npm run format
	cd backend && mvn spotless:apply
docker-build:
	docker compose build
docker-clean:
	docker compose down -v --remove-orphans
