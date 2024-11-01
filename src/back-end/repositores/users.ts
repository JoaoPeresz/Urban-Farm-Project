import pool from "../../../api/postgres";
import {UserData} from "@/src/models/usersDTO";

class UserRepository {
    public createUser = async (userData: UserData) => {
        try {
            const query = `
                INSERT INTO dba_usuarios (
                    EMAIL_USUARIO
                ) VALUES (?);
            `;
            const values = [
                userData.email
            ];

            const result = await pool.query(query, values);
            return result[0];
        } catch (error: any) {
            console.error('Erro ao inserir no MySQL:', error);
            throw new Error(error.message);
        }
    }
}

export default UserRepository;