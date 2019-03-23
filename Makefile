install: 
	npm install 

even: 
	npx babel-node src/bin/even.js

calc: 
	npx babel-node src/bin/calc.js

gcd: 
	npx babel-node src/bin/gcd.js	

prog: 
	npx babel-node src/bin/progression.js	

prime: 
	npx babel-node src/bin/prime.js			



publish: 
	npm publish

lint:
	npx eslint .

