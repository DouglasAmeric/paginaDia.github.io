const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000;

http.createServer((req,res)=>{
 // carregando o Arquivo da Pagina de login
  if(req.url === '/'){
    const filePhat = path.join(__dirname,'loginPG.html')
    fs.readFile(filePhat, (err,data)=>{
      if(err){
        res.writeHead(500)
        res.end("Erro Interno")
      }else{
        res.writeHead(200)
        res.end(data)
      }
    });
  }
  //pagina HOME
  else if(req.url === '/home/homePG.html'){
    const filePhat = path.join(__dirname,'home','homePG.html')
    fs.readFile(filePhat, (err,data)=>{
      if(err){
        res.writeHead(500)
        res.end("Erro Interno")
      }else{
        res.writeHead(200)
        res.end(data)
      }
    });
  }
  // carregando o  CSS das Paginas
  else if(req.url.endsWith('.css')){
    const filePhat = path.join(__dirname, req.url)
    fs.readFile(filePhat,(err,data)=>{
      if(err){
        res.writeHead(404)
        res.end("Arquivo CSS nao encontrado")
      }else{
        res.writeHead(200)
        res.end(data)
      }
    });
  }
  // criando uma URL para as imagens
  else if(req.url === '/manha'){
    const phatImage = path.join(__dirname,'/home/imgs/manha.png')
    fs.readFile(phatImage,(err,data)=>{
      if(err){
        res.writeHead(404)
        res.end("Erro ao acessar as imagens")
      }else{
        res.writeHead(200)
        res.end(data) 
      }
    });
  }
  else if(req.url === '/tarde'){
    const phatImage = path.join(__dirname,'/home/imgs/tarde.png')
    fs.readFile(phatImage,(err,data)=>{
      if(err){
        res.writeHead(404)
        res.end("Erro ao acessar as imagens")
      }else{
        res.writeHead(200)
        res.end(data) 
      }
    });
  }
  else if(req.url === '/noite'){
    const phatImage = path.join(__dirname,'/home/imgs/noite.png')
    fs.readFile(phatImage,(err,data)=>{
      if(err){
        res.writeHead(404)
        res.end("Erro ao acessar as imagens")
      }else{
        res.writeHead(200)
        res.end(data) 
      }
    });
  }
  else{
    res.writeHead(404)
    res.end("Pagina não encontrada :(")
  }
}).listen(port, ()=>{
    console.log(`Servidor aberto em localhost:http://${port}/`)
})