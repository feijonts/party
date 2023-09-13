const email = localStorage.getItem('feijontsEmail')

if (email === undefined || email === null || email === '') {
    window.location.replace('https://festavera.store/login');
}

async function getUserByEmail() {
  const response = await fetch(`https://api.feijonts.dev/getuserbyemail?email=${email}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data2 => {
    if (data2.status === 404) {
      window.location.replace('https://festavera.store/login');
      return;
    }
    data2.json().then(results => {
      let username = document.getElementById('username')
      username.innerHTML = `Olá, ${results[0].fullname}`
    })
  })
}

async function getTickets() {
  const response = await fetch(`https://api.feijonts.dev/tickets/getbyemail?email=${email}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data2 => {
    if (data2.status === 404) {
      document.querySelector('main h3').style.display = 'block'
      return;
    }
    data2.json().then(results => {
      var elems = document.getElementsByClassName('ticket');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'flex';
      }
      for( let i = 0; results.length > 0; i++) {
        const div = document.createElement('div');
        div.classList.add('ticket');
        div.setAttribute('data-ticket', results[i].id)
        div.innerHTML = `
          <p>${results[i].name}</p>
          <small>${results[i].date} ${results[i].time}</small>
          <button onclick="createTicketModal(${results[i].id})">Alterar Nome</button>
        `
        document.querySelector('main').appendChild(div);
      }
    })
  })
}

async function changeName(ticketId, Name) {
  const name = document.querySelector('#newTicketName input').value
  const id = parseInt(ticketId)
  let data = {
    ingresso: id,
    name: name
}
  await fetch('https://api.feijonts.dev/tickets/change', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  }).then(data2 => {
      location.reload()
  })
}

const createTicketModal = (ticketId) => {
  document.querySelector('main').style.filter = 'blur(3px)';
  document.querySelector('header').style.filter = 'blur(3px)';

  let div = document.createElement('div');
  div.setAttribute("id","newTicketName");
  var body = document.querySelector('body');
  body.appendChild(div)
  div.innerHTML = `
      <p>Novo nome:</p>
      <input type="text" placeholder="Digite um novo nome:">
      <button onclick="changeName(${ticketId})">Confirmar</button>
  `
  var elems = document.getElementById('newTicketName');
  elems.style.display = 'flex';
}

getUserByEmail()

getTickets()