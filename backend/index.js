

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('endpoint foi alcançado')
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const payload = req.body;
  console.log({payload});
  res.json({text: `retornou da API: ${Math.random()}`})
})

app.listen(port, () => {
  console.clear()
  console.log(`Meu servidor está rodando na porta ${port}`)
})