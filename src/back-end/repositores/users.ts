import pool from "../../../api/postgres/db";
import {UserData} from "@/src/models/usersDTO";

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


    public validateUser = async (userId: number) => {
        try {
            const query = {
                text: `UPDATE users 
                SET validated = true
                WHERE id = $1;`,
                values: [userId],
            };

            return await pool.query(query);

        } catch (error: any) {

            return error.message
        }
    }

}

export default UserRepository;