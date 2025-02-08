const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá Docker ATUALIZADO!");
});

app.listen(port, () => {
    console.log(`APP Rodando na PORTA: ${port};`)
})