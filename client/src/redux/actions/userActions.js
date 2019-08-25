export function userLogin(data) {
    return {
        type: "LOGIN",
        data: data,
    }
}

export function userSignup(data) {
    return {
        type: "SIGNUP",
        data: data,
    }
}

export function userLogout() {
    return {
        type: "LOGOUT"
    }
}
