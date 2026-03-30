import Fastify from 'fastify'
import { EventSchema } from './schemas/event.js'
import { eventRoutes } from './routes/events.js'

async function buildServer() {
  const fastify = Fastify({ logger: true })

  // Make TypeBox schema available to AJV
  fastify.addSchema(EventSchema)

  // Register routes
  await fastify.register(eventRoutes)

  return fastify
}

buildServer()
  .then(server => server.listen({ port: 3000, host: '127.0.0.1' }))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })