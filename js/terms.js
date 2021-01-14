const USAGE_URL = URL + routes.getUsage()
const PRIVACY_URL = URL + routes.getPrivacy()

const styles = {
    color: "blue",
    cursor: "pointer"
}

function style(el) {
    el.style.color = styles.color
    el.style.cursor = styles.cursor
}


function getTerms(el) {
    el.onclick = () => {
        if(el.id === "privacy") {
            request("GET", PRIVACY_URL)
                .then((res) => {
                    console.log(res.message.value)
                    const data = res.message.value
                    createPrivacy(data)

                })
        }
        else if(el.id === "usage") {
            request("GET", USAGE_URL) 
                .then((res) => {
                    console.log(res.message.value)
                    const data = res.message.value
                    createPrivacy(data)
                })
        }
    }
} 


function createPrivacy(data) {
    const popUp = document.createElement('div')
    const policy = document.createElement('p')
    const close = document.createElement('p')
    popUp.appendChild(close)
    popUp.appendChild(policy)
    policy.classList.add('paragraph')
    popUp.classList.add("pop-up")

    body.appendChild(popUp)
    popUp.style.position = 'fixed'
    popUp.style.top = '30%'
    popUp.style.left = '30%'
    popUp.style.background = 'white'
    popUp.style.width = 500 + 'px'
    policy.innerText = data
    policy.style.padding = '20px'
    close.style.color = 'blue'
    close.style.cursor = "pointer"

    close.innerText = 'CLOSE'
    close.style.fontSize = '18px'
    close.style.padding = 15 + 'px'

    close.onclick = () => {
        popUp.remove()
    }
}

style(privacy)
style(usage)

getTerms(privacy)
getTerms(usage)


