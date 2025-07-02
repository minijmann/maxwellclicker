const fastify = require('fastify')({ logger: true });

let globalClicks = 0;

fastify.post('/click', async (req, reply) => {
  globalClicks += 1;
  return { success: true, total: globalClicks };
});

fastify.get('/clicks', async (req, reply) => {
  return { total: globalClicks };
});

// 👇 Fix is here: use 0.0.0.0 for external access
fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) throw err;
  console.log('Server running on ' + address);
});
