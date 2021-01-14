const newURL = URL + routes.postUserRegister()

const dat = {
    username: '',
    email: '',
    password: '',
    isPrivacyAccepted: 0,
    isUsageAccepted: 0
}

forma.addEventListener("submit", (e) => {
    e.preventDefault()
    dat.username = username.value
    dat.email = email.value
    dat.password = password.value
    dat.isPrivacyAccepted = isPrivacyAccepted.value
    dat.isUsageAccepted = isUsageAccepted.value

    let body = `isPrivacyAccepted=${dat.isPrivacyAccepted}&isUsageAccepted=${dat.isUsageAccepted}&password=${dat.password}&email=${dat.email}&username=${dat.username}`;

        request("POST", newURL, body)
        .then(data => {
            if(isUsageAccepted.checked && isPrivacyAccepted.checked) {
                location.href = '/chat.html'
            }
            localStorage.setItem('key', data.message)
        })
})