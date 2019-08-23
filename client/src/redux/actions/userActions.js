export function userLogin(data) {
    return {
        type: "LOGIN",
        data: data,
    }
}

export function Signup(title, num) {
    return {
        type: "SIGNUP",
        title: title,
        num: num
    }
}

export function userLogout() {
    return {
        type: "LOGOUT",
    }
}
