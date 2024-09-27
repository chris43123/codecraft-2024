import {db} from '../config/mssql';


// export const get_categories = async (req: any, res: any) => {
//     const { task_id, user_id } = req.body;
    

// };

export const create_categories = async (req: any, res: any) => {
    const {user_id, description } = req.body;

    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('Description', description)
            .query('INSERT INTO categories (description, user_id) VALUES (@Description, @UserId)');

        res.status(200).json({ rowsAffected: result.rowsAffected, description, user_id });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};