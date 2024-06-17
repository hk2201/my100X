import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string   // IF we dont do this then c.env will complain
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

app.post('/api/v1/user/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" })
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    });
    const secret = c.env.JWT_SECRET;

    const token = await sign({ id: user.id }, secret);

    return c.json({ token });

  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
})



export default app
