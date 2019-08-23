export function userLogin(data) {
    return {
        type: "LOGIN",
        data: data,
    }
}

export function userSignup(title, num) {
    return {
        type: "SIGNUP",
        title: title,
        num: num
    }
}

export function userLogout() {
    return {
        type: "LOGOUT"
    }
}
