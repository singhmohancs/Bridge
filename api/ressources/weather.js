import { Router } from 'express'

import { weatherService } from '../services'

const router = Router()

router.get('/', (req, res) => {
  weatherService.getByCoords(req.query.latitude, req.query.longitude)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send({ message: err.message })
    })
})

export default router
