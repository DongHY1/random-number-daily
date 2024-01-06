import { Hono } from 'hono'
import {cors} from 'hono/cors'
import { getSeedFromDate,seedRandom } from './seed'

const app = new Hono()

app.get('/', (c) => {
  const seed = getSeedFromDate()
  const randomNumber = seedRandom(seed)
  return c.json({
    value:randomNumber
  })
},cors())

export default app
