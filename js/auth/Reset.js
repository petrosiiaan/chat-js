const RESET_URL = URL + routes.postResetPass()

console.log(RESET_URL)

const email = {
    email: ''
}


reset.onclick = () => {
    email.email = resetEmail.value

    let emailReset = `email=${email.email}`;
    if(email.email !== '') {
        request("POST", RESET_URL, emailReset)
            .then((data) => {
                console.log(data)
                alert("Password Reset Message Has Been Sent Successfully")
            })
    }
    else {
        resetEmail.style.border = '1px solid'
        resetEmail.style.borderColor = 'red'
        request("POST", RESET_URL, emailReset)
            .then((data) => alert(data.message))
    }
}