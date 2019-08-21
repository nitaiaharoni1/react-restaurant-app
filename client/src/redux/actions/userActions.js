export function userLogin(email, password, remember) {
    return {
        type: "LOGIN",
        email: email,
        password: password,
        remember: remember
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
