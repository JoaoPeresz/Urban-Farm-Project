import { NextApiRequest, NextApiResponse } from "next";
import UserService from "@/src/back-end/services/users";

class UserController {
    userService = new UserService();

    public createUser = async (request: NextApiRequest, response: NextApiResponse) => {
        const { email, password, confirmPassword } = request.body;

        if (!email || !password || password !== confirmPassword) {
            return response.status(400).json({
                success: false,
                message: 'Dados inválidos. Verifique o email e as senhas.',
            });
        }

        try {
            await this.userService.createUser(request.body);

            response.status(201).json({
                success: true,
                message: 'Usuário criado com sucesso',
            });
        } catch (error) {
            console.error('Erro ao inserir no banco de dados:', error);
            response.status(500).json({
                success: false,
                error: `Erro ao inserir no banco de dados: ${error}`,
            });
        }
    }
}

export default UserController;