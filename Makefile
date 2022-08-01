install: # разворачивание node-modules
	npm ci

brain-games: # запуск brain-games
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

lint: #проверка линтера
	npx eslint .