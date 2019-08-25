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

export async function fetchUserData(email) {
    const res = await fetch(`/api/items/${email}`);
    if (res.status === 200) {
        return (await res.json()).items;
    } else {
        alert(res.msg)
    }
}

export async function fetchLogin(email, password) {
    let res = await fetch(`/api/user/login/${email}/${password}`);
    if (res.status === 200) {
        return (await res.json());
    } else {
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