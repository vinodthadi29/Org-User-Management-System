# Makefile

.PHONY: all backend frontend build clean

all: build

backend:
	docker build -t org-management-backend ./backend

frontend:
	docker build -t org-management-frontend ./frontend

build: backend frontend

clean:
	docker rmi org-management-backend org-management-frontend || true