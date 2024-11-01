import { NextApiRequest, NextApiResponse } from 'next';
import { Secret } from 'jsonwebtoken';
import UserController from "@/src/back-end/controller/users";

const KEY: Secret | undefined = process.env.NEXT_PUBLIC_JWT_KEY;

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { method } = request;
    const userController = new UserController();

    switch (method) {
        case 'POST':
            await userController.createUser(request, response);
            break;
        default:
            response.setHeader('Allow', ['POST']);
            response.status(405).end(`Method ${method} Not Allowed`);
    }
};
