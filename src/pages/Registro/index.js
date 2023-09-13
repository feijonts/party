let btn = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let passwordConfirm = document.querySelector('#passwordConfirm')
let fullName = document.getElementById('fullname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let msgError = document.getElementById('msgError')
let msgSucess = document.getElementById('msgSucess')

btn.addEventListener('click', () => {
    let passwordInput = document.getElementById('password')
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
})

btn2.addEventListener('click', () => {
    let passwordInput = document.getElementById('passwordConfirm')
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
})

fullName.addEventListener('keyup', () => {
    let fullname2 = document.querySelector('#fullname').value
    let labelFullname = document.querySelector('#fullNameLabel')
    if (fullname2.length <= 0) {
        labelFullname.setAttribute('style', 'color: red')
        labelFullname.innerHTML = 'Nome Completo * Nome Invalido'
    } else {
        labelFullname.setAttribute('style', 'color: #90EE90')
        labelFullname.innerHTML = 'Nome Completo'
    }
})

email.addEventListener('keyup', () => {
    let email2 = document.querySelector('#email').value
    let labelEmail = document.querySelector('#emailLabel')
    let position = email2.search("@");
    if (email2.length <= 0 || position === -1) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email * Email Invalido'
    } else {
        labelEmail.setAttribute('style', 'color: #90EE90')
        labelEmail.innerHTML = 'Email'
    }
})

password.addEventListener('keyup', () => {
    let password2 = document.querySelector('#password').value
    let labelpassword = document.querySelector('#passwordLabel')
    if (password2.length <= 3) {
        labelpassword.setAttribute('style', 'color: red')
        labelpassword.innerHTML = 'Senha * Senha invalida!'
    } else {
        labelpassword.setAttribute('style', 'color: #90EE90')
        labelpassword.innerHTML = 'Senha'
    }
})

passwordConfirm.addEventListener('keyup', () => {
    let password = document.getElementById('password').value
    let passwordConfirm2 = document.querySelector('#passwordConfirm')
    let labelPassword = document.querySelector('#labelPassword')
    if (passwordConfirm2.value !== password) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Confirmar Senha * As senhas não conferem'
    } else {
        labelPassword.setAttribute('style', 'color: #90EE90')
        labelPassword.innerHTML = 'Confirmar Senha'
    }
})

async function registrar() {
    const email2 = document.getElementById('email').value
    let emailLabel = document.getElementById('emailLabel')
    const password2 = document.getElementById('password').value
    let passwordLabel = document.getElementById('passwordLabel')
    const fullName2 = document.getElementById('fullname').value
    let fullNameLabel = document.getElementById('fullNameLabel')
    let passwordConfirm2 = document.querySelector('#passwordConfirm')
    let labelPassword = document.querySelector('#labelPassword')
    if (fullName2 === '') {
        fullNameLabel.setAttribute('style', 'color: red')
        fullNameLabel.innerHTML = 'Nome Completo * Nome Invalido'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Nome Invalido!'
        return;
    }
    if (email2 === '') {
        emailLabel.setAttribute('style', 'color: red')
        emailLabel.innerHTML = 'Email * Email invalido!'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email Invalido!'
        return;
    }
    if (password2 === '' && password2.length <= 3) {
        passwordLabel.setAttribute('style', 'color: red')
        passwordLabel.innerHTML = 'Senha * Senha invalida'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Senha invalida!'
        return;
    }
    if (passwordConfirm2.value !== password2) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Confirmar Senha * As senhas não conferem'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Senhas diferentes!'
        return;
    }
    let data = {
        email: email2,
        password: password2,
        fullname: fullName2
    }
    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = 'Cadastrando usuário...'
    await fetch('https://api.feijonts.dev/registro', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data2 => {
        if (data2.status === 401) {
            setTimeout(() => {
                msgSucess.innerHTML = ''
                msgSucess.setAttribute('style', 'display: none')
                msgError.setAttribute('style', 'display: block')
                msgError.innerHTML = 'Email já cadastrado!'
                return;
            }, 3000)
            return;
        }
        setTimeout(() => {
            msgSucess.innerHTML = 'Cadastro concluído com sucesso!'
            setTimeout(() => {
                window.location.href = 'https://festavera.store/login';
            },3000)
        }, 3000);
    })
};