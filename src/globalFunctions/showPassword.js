export function changePasswordVisibility(visiblityStatus, inputRef) {
    if (visiblityStatus) {
        inputRef.type = 'text'
    }

    inputRef.type = 'password'
}