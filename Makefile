install:
  npm ci

brain-games:
  node bin/brain-games.js

even:
  node bin/brain-even.js

calc:
  node bin/brain-calc.js

publish:
  npm publish --dry-run

lint:
  npx eslint .