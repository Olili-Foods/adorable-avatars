import express from 'express'
import avatarsMiddleware from 'adorable-avatars'

const app = express()
const port = process.env.PORT || 3000

app.use('/', avatarsMiddleware)

app.listen(port, () => {
  console.log(`Adorable Avatars server started on port ${port}`)
})
