import {UserData} from "@/src/models/usersDTO";
import UserRepository from "@/src/back-end/repositores/users";

class UserService {
    userRepository = new UserRepository();

    public createUser = async (userData: UserData) => {
        return await this.userRepository.createUser(userData)
    }

    public findUser = async (userId: number) => {
        return await this.userRepository.findUser(userId)
    }

    public validateUserBody = (body: UserData) => {
        const errors = [];

        if (!body.email) {
            errors.push('Name required');
        }
        if (!body.password) {
            errors.push('Email password');
        }
        return errors
    }
}

export default UserService