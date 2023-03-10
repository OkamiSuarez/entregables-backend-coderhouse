import express, { query } from 'express'
import ProductManager from './ProductManager.js'

const app = express()

const productManager = new ProductManager('./products.json')

// Siempre por default hay que crear 2 middlewares 
// para que se lea la información que llega al server 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Se crea el post de products
app.post('/products', async(req,res)=>{
    const obj = req.body
    console.log('information',obj);
    const newProduct = await productManager.addProduct(obj)
    res.json({message: 'Product created', product: newProduct })
})

// Para llamar a los id
app.get('/products/:id', async(req,res)=>{
    const {id} = req.params
    console.log(id);
    let requestedProduct = await productManager.getProductById(+id)
    console.log(requestedProduct);
    res.json({requestedProduct})
})


// Se crea la respuesta de el endpoint
app.get('/products',async (req,res)=>{

    try{
        const products = await productManager.getProducts()
        const {limit} = req.query
        
        if (!limit){
            console.log('limit unable to process')
            res.json({products})
        }else{
            const newArray = products.slice(0,limit);
            res.json(newArray)
        }
    } catch (err){
        res.json({message: err.mesage})
    }
})

// Se escucha al puerto 8080
app.listen(8080,()=> {
    console.log('escuchando al puerto 8080');
})