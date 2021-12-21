.PHONY: start stop

start:
	@docker network inspect dev-proxy 2> /dev/null > /dev/null; \
	if [ $$? -ne 0 ]; then \
		echo "Creating dev-proxy network"; \
		docker network create dev-proxy > /dev/null; \
	fi

	docker-compose up -d

stop:
	docker-compose down