export async function fetchUserData(email) {
    const res = await fetch(`/api/items/${email}`);
    return (await res.json()).items;
}

export async function fetchLogin(email,password) {
    let res = await fetch(`/api/user/login/${email}/${password}`);
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }}

export async function fetchSignup(data) {
    let res = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    });
    if (res.status === 200) {
        return (await res.json());
    } else {
        alert(res.msg)
    }
}