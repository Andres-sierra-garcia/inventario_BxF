import tercerosModel from "../models/terceros.js";
import { generarJWT } from "../middlewares/validarjwt.js";
import bcrypt from 'bcrypt'

const postTerceros = async (req,res)=>{
    try {
        const {nombre,contraseña, identificacion, direccion, telefono, tipo,  estado}=req.body
        const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10)
        const tercero = new tercerosModel({
            nombre,
            contraseña:contraseñaEncriptada,
            identificacion,
            direccion,
            telefono, 
            tipo,
            estado
        })
        await tercero.save()
        res.json({tercero})
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error en el regustro del tercero"})
        console.log(error);
    }
}

const putTerceros = async (req,res)=>{
    try {
        const {nombre,contraseña, identificacion, direccion, telefono, tipo,  estado}=req.body
        const {id}= req.params
        const tercero = await tercerosModel.findByIdAndUpdate(id,{nombre, contraseña, identificacion, direccion, telefono, tipo,  estado},{new:true})
        res.json({tercero})
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error  al actualizar el tercero"})
        console.log(error);
    }
}

const getTerceros = async (req, res)=>{
    try {
        const terceros = await tercerosModel.find()
        res.json({terceros})
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error  al traer todos los terceros"})
        console.log(error);
    }
}


const getTercero = async (req, res)=>{
    try {
        const {id}= req.params
        const tercero = await tercerosModel.findById(id)
        res.json({tercero})
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error  al relizar la busqueda"})
        console.log(error);
    }
}

const getActivosinactivos = async (req, res)=>{
    try {
        const {accion} = req.params
        if(accion == "activos"){
            const activos = await tercerosModel.find({estado:1})
            res.json({activos})
        }
        else if(accion == "inactivos"){
            const inactivos = await tercerosModel.find({estado:0})
            res.json({inactivos})
        }
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error al realizar la operacion"})
    }
}

const putActivarInactivar = async (req, res)=>{
    try {
        const {accion} = req.params
        const {id}= req.params
        if(accion == "activar"){
            const activar = await tercerosModel.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({activar})
        }
        else if(accion == "inactivar"){
            const inactivar = await tercerosModel.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({inactivar})
        }
    } catch (error) {
        res.status(400).json({error:"parece que hubo un error al realizar la operacion"})
    }
}


const getTercerosTipo = async  (req, res)=>{
    try {
        const {tipo}  = req.params
        if(tipo == "cliente"){
            const  clientes  = await tercerosModel.find({tipo:1})
            res.json({clientes})
        }
        else if(tipo  == "proveedor"){
            const proveedores = await tercerosModel.find({tipo:2})
            res.json({proveedores})
        }
    } catch (error) {
        res.status(400).json({error:"erro al realizar la busqueda"})
    }
}


const loginTerceros = async (req, res) => {
    const { usuario, contraseña } = req.body;
    try {
        const tercero = await tercerosModel.findOne({nombre:usuario});
        console.log(tercero);
        
        if (!tercero) {
            return res.status(400).json({ msg: "tercero / nombre incorrecto"});
        }
        if (tercero.estado === "0") {
            return res.status(400).json({
                msg: "tercero inactivo",
            });
        }
        const validPassword = bcrypt.compareSync(contraseña, tercero.contraseña);// tengo  que crear un campo para contraseña y hacer la parte de guardarla encriptado en la bd
        if (!validPassword) {
            return res.status(400).json({
                msg: "Holder / password incorrectos",
            });
        } 
        const token = await generarJWT(tercero._id);
        res.json({
            tercero,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "algo salio mal hable con el webMaster" });
    }
};


export  {
    postTerceros,
    putTerceros,
    getTerceros,
    getTercero,
    getActivosinactivos,
    putActivarInactivar,
    getTercerosTipo,
    loginTerceros
}