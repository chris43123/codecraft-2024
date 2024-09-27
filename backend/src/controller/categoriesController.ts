import {db} from '../config/mssql';


export const get_categories = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .query('SELECT id, description FROM dbo.categories WHERE user_id = @UserId')

        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const create_categories = async (req: any, res: any) => {
    const {user_id, description } = req.body;

    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('Description', description)
            .query('INSERT INTO dbo.categories (description, user_id) VALUES (@Description, @UserId)');

        res.status(200).json({ rowsAffected: result.rowsAffected, description, user_id });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const update_category = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    const { category_id, description } = req.body;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('CategoryId', category_id)
            .input('Description', description)
            .query('UPDATE dbo.categories SET description = @Description WHERE id = @CategoryId AND user_id = @UserId');

        res.status(200).json({rowsAffected: result.rowsAffected, category_id, description, user_id});
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const delete_category = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    const { id } = req.params;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('CategoryId', id)
            .query('DELETE FROM dbo.categories WHERE id=@CategoryId AND user_id=@UserId');

        res.status(200).json({rowsAffected: result.rowsAffected, id, user_id});
    } catch (error) {
        res.status(400).json({ error: error });
    }
};