import { FastifyInstance } from 'fastify'
import { Type } from '@sinclair/typebox'
import { EventSchema } from '../schemas/event.js'
import { getAllEvents } from '../services/eventService.js'

export async function eventRoutes(fastify: FastifyInstance) {
  fastify.get('/events', {
    schema: {
      response: {
        200: Type.Array(EventSchema)
      }
    },
    handler: async (req, reply) => {
      return getAllEvents()
    }
  })
}