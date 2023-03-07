// Se agrega fs para la información 
import fs from 'fs'

const path = 'Products.json'

// Clase se exporta
export default class ProductManager{
    // #products
    constructor(path){
        // this.#products = []
        this.path = path
    }

    // Metodo get products 
    getProducts = async() => {
        if(fs.existsSync(this.path)){
            const infoProducts = await fs.promises.readFile(this.path,'utf-8')
            const products = JSON.parse(infoProducts)
            return products
        }else{
            console.log('archivo no existe')
            return []
        }
    }

    #generateId = (products) =>{
        let id
        if (products.length === 0){
            id = 1
        } else {
            id = products[products.length -1].id +1
        }
        return id
    }

    // Autoincremental se cambia a un creador de usuario
    addProduct = async (product) => {
        const products = await this.getProducts()
        // añadimos la info del id al product
        const id = this.#generateId(products)
        const newProduct = {id,...product}
        products.push(newProduct)
        // se va a sobreescribir
        await fs.promises.writeFile(this.path,JSON.stringify(products))
        return newProduct
    }

    //metodo para obtener el id 
    getProductById = async(id) => {
        const products = await this.getProducts()
        const product = products.find(prod=>prod.id === id)
        if (product){
            return product
        }else{
            return 'Product does not exist'
        }
    }


    // Actualizacion de producto
    updateProduct = async(id,obj) =>{
        const products = await this.getProducts()
        const indexProduct = products.findIndex(prod=>prod.id === id)
        if(indexProduct === -1){
            return 'product not found'
        }else{
            const productUpdate = {...products[indexProduct],...obj}
            products.splice(indexProduct,1,productUpdate) 
            await fs.promises.writeFile(this.path,JSON.stringify(products))
        }
    }

    // // Eliminacion de producto 
    deleteProducts = async() =>{
        if(fs.existsSync(this.path)){
            await fs.promises.unlink(this.path)
            return true
        }else{
            return false
        }
    }

    // Eliminacion de producto por id
    deleteProductById = async(id) => {
        const products = await this.getProducts()
        const newArray = products.filter(prod=>prod.id !== id)
        await fs.promises.writeFile(this.path,JSON.stringify(newArray))
    }
}

// Testing Area -- Testing Area -- Testing Area

    // // Producto uno para agregar
    // const product1 = {
    //     title:'producto prueba',
    //     description: 'Este es un producto prueba',
    //     price:200,
    //     thumbnail:'Sin imagen',
    //     code: 'abc123',
    //     stock: 25
    // }

    //     // Producto dos para agregar
    // const product2 = {
    //     title:'producto prueba',
    //     description: 'Este es un producto prueba',
    //     price:200,
    //     thumbnail:'Sin imagen',
    //     code: 'abc123',
    //     stock: 25
    // }

// // Se instancia
async function instance(){
    const productManager = new ProductManager('Products.json');
    // await productManager.addProduct(product1)
    // await productManager.addProduct(product2)
    // const products = await productManager.getProducts()
    // const product5 = await productManager.getProductById(5)
    // await productManager.deleteProductById(3)
    // const product3 = await productManager.getProductById(3)
    // await productManager.deleteProductById(11)
    // await productManager.deleteProductById(8)
    // await productManager.deleteProducts();
    // await productManager.updateProduct(10,{description:'este es un cambio en el producto mediante el metodo update'})
    // const products = await productManager.getProducts()
    // console.log(product5);
    // console.log(product3);
    // console.log(products);
    
}
// instance();

// {
//     "title":"Producto 2",
//     "description": "Prueba para el producto 2",
//     "price":250,
//     "thumbnail":"Sin imagen",
//     "code": "A002",
//     "stock": 20
//   }
//   {
//     "title":"Producto 3",
//     "description": "Prueba para el producto 3",
//     "price":200,
//     "thumbnail":"Sin imagen",
//     "code": "A003",
//     "stock": 35
//   }
//   {
//     "title":"Producto 4",
//     "description": "Prueba para el producto 4",
//     "price":200,
//     "thumbnail":"Sin imagen",
//     "code": "A004",
//     "stock": 30
//   }
//   {
//     "title":"Producto 5",
//     "description": "Prueba para el producto 5",
//     "price":400,
//     "thumbnail":"Sin imagen",
//     "code": "A005",
//     "stock": 3
//   }
//   {
//     "title":"Producto 6",
//     "description": "Prueba para el producto 6",
//     "price":20,
//     "thumbnail":"Sin imagen",
//     "code": "A006",
//     "stock": 300
//   }
//   {
//     "title":"Producto 7",
//     "description": "Prueba para el producto 7",
//     "price":2020,
//     "thumbnail":"Sin imagen",
//     "code": "A007",
//     "stock": 339
//   }
//   {
//     "title":"Producto 8",
//     "description": "Prueba para el producto 8",
//     "price":90,
//     "thumbnail":"Sin imagen",
//     "code": "A008",
//     "stock": 70
//   }
//   {
//     "title":"Producto 9",
//     "description": "Prueba para el producto 9",
//     "price":500,
//     "thumbnail":"Sin imagen",
//     "code": "A009",
//     "stock": 940
//   }
//   {
//     "title":"Producto 10",
//     "description": "Prueba para el producto 10",
//     "price":2,
//     "thumbnail":"Sin imagen",
//     "code": "A010",
//     "stock": 889
//   }
//   {
//     "title":"Producto 11",
//     "description": "Prueba para el producto 11",
//     "price":1500,
//     "thumbnail":"Sin imagen",
//     "code": "A011",
//     "stock": 10
//   }