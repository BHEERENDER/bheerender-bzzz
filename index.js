const express = require('express')
const app = express()
const port = process.env.PORT|| 4000
app.use(express.static('public'))

app.get('/',(req,req) => res.sendFile(__dirname +'/public/html/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))