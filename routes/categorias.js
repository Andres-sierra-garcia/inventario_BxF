import Router from "router";
import { postCategorias, putCategorias, getCategorias, getCategoria , getCategoriasActivas_Inactivas, putActivarInactivar} from "../controllers/categorias.js";
const router = Router();


//registrar una categoria
router.post("/", postCategorias);

//modificar una categoria
router.put("/categoria/:id",putCategorias)

//traer todas las categorias
router.get("/categorias",getCategorias)

//traer categoria por id
router.get("/Categoria/:id",getCategoria)

//traer categorias activas o inactivas
router.get("/categorias/:Estado",getCategoriasActivas_Inactivas)

//activar o inactivar
router.put("/:accion/:id",putActivarInactivar)


export default router;
