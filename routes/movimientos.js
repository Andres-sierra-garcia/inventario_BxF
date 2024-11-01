import Router from 'router'
import { postMovimientos, putMovimientos, getMovimientos, getMovimiento, getActivosinactivos,putActivarInactivar } from '../controllers/movimientos.js'   
const router = Router()


//registrar un nuevo movimiento
router.post("/",postMovimientos)

//actualizar un movimiento
router.put("/actualizar/:ide",putMovimientos)

//traer todos los movimientos
router.get("/movimientos",getMovimientos)

//traer un movimiento por id
router.get("/movimiento/:id", getMovimiento)

//traer todos los movimientos activos
router.get("/movimientos/:accion",getActivosinactivos)

//activar o inactivar un movimiento
router.put("/:accion/:id",putActivarInactivar)


export default router