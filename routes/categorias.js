import Router from "router";
import { check } from "express-validator";
import validarCampos from "../middlewares/validarCampos.js";
import helperCategorias from "../helpers/categorias.js";
const router = Router();
import {
    postCategorias,
    putCategorias,
    getCategorias,  
    getCategoria,
    getCategoriasActivas_Inactivas,
    putActivarInactivar,
} from "../controllers/categorias.js";



//registrar una categoria
router.post("/",[
    check("descripcion","es necesaria una descripcion de la categoria").notEmpty(),
    check("estado","el estado debe 0 o 1").optional().isInt({min:0, max:1}),
    validarCampos   
], postCategorias);

//modificar una categoria
router.put("/categoria/:id",[
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperCategorias.validarId),
    validarCampos
], putCategorias);

//traer todas las categorias
router.get("/categorias", getCategorias);

//traer categoria por id
router.get("/Categoria/:id",[
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperCategorias.validarId),
    validarCampos
], getCategoria);

//traer categorias activas o inactivas
router.get("/categorias/:Estado",[
    check("Estado","debe ser o activas o inactivas").isIn(["activas", "inactivas"]),
    validarCampos
], getCategoriasActivas_Inactivas);

//activar o inactivar
router.put("/:accion/:id",[
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperCategorias.validarId),
    validarCampos
], putActivarInactivar);

export default router;
