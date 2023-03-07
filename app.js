import express from 'express'
import ProductManager from './ProductManager.js'

const app = express()

const productManager = new ProductManager('./products.json')

// Siempre por default hay que crear 2 middlewares 
// para que se lea la información que llega al server 
// express.json()
// express.urlencoded()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Se crea la respuesta de products
app.get('/products', async(req,res)=>{
    const products = await productManager.getProducts()

    res.json({products})
})

// Se crea el post de products
app.post('/products', async(req,res)=>{
    const obj = req.body
    console.log('information',obj);
    const newProduct = await productManager.addProduct(obj)
    res.json({message: 'Product created', product: newProduct })
})

// Para llamar a los id
app.get('/products/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send
})



// Se escucha al puerto 8080
app.listen(8080,()=> {
    console.log('escuchando al puerto 8080');
})



// Leer el archivo de preoductos y devolverlos
// Dentro de un objeto 
// recibir por query param el limit
app.get('/productos',(req,res)=>{
    res.send('Hola productos')
})

// recibir por req.params el product id 
// Devolver solo el producto solicitado
app.get('/productos/:pid',(req,res)=>{
    res.send('Hola productos')
})

app.get('/usuarios',(req,res)=>{
    res.send('Hola usuarios')
})




