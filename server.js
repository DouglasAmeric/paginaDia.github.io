
const path = require('path')
const app  = require('express')();
const port = 3000;

app.set('view-engine', 'ejs')

app.listen(port, () => {
  console.log(`Servidor aberto em localhost: http://127.0.0.1:${port}/`)
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/views/loginPG.html'))
})
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/homePG.html'))
})
app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/faq.html'))
})
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/sobre.html'))
})
app.get('/dia', (req, res) => {
  res.sendFile(path.join(__dirname + '/imgs/manha.png'))
})
app.get('/tarde', (req, res) => {
  res.sendFile(path.join(__dirname + '/imgs/tarde.png'))
})
app.get('/noite', (req, res) => {
  res.sendFile(path.join(__dirname + '/imgs/noite.png'))
})




// http.createServer((req,res)=>{
//  // carregando o Arquivo da Pagina de login
// if(req.url === '/home/'){
//     const filePhat = path.join(__dirname,'home','homePG.html')
//     fs.readFile(filePhat, (err,data)=>{
//       if(err){
//         res.writeHead(500)
//         res.end("Erro Interno")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     });
//   }
//   // pagina FAQ
//   else if(req.url === '/faq/'){
//     const filePhat = path.join(__dirname,'faq','faq.html')
//     fs.readFile(filePhat,(err,data)=>{
//       if(err){
//         res.writeHead(404)
//         res.end("arquivo não encontrado :(")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     })
//   }
//   else if(req.url === '/sobre/'){
//     const filePhat = path.join(__dirname, 'sobre','sobre.html')
//     fs.readFile(filePhat,(err,data)=>{
//       if(err){
//         res.writeHead(404)
//         res.end('arquivo não encontrado :(')
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     })
//   }
//   // carregando o  CSS das Paginas
//   else if(req.url.endsWith('.css')){
//     const filePhat = path.join(__dirname, req.url)
//     fs.readFile(filePhat,(err,data)=>{
//       if(err){
//         res.writeHead(404)
//         res.end("Arquivo CSS nao encontrado")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     });
//   }
//   else if(req.url === '/dia'){
//     const phatImage = path.join(__dirname,'home','imgs','manha.png')
//     fs.readFile(phatImage,(erro,data)=>{
//       if(erro){
//         res.writeHead(404)
//         res.end("imagen não encontrada :(")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     })
//   }
//   else if(req.url === '/tarde'){
//     const phatImage = path.join(__dirname,'home','imgs','tarde.png')
//     fs.readFile(phatImage,(erro,data)=>{
//       if(erro){
//         res.writeHead(404)
//         res.end("imagen não encontrada :(")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     })
//   }
//   else if(req.url === '/noite'){
//     const phatImage = path.join(__dirname,'home','imgs','noite.png')
//     fs.readFile(phatImage,(erro,data)=>{
//       if(erro){
//         res.writeHead(404)
//         res.end("imagen não encontrada :(")
//       }else{
//         res.writeHead(200)
//         res.end(data)
//       }
//     })
//   }
//   else{
//     res.writeHead(404)
//     res.end("Pagina não encontrada :(")
//   }
// }).listen(port, ()=>{
//     console.log(`Servidor aberto em localhost:http://${port}/`)
// })