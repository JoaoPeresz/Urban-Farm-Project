import api from "./axios";

export const registerNewUser = async (
    email: string,
    password: string,
    confirmPassword: string,
) => {
    try {
        const result: any = await api.post(
            `/api/users`, {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            },);
        return result;

    } catch (error: any) {
        console.log(error, 'error api users');
        return error.response.data;
    }
}

export const isUserInDatabase = async (
    userData: any
) => {
    try {
        const result = await api.post(`/api/users/user-verify`, {userData: userData});
        return result.data
    } catch (error: any) {
        console.log(error.response.data, 'error api-validate users');
        return error.response.data;
    }
}

export const findUser = async (token: string) => {
    try {
        const result = await api.get(`/api/users`, {
            headers: {Authorization: token}
        })
        return result.data.data;

    } catch (e: any) {
        return e.message
    }
}