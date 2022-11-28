install:
	npm install

build:
	docker build -t server .

run:
	docker compose up
