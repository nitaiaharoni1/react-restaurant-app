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

export function itemsLoad(items) {
    return {
        type: "ITEMS_LOAD",
        items: items,
    }
}
