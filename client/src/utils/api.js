export async function fetchUserData(email) {
    const res = await fetch(`/api/items/${email}`);
    return (await res.json()).items;
}

export async function fetchLogin(email,password) {
    let res = await fetch(`/api/user/login/${email}/${password}`);
    return (await res.json());
}