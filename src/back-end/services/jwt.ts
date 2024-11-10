import jwt, {Secret} from "jsonwebtoken";

class JwtService {
    public create = (userId: number, userEmail: string) => {

        const KEY: Secret | undefined = process.env.NEXT_PUBLIC_JWT_KEY as Secret | undefined;

        if (!KEY) {
            throw new Error("JWT key is not defined");
        }

        const payload = {
            id: userId,
            email: userEmail,
            validate: true,
        };

        return jwt.sign(payload, KEY, {expiresIn: '24h'});
    }

}

export default JwtService;