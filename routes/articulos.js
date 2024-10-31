import Router from 'router'
import {postArticulos,putArticulos,getArticulos,getArticulo,getArticulosActivos,getArticulosInactivos,putActivar,putInactivar} from '../controllers/articulos.js'  
import { get } from 'mongoose';
const router =  Router();

//registrar articulos
router.post("/", postArticulos)

//modificar articulos por id
router.put("/articulo/:id",putArticulos)

//traer todos los articulos
router.get("/articulos",getArticulos)

//traer por articulo por id
router.get("/articulo/:id",getArticulo)

//traer articulos activos
router.get("/activos",getArticulosActivos)

//traer articulos inactivos
router.get("/inactivos",getArticulosInactivos)

//activar articulo
router.put("/activar/:id",putActivar)

//inactivar articulo
router.put("/inactivar/:id",putInactivar)

export default router