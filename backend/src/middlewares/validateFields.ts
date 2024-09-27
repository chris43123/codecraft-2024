import { validationResult } from "express-validator";

import {Request, Response} from 'express';
export const validateFields = (req:Request, res:Response, next: any) =>{
    const result = validationResult(req);
    result.array()
    if (!result.isEmpty()) {
      return res.send(result.array()).status(400);
    }
}