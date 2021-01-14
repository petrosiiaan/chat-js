const LOGGED_IN_USER = URL + routes.getUsers()


request("GET", LOGGED_IN_USER)
    .then((data) => {
        profId.textContent = data.message.id 
        userName.textContent += data.message.username
        email.textContent += data.message.email 
        usName.textContent += data.message.username
})



