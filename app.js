const express = require('express')
const http = require('http')
const cors = require('cors')

const PORT = process.env.PORT || 4000

const router = require('./router')
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(router)
server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})