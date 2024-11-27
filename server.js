
const path = require('path')
const express = require('express')
const app  = express();
const port = 3000;

app.set('view-engine', 'ejs')

app.listen(port, () => {
  console.log(`Servidor aberto em localhost: http://127.0.0.1:${port}/`)
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.render(path.join(__dirname + '/views/loginPG.ejs'))
})
app.get('/home', (req, res) => {
  res.render(path.join(__dirname + '/views/homePG.ejs'))
})
app.get('/faq', (req, res) => {
  res.render(path.join(__dirname + '/views/faq.ejs'))
})
app.get('/sobre', (req, res) => {
  res.render(path.join(__dirname + '/views/sobre.ejs'))
})
app.get('/dia', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/imgs/manha.png'))
})
app.get('/tarde', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/imgs/tarde.png'))
})
app.get('/noite', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/imgs/noite.png'))
})

