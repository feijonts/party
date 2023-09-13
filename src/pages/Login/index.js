let btn = document.querySelector('.fa-eye')
let msgError = document.getElementById('msgError')
let msgSucess = document.getElementById('msgSucess')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

btn.addEventListener('click', () => {
    let passwordInput = document.getElementById('password')
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
})

emailInput.addEventListener('keyup', () => {
    const email = document.getElementById('email').value
    let emailLabel = document.getElementById('emailLabel')
    let position = email.search("@");
    if (email === '' || position === -1) {
        emailLabel.setAttribute('style', 'color: red')
        emailLabel.innerHTML = 'Email * Email Invalido!'
    } else {
        emailLabel.setAttribute('style', 'color: #90EE90')
        emailLabel.innerHTML = 'Email'
    }
})

passwordInput.addEventListener('keyup', () => {
    const password = document.getElementById('password').value
    let passwordLabel = document.getElementById('passwordLabel')
    if (password === '' || password.length <= 3) {
        passwordLabel.setAttribute('style', 'color: red')
        passwordLabel.innerHTML = 'Senha * Senha Invalida'
    } else {
        passwordLabel.setAttribute('style', 'color: #90EE90')
        passwordLabel.innerHTML = 'Senha'
    }
})

async function login() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    let emailLabel = document.getElementById('emailLabel')
    let passwordLabel = document.getElementById('passwordLabel')
    if (email === '') {
        emailLabel.setAttribute('style', 'color: red')
        emailLabel.innerHTML = 'Email * Email Invalido'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email Invalido!'
        return;
    }
    if (password === '' || password.length <= 3) {
        passwordLabel.setAttribute('style', 'color: red')
        passwordLabel.innerHTML = 'Senha * Senha Invalida'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Senha Invalida!'
        return;
    }
    msgError.innerHTML = ''
    msgError.setAttribute('style', 'display: none')
    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = 'Procurando usuário no banco de dados...'
    let data = {
        email: email,
        password: password
    }
    const response = await fetch('https://api.feijonts.dev/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data2 => {
        if (data2.status === 404) {
            setTimeout(() => {
                msgSucess.innerHTML = ''
                msgSucess.setAttribute('style', 'display: none')
                msgError.setAttribute('style', 'display: block')
                msgError.innerHTML = 'Email ou Senha inválidos!'
                return;
            }, 3000)
        }
        data2.json().then(results => {
            if (results.auth) {
                localStorage.setItem('feijontsEmail', email);
                setTimeout(() => {
                    msgError.innerHTML = ''
                    msgError.setAttribute('style', 'display: none')
                    msgSucess.setAttribute('style', 'display: block')
                    msgSucess.innerHTML = 'Login concluido com sucesso!'
                    setTimeout(() => {
                        window.location.href = 'https://festavera.store/ingressos';
                    }, 3000);
                }, 3000);
            }
        })
    })
};

// localStorage.getItem('token)