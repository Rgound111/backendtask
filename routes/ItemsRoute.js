import express from 'express'
import { addItemsController, getItemsController } from '../controllers/itemsController.js'

const router = express.Router()

// routing 

// Add Items
router.post('/additems', addItemsController)

// Get Items
router.get('/getitems', getItemsController)

export default router