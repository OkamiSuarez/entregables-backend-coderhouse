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
    let id = req.params
    let idSearch = id.id
    console.log(idSearch);
    let requestedProduct = await productManager.getProductById(+idSearch)
    console.log(requestedProduct);
    res.json({requestedProduct})
})

// Se crea la respuesta de el endpoint
app.get('/products',async (req,res)=>{
    const products = await productManager.getProducts()
    const {limit} = req.query
    const forLength = products.length
    if(limit>forLength){
        // Esta evaluación es para evitar que se soliciten
        // MAS productos de los que existen
        res.json({products})
    }else if (limit<=forLength){
        let queryArray = []
        let evaluateLimit = parseInt(limit) + 1
        for(let i = 1; i < evaluateLimit; i++){
            let limitArray = await productManager.getProductById(i)
            console.log(limitArray);
            queryArray.push(limitArray)
            console.log(queryArray);
        }
        res.json({queryArray})
    }else{
        res.json({products})
    }
    
})

// Se escucha al puerto 8080
app.listen(8080,()=> {
    console.log('escuchando al puerto 8080');
})