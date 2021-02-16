// Actions or the form
export function addData(obj) {
    return {
        type: 'ADD_DATA',
        payload: {
            data: obj
        }
    };
};

export function editData(id, obj) {
    return {
        type: 'EDIT_DATA',
        payload: {
            id: id,
            data: obj
        }
    };
};

export function deleteData(id) {
    return {
        type: 'DELETE_DATA',
        payload: {
            id: id
        }
    };
};