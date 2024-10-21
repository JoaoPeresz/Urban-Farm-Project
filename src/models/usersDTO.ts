export default interface UserDTO {
    email: string,
    password: string,
    confirmPassword: string,
    validated: boolean
}

export interface UserData {
    email: string,
    password: string,
    confirmPassword: string,
}