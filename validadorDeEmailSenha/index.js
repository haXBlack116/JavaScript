const button = document.getElementById('button')

function validateEmail(email) {
    if (typeof email === "string") {
        const regex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/
        if (regex.test(email)) {
            console.log("Email Validado!")
        }else
            throw new Error("O email não segue o formato correto!")
    }else{
        throw new Error("O dado não é do tipo String!")
    }
}

function validatePassword(password) {
    if (typeof password === "string") {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (regex.test(password)) {
            console.log("Senha Validada!")
        }else
            throw new Error("A senha não segue o formato correto!")
    }else{
        throw new Error("O dado não é do tipo String!")
    }
}

button.addEventListener("click", function() {
    try {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        validateEmail(email)
        validatePassword(password)
    } catch (error) {
        console.log(error.message)
    }
})
