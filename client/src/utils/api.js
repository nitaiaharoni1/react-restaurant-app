export async function fetchUpdateItems(email, title, action) {
    const res = await fetch(`/api/items/${email}/${title}/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.status === 200) {
        return;
    } else {
        alert(res.msg)
    }
}

export async function fetchUserAuth() {
    const res = await fetch(`/api/user/auth`);
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }
}

export async function fetchLogin(email, password, remember) {
    let res = await fetch(`/api/user/login/${email}/${password}/${remember}`);
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }
}

export async function fetchLogout() {
    let res = await fetch(`/api/user/logout`);
    if (res.status !== 200) {
        alert(res.msg)
    }
}

export async function fetchSignup(data) {
    let res = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }
}

export async function fetchNewOrder(email, payment, items, total, totalPrice) {
    let payload = {payment, total, totalPrice, items: {}};
    Object.values(items)
        .filter(item => item.num > 0)
        .map(function (item) {
            payload.items[item.title] = item.num;
        });
    let res = await fetch(`/api/order/new/${email}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }
}