import { Type, Static } from '@sinclair/typebox'

export const EventSchema = Type.Object({
  id: Type.Integer(),
  name: Type.String(),
  description: Type.String(),
  location: Type.String(),
  datetime: Type.String({ format: 'date-time' }),
  availablePlaces: Type.Integer()
}, { $id: 'Event' })

export type Event = Static<typeof EventSchema>