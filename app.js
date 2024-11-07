const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/#section_2', (req, res) => {
  res.render('index')
})

app.get('/#section_3', (req, res) => {
  res.render('index')
})

app.get('/#section_4', (req, res) => {
  res.render('index')
})

app.get('/#section_5', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})