import {Request, Response} from 'express';

import db from '../database/connection';

export default class ConnectionsController{
  async index(request: Request, response: Response) {
    const { week_day, subject, time } = request.query as {[x: string]: string};

    const connections = await db('connections')

    return response.json(connections);

  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body
  
    try {
      await db('connections').insert({
        user_id
      })

      return response.status(201).send()
    } catch (err) {
console.log(err)

      return response.status(400).json({
        error: 'Unexpected error while creating new connection'
      })
    }
  
  }
}