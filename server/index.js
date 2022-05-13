const userRouter = require("./routers/user")
const express = require("express")
const cors = require("cors")

require("./db")

const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())
app.use(userRouter)

app.get('/', (req, res)=>{
    res.send("<h2>Isto veio do index.js</h2>")
})

app.listen(PORT, ()=>{
    console.log(`Server iniciado na porta ${PORT}`)
})

