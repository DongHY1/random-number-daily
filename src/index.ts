import { Hono } from 'hono'
import { getSeedFromDate,seedRandom } from './seed'

const app = new Hono()

app.get('/', (c) => {
  const seed = getSeedFromDate()
  const randomNumber = seedRandom(seed)
  return c.json({
    value:randomNumber
  })
})

export default app
