
import {NextApiRequest, NextApiResponse} from 'next';
import {Secret} from 'jsonwebtoken';
import UserController from "@/src/back-end/controller/users";


const KEY: Secret | undefined = process.env.NEXT_PUBLIC_JWT_KEY;

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { method, body } = request;
    const userController = new UserController()


    if (method === 'POST') {
        await userController.createUser(request, response)
    }

    if (method === 'GET') {
        await userController.findUser(request, response)
    }
};
