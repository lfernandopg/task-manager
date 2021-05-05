export const checkPassword = (password, confirmation) => { 
    if (password !== confirmation) {
        return false;
    }

    if (password.length < 6) {
        return false;
    }
    return true;
}

export const isEmptyField = (field) => {
    if (field === "") {
        return true;
    }

    return false;
}