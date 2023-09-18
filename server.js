const express = require("express");
const app = express()
const port = 3000
const contactoRouter = require('./contacts')


app.use(express.json())
app.use('/contactos' , contactoRouter )


app.listen(port , ()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
})