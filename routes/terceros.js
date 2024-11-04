import Router from "router";
import {
    postTerceros,
    putTerceros,
    getTerceros,
    getTercero,
    getActivosinactivos,
    putActivarInactivar,
    getTercerosTipo
} from "../controllers/terceros.js";
const router = Router();

//registrar un tercero
router.post("/", postTerceros);

//actualizar un tercero
router.put("/tercero/:id", putTerceros);

//traer todos los terceros
router.get("/terceros", getTerceros);

//traer tercero por id
router.get("/tercero/:id", getTercero);

//traer activos o inactivos
router.get("/terceros/:accion", getActivosinactivos);

//activar o inactivar un tercero
router.put("/:accion/:id", putActivarInactivar);



//de aqui para abajo son las peticiones especificas
router.get("/tipos/:tipo", getTercerosTipo)


export default router;
