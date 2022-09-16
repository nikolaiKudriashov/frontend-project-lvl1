install: # разворачивание node-modules
	npm ci

brain-games: # запуск brain-games
	node src/bin/brain-games.js

even: # запуск brain-even
	node src/bin/brain-even.js

calc: #запуск brain-calc
	node src/bin/brain-calc.js

publish: #публикация
	npm publish --dry-run

lint: #проверка линтера
	npx eslint .