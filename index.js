const fastify = require('fastify')({ logger: true });

let globalClicks = 0;

fastify.post('/click', async (req, reply) => {
  globalClicks += 1;
  return { success: true, total: globalClicks };
});

fastify.get('/clicks', async (req, reply) => {
  return { total: globalClicks };
});

fastify.listen({ port: process.env.PORT || 3000 }, err => {
  if (err) throw err;
  console.log('Server running');
});
