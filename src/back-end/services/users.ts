import { UserData } from "@/src/models/usersDTO";
import UserRepository from "@/src/back-end/repositores/users";

class UserService {
    userRepository = new UserRepository();

    public createUser = async (userData: UserData) => {
        try {
            return await this.userRepository.createUser(userData);
        } catch (error) {
            console.error('Erro no serviço de usuários:', error);
            throw new Error('Erro ao criar usuário.');
        }
    }
}

export default UserService;
