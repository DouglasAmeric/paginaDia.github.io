function login(){
    let usuario = document.getElementById('login').value;
    let senha = document.getElementById('password').value;
    let btn = document.getElementById('enter');

    if(usuario.trim() === 'admin' && senha.trim() === 'admin'){
        window.location.href = '/home';
        window.alert('Acesso liberado');
    }else{
        
        window.alert('acesso negado');
    }
}
