import {Router} from 'express';

const routes = Router();

routes.post('/classes', (req,res) => {

  const data = req.body

  res.send({response: true})

})


export default routes;