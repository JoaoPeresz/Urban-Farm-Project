import {JwtPayload} from "jsonwebtoken";
import {NextApiRequest, NextApiResponse} from "next";
import UserService from "@/src/back-end/services/users";

class UserController {
    userService = new UserService();

    // public verify = async (request: NextApiRequest, response: NextApiResponse) => {
    //     let validateUser: any[];
    //
    //     validateUser = this.userService.validateUserBody(request.body.userData)
    //
    //     if (validateUser.length > 0) {
    //         response.status(422).json({
    //             success: false,
    //             token: null,
    //             errors: validateUser,
    //         });
    //         return;
    //     }
    //
    //     const errors = await this.userService.findByAll({
    //         email: request.body.userData.email,
    //         password: request.body.userData.password
    //     });
    //
    //     if (errors.error != null) {
    //         response.status(400).json({
    //             success: false,
    //             user: errors.user,
    //             errors: errors.error,
    //         });
    //     } else {
    //         response.status(200).send({
    //             success: true,
    //
    //         });
    //     }
    //
    // }
    // public find = async (request: NextApiRequest, response: NextApiResponse) => {
    //     try {
    //         const userToken = request.headers.authorization!! as string;
    //
    //         if (!userToken) {
    //             response.status(403).json({error: "UserDto not Authenticated"})
    //         }
    //
    //         let tokenData: JwtPayload = this.authService.verifyToken(userToken);
    //
    //         if (tokenData) {
    //             const user = await this.userService.findUserById(tokenData.id);
    //
    //             if (user?.id) {
    //
    //                 return response.status(200).json({
    //                     status: true,
    //                     data: user
    //                 });
    //
    //             } else {
    //                 response.status(404).json({
    //                     success: false,
    //                     data: null
    //                 })
    //             }
    //
    //         } else {
    //             response.status(404).json({
    //                 success: false,
    //                 error: 'Authenticate fail'
    //             })
    //         }
    //     } catch (e: any) {
    //         response.status(404).json({
    //             success: false,
    //             error: e.message
    //         })
    //
    //     }
    // }

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