import {db} from '../config/mssql';


export const get_tags = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .query('SELECT id, description FROM dbo.tags WHERE user_id = @UserId')

        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const create_tag = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    const { description } = req.body;

    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('Description', description)
            .query('INSERT INTO dbo.tags (description, user_id) VALUES (@Description, @UserId)');

        res.status(200).json({ rowsAffected: result.rowsAffected, description, user_id });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const update_tag = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    const { id } = req.params;
    const { description } = req.body;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('TagId', id)
            .input('Description', description)
            .query('UPDATE dbo.tags SET description = @Description WHERE id = @TagId AND user_id = @UserId');

        res.status(200).json({rowsAffected: result.rowsAffected, id, description, user_id});
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const delete_tag = async (req: any, res: any) => {
    const user_id = req.user?.id || 1;
    const { id } = req.params;
    
    try {
        const connection = await db();
        const result = await connection.request()
            .input('UserId', user_id)
            .input('TagId', id)
            .query('DELETE FROM dbo.tags WHERE id=@TagId AND user_id=@UserId');

        res.status(200).json({rowsAffected: result.rowsAffected, id, user_id});
    } catch (error) {
        res.status(400).json({ error: error });
    }
};