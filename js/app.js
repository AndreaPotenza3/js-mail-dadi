const mails = ['pincopallo@gmal.com', 'pallino@gmail.com', 'carletto@gmail.com', 'faker@gmail.com']

// chedere all'utente la sua mal

const userMail = prompt('Inserisci la tua email')

// controllare che sa nella lista

let correctMail = false

for (let i = 0; i < mails.length; i++) {
    

    const  currentMail = mails[i]
    console.log(currentMail === userMail)

    if(currentMail === userMail){
    correctMail = true
    break
    }
    
}

console.log(correctMail)

//stampa messaggo

if(correctMail) {
    console.log('Benvenuto nella pagina')
}else {
    console.log('Accesso negato')
}



