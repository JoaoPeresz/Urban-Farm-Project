import {JwtPayload} from "jsonwebtoken";
import {NextApiRequest, NextApiResponse} from "next";
import UserService from "@/src/back-end/services/users";
import AuthService from "@/src/back-end/services/authService";

class UserController {
    userService = new UserService();
    authService = new AuthService();

    public findUser = async (request: NextApiRequest, response: NextApiResponse) => {
        try {
            const userToken = request.headers.authorization;
            if (!userToken) {
                return response.status(403).json({ success: false, error: "User not authenticated" });
            }

            const tokenData: JwtPayload | null = this.authService.verifyToken(userToken as string);
            if (!tokenData) {
                return response.status(401).json({ success: false, error: "Authentication failed" });
            }

            const user = await this.userService.findUser(tokenData.id);
            if (!user) {
                return response.status(404).json({ success: false, error: "User not found" });
            }

            return response.status(200).json({ success: true, data: user });
        } catch (error: any) {
            return response.status(500).json({ success: false, error: error.message });
        }
    }

    public createUser = async (request: NextApiRequest, response: NextApiResponse) => {
        let validateUser = [];

        validateUser = this.userService.validateUserBody(request.body)

        if (validateUser.length > 0) {
            response.status(422).json({
                success: false,
                token: null,
                errors: validateUser,
            });
            return;
        }

        try {
            const createUser = await this.userService.createUser(request.body)

            if (createUser.rowCount === 1) {


            }
        } catch (error) {
            console.error('Erro ao inserir no banco de dados:', error);
            response.status(500).json({
                success: false,
                token: null,
                error: `Erro ao inserir no banco de dados error:${error}`,
            });
        }

        if (validateUser.length > 0) {
            response.status(422).json({
                success: false,
                token: null,
                errors: validateUser,
            });
            return;
        }
    }
}

export default UserController;