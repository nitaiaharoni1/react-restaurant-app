export function Add(title, num) {
    return {
        type: "ADD",
        title: title,
        num: num
    }
}

export function Sub(title, num) {
    return {
        type: "SUB",
        title: title,
        num: num
    }
}

export function Zero(title) {
    return {
        type: "ZERO",
        title: title,
        num: 0
    }
}
