// Action for the user
export function addUser(arr){
    return({
        type : "ADD_USER",
        payload : {
            data : arr
        }
    })
}