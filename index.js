const fastify = require('fastify')({ logger: true });
let globalClicks = 0;

fastify.post('/click', async (req, reply) => {
  globalClicks += 1;
  return { clicks: globalClicks };
});

fastify.get('/clicks', async (req, reply) => {
  return { clicks: globalClicks };
});

fastify.listen({ port: process.env.PORT || 3000 }, err => {
  if (err) throw err;
});
