import express, { query } from 'express'
import ProductManager from '../ProductManager.js'
import productsRouter from './routes/products.router'
import cartRouter from './routes/cart.router'
import { __dirname } from './utils.js'

// importar dirname por que usamos module
console.log('Aqui abajo estan las líneas del dirname');
console.log(__dirname);
console.log("__dirname",__dirname+'/public');

const app = express()

// instancia
const productManager = new ProductManager('./products.json')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// public
app.use('/static',express.static(__dirname+'/public'))

// routes
app.use('/api/products',productsRouter) //products
app.use('/api/cart',cartRouter) //cart

// // // // Se crea el post de products
// // // app.post('/products', async(req,res)=>{
// // //     const obj = req.body
// // //     console.log('information',obj);
// // //     const newProduct = await productManager.addProduct(obj)
// // //     res.json({message: 'Product created', product: newProduct })
// // // })

// // // // Para llamar a los id
// // // app.get('/products/:id', async(req,res)=>{
// // //     const {id} = req.params
// // //     console.log(id);
// // //     let requestedProduct = await productManager.getProductById(+id)
// // //     console.log(requestedProduct);
// // //     res.json({requestedProduct})
// // // })


// // // // Se crea la respuesta de el endpoint
// // // app.get('/products',async (req,res)=>{

// // //     try{
// // //         const products = await productManager.getProducts()
// // //         const {limit} = req.query
        
// // //         if (!limit){
// // //             console.log('limit unable to process');
// // //             res.json({products})
// // //         }else{
// // //             const newArray = products.slice(0,limit);
// // //             res.json(newArray)
// // //         }
// // //     } catch (err){
// // //         res.json({message: err.mesage})
// // //     }
// // // })

// Se escucha al puerto 8080
app.listen(8080,()=> {
    console.log('escuchando al puerto 8080');
})