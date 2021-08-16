import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'

const main = async () => {
  const app = express()
  app.use(cors())
  app.use(express.json())

  // app.use("/grahpql", graphqlHTTP({
  //   schema,
  //   graphiql: true
  // }))

  app.listen(3001, () => {
    console.info('SERVER RUNNING ON PORT')
  })
}

main().catch((error) => {
  console.info(error)
})
