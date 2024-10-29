import ArticulosModel from '../models/articulos.js'; 


const postArticulos = async (req, res)=>{
    try {
        const {nombre, precio, stock, imagen, categoria, estado}= req.body;
        const articulos = new ArticulosModel({
            nombre,
            precio,
            stock,
            imagen,
            categoria,
            estado
        });
        await articulos.save();
        res.json({articulos});
    } catch (error) {
        res.status(400).json({error:"No se pudo registrar el articulo"})    
        console.log(error);
    }
}

export  {postArticulos}