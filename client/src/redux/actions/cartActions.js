export function Add(title, num) {
    return {
        type: "ADD",
        title: title,
        num: num
    }
}

export function Set(title, num) {
    return {
        type: "SET",
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

export function loadItems(items) {
    return {
        type: "LOAD_ITEMS",
        items: items,
    }
}
