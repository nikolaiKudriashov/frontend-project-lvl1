install: # разворачивание node-modules
	npm ci

brain-games: # запуск brain-games
	node bin/brain-games.js

even: # запуск brain-even
	node bin/brain-even.js

publish: #публикация
	npm publish --dry-run

lint: #проверка линтера
	npx eslint .