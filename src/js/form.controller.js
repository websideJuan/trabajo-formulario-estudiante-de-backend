const delegationElement = document.querySelector('form')
let listUser = []


export function formController () {
    delegationElement.addEventListener('submit', function(e) {
        e.preventDefault()
        
        // Funcion para validar los inputs y no mandar texto en blanco al servidor
        let userName = e.target.querySelector('input#username')
        let userEmail = e.target.querySelector('input#useremail')
        let userPassword = e.target.querySelector('input#userpassword')
        let userBirth = e.target.querySelector('input#userbirth')
        
        if (userName.value === '' || userEmail === '' || userPassword === '' || userBirth.value === '') {
            return alert('No puede dejar las espacios en blanco')
        }


      createdUser(e.target)
      handleAnimation(e.target)

    })
    
}

// animacion del button 

function handleAnimation(buttonElement) {
    let button = buttonElement.querySelector('button.btn')
    const span = document.createElement('span')

    button.setAttribute('disabled', '')
    button.innerHTML = ''
    span.innerHTML = `

    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`

    button.appendChild(span)
}


// creando el usurario para el servidor 

function createdUser (objUser) {

    const createdUserObj = {
        userName: objUser.querySelector('#username').value,
        userEmail: objUser.querySelector('#useremail').value,
        userPassword: objUser.querySelector('#userpassword').value,
        userBirth: objUser.querySelector('#userbirth').value 
    }

    listUser.push(createdUserObj)

    setTimeout(() => {
        clearDOM(listUser)
    }, 4000)

}


// renderizando la pagina de informacion del usuario

function clearDOM (arrayUsers) {
    const main = document.querySelector('#main')
    const divElement = document.createElement('div')
    main.innerHTML = ''

    const newUserElement = arrayUsers.map(user => {
    return `
   
    <main class="d-flex flex-column align-items-center justify-content-center gap-3 text-center" style="height:100vh;">
    
        <i class="fa-regular fa-circle-check text-white"></i>
        
        <h1 class="text-white">
            Thanks for the registration! ${user.userName}
        </h1>
        <p class="text-white"> 
            We have sent you a verification email at ${user.userEmail}
        </p>
        <a href="./src/assets/html/home.html" class="text-white">Back to Home</a>
    </main>
    `
    })

    divElement.innerHTML = newUserElement
    
    main.appendChild(divElement)
}
