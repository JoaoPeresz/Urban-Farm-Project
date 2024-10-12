import { NextApiRequest, NextApiResponse  } from "next";

const saveUser = async (email: string, password: string) => {
    return { success: true };
}

export default  async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            const result = await saveUser(email, password);
            res.status(200).json(result);
        }  catch (error) {
            res.status(500).json({ error: 'Erro ao salvar o usuário' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}

