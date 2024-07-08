export async function fetchUserFromAPI() {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
}
