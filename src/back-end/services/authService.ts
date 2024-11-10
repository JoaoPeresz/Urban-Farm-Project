import jwt, {JwtPayload, Secret} from "jsonwebtoken";

const KEY: Secret | undefined = process.env.NEXT_PUBLIC_JWT_KEY as Secret | undefined;

class AuthService {

    public verifyToken(userToken: string): JwtPayload {
        if (!KEY) {
            throw new Error('user not Logged');
        }

        return jwt.verify(userToken, KEY) as JwtPayload;
    }
}
export default AuthService;