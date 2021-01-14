const LOGGED_IN_USER = URL + routes.getUsers()


request("GET", LOGGED_IN_USER)
    .then((data) => {
        userData(usName, profId, userName, email, data)
    })



function userData(el, secEl, thirdEl, email, data) {
    el.textContent += data.message.username
    secEl.textContent += data.message.id
    thirdEl.textContent += data.message.username
    email.textContent += data.message.email
} 