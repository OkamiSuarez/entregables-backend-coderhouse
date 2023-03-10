import { Router } from "express";

const router = Router()

// middleware de seguridad
const validarUsuario = (req, res, next) =>{
    const user = req.body
    if(user.firstname === 'Esteban'){
        res.send('No admin grants')
    } else{
        next()
    }
}

// Se crea el post de products
router.post('/', async(req,res)=>{
    const obj = req.body
    console.log('information',obj);
    const newProduct = await productManager.addProduct(obj)
    res.json({message: 'Product created', product: newProduct })
})

// Para llamar a los id
router.get('/:id', async(req,res)=>{
    const {id} = req.params
    console.log(id);
    let requestedProduct = await productManager.getProductById(+id)
    console.log(requestedProduct);
    res.json({requestedProduct})
})


// Se crea la respuesta de el endpoint
router.get('/',async (req,res)=>{

    try{
        const products = await productManager.getProducts()
        const {limit} = req.query
        
        if (!limit){
            console.log('limit unable to process');
            res.json({products})
        }else{
            const newArray = products.slice(0,limit);
            res.json(newArray)
        }
    } catch (err){
        res.json({message: err.mesage})
    }
})

export default router