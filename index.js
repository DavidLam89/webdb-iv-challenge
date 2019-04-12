const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishes/dishes-router.js');
const recipesRouter = require('./recipes/recipes-router.js');
const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

const port = 3400;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
