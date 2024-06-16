import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string   // IF we dont do this then c.env will complain
  }
}>

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Get particular Route')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Get Bulk Route')
})

app.put('/api/v1/blog', (c) => {
  return c.text("Blog Update Route")
})

app.post('/api/v1/blog', (c) => {
  return c.text("Blog Route")
})

app.post('/api/v1/user/signin', (c) => {
  return c.text("Signin Route")
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    },
  })

  


  return c.text("Signup Route")
})


export default app
