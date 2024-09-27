import { db } from '../config/mssql';
import { Request, Response } from 'express';

export const createtask = async (req: any, res: Response) => {
    try {

        const payload = req.body
        const pool = await db()
        const createTaskRq = await pool.request()

        createTaskRq.input('title', payload.title)
        createTaskRq.input('description', payload.description)
        createTaskRq.input('parent_id', payload.parent_id)

        const createdTask = await createTaskRq.query(`
        insert into task 
        (title, description, parent_id)
        values
        (@title, @description, @parent_id)
        SELECT SCOPE_IDENTITY() as Id;
        `)

        const linkToUserRq = pool.request()
        linkToUserRq.input('UserId', req.user.id)
        linkToUserRq.input('taskId', createdTask.recordset[0].id)

        res.sendStatus(201)
        return
    }
    catch (err) {
        console.log(err)
        res.send(err).status(500)
    }
}

export const updateTask = async (req: any, res: Response) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const { user_id } = req.user?.id || 1;
        const pool = await db()

        const updateRq = pool.request()

        updateRq.input('taskId', id);
        updateRq.input('userId', user_id);
        updateRq.input('title', payload.title)
        updateRq.input('description', payload.description)
        updateRq.input('parent_id', payload.parent_id)
        updateRq.input('date_modified', new Date())
        updateRq.input('expiration_date', payload.expiration_date)
        updateRq.input('status', payload.status)

        updateRq.query(`
            update task
            set
            title = @title
            description = @description
            parent_id = @parent_id
            date_added = @date_added
            priority = @priority
            date_modified = @date_modified
            expiration_date = @expiration_date
            status = @status
            where id = @taskId AND user_id = @userId
            `)
    }
    catch (err) {
        console.log(err)
        res.send(err).status(500)
    }

}

export const listTasks = async (req: any, res: Response) => {
    const pool = await db()
    const getRq = pool.request()

    getRq.input('userId', req.user?.id || 1)

    const tasks = await getRq.query(
        `
        select t.* from task as t 
        inner join user_task as ut on ut.task_id = t.id
        where ut.user_id = @userId
        `
    )
    res.send(tasks.recordset)
}

export const getTask = async (req: any, res: Response) => {
    const pool = await db()
    const getRq = pool.request()

    getRq.input('userId', req.user.id)

    const task = await getRq.query(
        `
        select t.*  
        from task as t 
        inner join user_task as ut on ut.task_id = t.id
        where ut.user_id = @userId and t.id = @taskId
        `
    )
    res.send(task.recordset[0])
}

export const getTaskCategories = async (req: any, res: Response) => {
    const pool = await db()
    const getRq = pool.request()

    getRq.input('userId', req.user.id)

    const task = await getRq.query(
        `
        select cats.*  
        from task as t 
        inner join user_task as ut on ut.task_id = t.id
        left join task_categories cats on cats.task_id = t.id 
        where ut.user_id = @userId and t.id = @taskId
        `
    )
    res.send(task.recordset[0])
}


export const getTasktags = async (req: any, res: Response) => {
    const pool = await db()
    const getRq = pool.request()

    getRq.input('userId', req.user.id)

    const task = await getRq.query(
        `
        select tags.*  
        from task as t 
        inner join user_task as ut on ut.task_id = t.id
        left join task_tags as tags on tags.task_id = t.id
        where ut.user_id = @userId and t.id = @taskId
        `
    )
    res.send(task.recordset[0])
}

export const deleteTask =  async (req: any, res: Response) => {
    const pool = await db()
    const delRq = pool.request()

    delRq.input('taskId', req.params.taskId)
    await delRq.query(
        `
        update task
        set is_active = 0
        where id = @taskId
        `
    )
    res.sendStatus(200)    
}
