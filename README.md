# Initial project setup done 
--- mkdir cypress-testing
--- npm init -y
--- cd cypress-testing
--- npm i cypress
--- npx cypress open --e2e

## writing my first e2e test

--- describe()  --> just a conventional thing, doesn't have a functional value
--- headless cypress without needing GUI -> npx cypress run --headless
--- Cypress supports partial testing, i.e. suppose you visit a page and you are trying to match text present on that page , then even if some words are compared it will pass the test

## learned different ways to select data

--- contains
--- get(using selectors)
--- using timeout where the content might take time to load