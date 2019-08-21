export function Login(title, num) {
    return {
        type: "LOGIN",
        title: title,
        num: num
    }
}

export function Signup(title, num) {
    return {
        type: "SIGNUP",
        title: title,
        num: num
    }
}

export function Logout(title, num) {
    return {
        type: "LOGOUT",
        title: title,
        num: num
    }
}
