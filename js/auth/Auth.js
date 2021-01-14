const authURL = URL + routes.postUserLogin()

const loginData = {
    email: "",
    password: ""
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    loginData.email = loggedEmail.value
    loginData.password = loggedPass.value

    let sendData = `email=${loginData.email}&password=${loginData.password}`;
    console.log(sendData)
    if(!loginData.password || !loginData.email) {
        request("POST", authURL, sendData)
            .then((data) => alert(data.message))
    }
    else {
        request("POST", authURL, sendData)
        .then((data) => {
            location.href = '/chat.html'
            localStorage.setItem('key', data.message)
            console.log(data.message)
        })
    }
})