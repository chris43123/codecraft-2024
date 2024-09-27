import {db} from '../config/mssql';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req: any, res: any) => {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const connection = await db();
        const result = await connection.request()
            .input('Email', email)
            .input('Password', hashedPassword)
            .input('Salt', salt)
            .query('INSERT INTO users (email, password, salt) VALUES (@Email, @Password, @Salt)');

        res.status(201).json({ rowsAffected: result.rowsAffected, email });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};


export const login = async (req: any, res: any) => {
    const { email, password } = req.body;

    console.log({ email, password })

    try {
        const connection = await db();
        const result = await connection.request()
            .input('Email', email)
            .query('SELECT id, email, password, salt FROM Users WHERE email = @Email');

        const user = result.recordset[0];

        if (!user || !((await bcrypt.hash(password, user.salt)) === user.password)) {
            res.status(401).json({ error: 'Credenciales inválidas.' });
            return
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error });
    }
};
