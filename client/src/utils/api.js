export async function postItemsUpdate(email, title, action) {
    const res = await fetch(`/api/items/${email}/${title}/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    if (res.status !== 200) {
        alert(json.msg)
    }
}

export async function getUserAuth() {
    const res = await fetch(`/api/user/auth`);
    const json = await res.json();
    if (res.status === 200) {
        return json;
    } else {
        alert(json.msg)
    }
}

export async function getAdminData(email, loggedIn) {
    if (loggedIn) {
        const res = await fetch(`/api/admin/data/${email}`);
        const json = await res.json();
        if (res.status === 200) {
            return json;
        } else {
            alert(json.msg)
        }
    } else {
        alert('Admin is not loggedIn')
    }
}

export async function getLogin(email, password, remember) {
    let res = await fetch(`/api/user/login/${email}/${password}/${remember}`);
    const json = await res.json();
    if (res.status === 200) {
        return json;
    } else {
        alert(json.msg)
    }
}

export async function postLogout() {
    let res = await fetch(`/api/user/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    if (res.status !== 200) {
        alert(json.msg)
    }
}

export async function postSignup(data) {
    let res = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    if (res.status === 200) {
        return json;
    } else {
        alert(json.msg)
    }
}

export async function postNewOrder(email, payment, items, total, totalPrice) {
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
    const json = await res.json();
    if (res.status === 200) {
        alert(`Your order has been received by the system.\n Order ID: ${json.orderId}`);
        return json;
    } else {
        alert(json.msg)
    }
}