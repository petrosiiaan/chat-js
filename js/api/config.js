const URL = 'http://git.inoclouds.com:4041'
const token = localStorage.getItem('key')

const routes = {
    getUsers: () => {
       return `/user?token=${token}`
    },
    getUsage: () => {
        return `/usage`
    },
    getPrivacy: () => {
        return `/privacy`
    },
    postUserRegister: () => {
        return `/user/register`
    },
    postUserLogin: () => {
        return `/user/login`
    },
    postResetPass: () => {
        return `/user/reset`
    }
}



console.log(URL + routes.getUsers())