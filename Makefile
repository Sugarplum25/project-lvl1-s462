install: 
	npm install 

even: 
	npx babel-node src/bin/brain-even.js

calc: 
	npx babel-node src/bin/brain-calc.js

gcd: 
	npx babel-node src/bin/brain-gcd.js	

prog: 
	npx babel-node src/bin/brain-progression.js			



publish: 
	npm publish

lint:
	npx eslint .

