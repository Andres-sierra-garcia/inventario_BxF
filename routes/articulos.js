import Router from 'router'
import {postArticulos} from '../controllers/articulos.js'  
const router =  Router();

//registrar articulos
router.post("/articulos", postArticulos)

export default router