.PHONY: start stop
.DEFAULT_GOAL: start

start:
	yarn install
	docker compose up --build

stop:
	docker compose down --volumes
