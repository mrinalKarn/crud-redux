export async function fetchUser() {
    let url="https://jsonplaceholder.typicode.com/users";

    let response = await fetch(url);
    let users = await response.json();
    return users;
}

export async function paginationUser(id){
    let url="https://gorest.co.in/public-api/users/?page="+id;

    let response = await fetch(url);
    let users = await response.json();
    return users;
}