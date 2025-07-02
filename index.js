const fastify = require('fastify')({ logger: true });

let globalClicks = 0;

// Increment clicks (POST /click)
fastify.post('/click', async (req, reply) => {
  globalClicks += 1;
  return { success: true, total: globalClicks };
});

// Get current click count (GET /clicks)
fastify.get('/clicks', async (req, reply) => {
  return { total: globalClicks };
});

// Run server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Global Maxwell API running at ${address}`);
});
