function imgDia(){

    let dataHora = new Date();

    let hora = dataHora.getHours()
    let minuto = dataHora.getMinutes()
    let segundo = dataHora.getSeconds()

    let p = document.getElementById('horaDia');
    let msg = document.querySelector('#msg');
    let img = document.querySelector('.fts');
    let pMsg2 = document.getElementById('msg2');

    
    p.textContent =  `${hora}:${minuto}:${segundo}` ;
    
    if(hora >=6 && hora <12){
        img.style.backgroundImage = 'url(/dia)';
        pMsg2.textContent = 'Manhã'
    }else if(hora >=13 && hora <18){
        img.style.backgroundImage = 'url(/tarde)';
        pMsg2.textContent = 'Tarde'
    }else{
        img.style.backgroundImage = 'url(/noite)';
        pMsg2.textContent = 'Noite'
    }
    
}
setInterval(imgDia, 100);

imgDia();