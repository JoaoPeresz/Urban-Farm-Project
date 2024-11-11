import {UserData} from "@/src/models/usersDTO";
import pool from "@/api/postgres";

class UserRepository {
    public createUser = async (userData: UserData) => {

        try {
            const query = {
                text: `
                INSERT INTO users(
                    email
                )
                VALUES (
                  $1
                );
                `,
                values: [userData.email],
            };

            return await pool.query(query);

        } catch (error: any) {

            return error.message
        }
    }


    public findUser = async (userId: number) => {
        try {
            const query = `
                UPDATE users 
                SET validated = true
                WHERE id = ?;
            `;
            const [result] = await pool.query(query, [userId]);
            return result;
        } catch (error: any) {
            return error.message;
        }
    }

}

export default UserRepository;