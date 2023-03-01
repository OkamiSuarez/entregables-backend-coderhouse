// Se agrega fs para la información 
const fs = require('fs')

const path = 'Products.json'

// Clase
class ProductManager{
    #products
    constructor(path){
        this.#products = [];
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

        // let consoleProduct = console.log(this.#products)
        // return consoleProduct; 
    }

    #generateId = (products) =>{
        // Esto es lo visto en clase
        let id
        if (products.length === 0){
            id = 1
        } else {
            id = products[products.length -1].id +1
        }
        return id
    }

    // Autoincremental se cambia a un creador de usuario
    setProduct = async (product) => {
        const products = await this.getProducts()

        // // esta es la correccion
        // let id = this.#products.length === 0
        // ? 1
        // : this.#products[this.#products.length -1].id +1

        // añadimos la info del id al product
        const id = this.#generateId(products)
        const newProduct = {id,...product}
        products.push(newProduct)
        // se va a sobreescribir
        await fs.promises.writeFile(this.path,JSON.stringify(products))
        return newProduct

        // console.log(this.#products[this.#products.length -1].id +1)

        // A partir de aqui hay que determinar por que se genera el nan a raiz 
        // de que el ultimo id que exista haya sido el eliminado

        // console.log(this.#products[this.#products.length -1].id +1);

        // La respuesta esta arriba, lo que sucede es que en esa linea 
        // Se esta evaluando el -1, pero si ese menos uno es undefined
        // No se puede evaluar con certeza ese valor, por lo que esta
        // Generando un NaN

        // Hay que generar una línea de codigo que tome en cuenta la
        // posibilidad de generar una lectura que no solo impacte en el id
        // Que, basandose en la longitud del array solamente pueda retornar
        // El valor que requerimos 

        //--//--//--//
        // Insertar esa linea aqui 
        //--//--//--//

        // console.log(id);
        // let evaluacion = NaN
        // let evaluacionDos = this.#products[this.#products.length -1]
        // console.log(evaluacionDos);
        // console.log(evaluacionDos === {undefined:undefined});
        // console.log(id === evaluacion);
        // console.log(id === undefined);
        // if (id === NaN){
        //     console.log('hay un NaN estorbando');
        // }else{
        //     console.log('Hay algo diferente que tomar en cuenta');
        // }
        // return id
    }
    
    // // Getter del product code
    // #setProductCode(code){
    //     const getProduct = this.#products.find((product) => product.code === code);
    //     if (getProduct){
    //         throw new Error('assigned code');
    //     }
    //     return code;
    // }

    // Metodo add product
//     addProduct(title,description,price,thumbnail,code,stock){

//     // // Array de product
//     // this.#products.push({
//     //     id: this.#setProductId(),
//     //     title,
//     //     description,
//     //     price,
//     //     thumbnail,
//     //     code: this.#setProductCode(code),
//     //     stock
//     // })
//     // }

    //metodo para obtener el id 
    getProductById = async(id) => {
        const products = await this.getProducts()
        const product = products.find(prod=>prod.id === id)
        if (product){
            return product
        }else{
            return 'Product does not exist'
        }
        // this.#products.find((product) => product.id === id)
        // console.log(this.#products);
        // let gotProducts = console.log(this.#products.find((product) => product.id === id));
        // return gotProducts;
    }

//         // // NUEVO
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
        

        // // Correccion previa
        // let realId = id - 1
        // let updateProduct = this.#products[realId]
        // if (updateProduct === undefined){
        //     console.log('Product does not exist');
        // }else{
        //     const productUpdate = {...updateProduct, ...obj}
        //     this.#products.splice(realId, 1, productUpdate);
        //     console.log('Updated succesfully');    
        // }
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
    // // alterno
    // deleteProduct(id) {
    //     let deletedProduct = this.#products.find((product) => product.id === id)
    //     let arrayPosition = id - 1;
    //     // let product = this.#products[arrayPosition]
    //     // console.log(typeof this.#products[arrayPosition]);
    //     // console.log(Array.isArray(product));
    //     // console.log(product);
    //     // console.log(this.#products);
    //     if(deletedProduct === undefined){
    //         throw new Error(`Product with id ${id} has already been deleted!!!`);
    //         // return console.log(`There's still not a product created with id ${id} !!!`);
    //     }else{
    //         console.log('Deleting...');
    //         this.#products[arrayPosition] = {undefined}
    //         return console.log(`Product with id ${id} has been succesfully deleted`);
    //     }
    // }



    
//     // // Consultar productos
//     // requestProducts = async () => {
//     //     if (fs.existsSync(this.path)){
//     //         const infoProducts = await fs.promises.readFile(this.path, 'utf-8')
//     //         const fileProducts = JSON.parse(infoProducts)
//     //         return fileProducts
//     //     } else {
//     //         console.log('File does not exists');
//     //     }
//     // }

}

// Testing Area
//  Para fines prácticos quitar una línea de 
// comentario a partir de línea 93

    // Producto uno para agregar
    const product1 = {
        title:'producto prueba',
        description: 'Este es un producto prueba',
        price:200,
        thumbnail:'Sin imagen',
        code: 'abc123',
        stock: 25
    }

        // Producto uno para agregar
    const product2 = {
        title:'producto prueba',
        description: 'Este es un producto prueba',
        price:200,
        thumbnail:'Sin imagen',
        code: 'abc123',
        stock: 25
    }

// // Se instancia
async function instance(){
    const productManager = new ProductManager('Products.json');
    // await productManager.setProduct(product1)
    // await productManager.setProduct(product2)
    const products = await productManager.getProducts()
    // const product = await productManager.getProductById(5)
    // await productManager.deleteProductById(3)
    // await productManager.deleteProductById(10)
    // await productManager.deleteProductById(8)
    // await productManager.deleteProducts();
    await productManager.updateProduct(10,{description:'este es un cambio en el producto mediante el metodo update'})
    console.log(products);
}
instance();


// // Se llama a get products para array vacio
// productManager.getProducts();

// // Se agrega producto con su autoincremental ya declarado en el metodo
// productManager.addProduct(
//     'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
//     );

// // Se llama a get products
// productManager.getProducts();

// // Se agrega producto repetido
// productManager.addProduct(
//     'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
//     );

// Se llama a get products
// productManager.getProducts();

// Se agrega producto nuevo

// productManager.addProduct('producto prueba 2','Este es un producto prueba 2',201,'Sin imagen','abc1234',251);
// productManager.getProducts();

// Se agrega producto nuevo
// productManager.addProduct('producto prueba 3','Este es un producto prueba 2',202,'Sin imagen','abc12345',252);
// productManager.getProducts();

// // Se prueba el getProduct
// productManager.getProductById(2);
// productManager.getProductById(4);
// productManager.getProductById(2);
// productManager.getProductById(1);
// productManager.getProductById(0);
// productManager.getProductById(3);
// productManager.getProductById(-1);

// productManager.getProductById(2);
// productManager.deleteProduct(2);
// productManager.getProductById(2);

// productManager.getProductById(1);
// productManager.getProducts();
// productManager.deleteProduct(1);
// productManager.getProductById(1);
// productManager.deleteProduct(1);
// productManager.deleteProduct(1);
// productManager.deleteProduct(1);
// productManager.getProducts();
// productManager.deleteProduct(1);
// productManager.getProductById(1);


// CUANDO DESCOMENTO ESTA LINEA SE GENERA 
// UN ERRROR CON EL ID 
// productManager.deleteProduct(3);
// productManager.getProducts();

// productManager.getProductById(2);
// productManager.deleteProduct();
// productManager.getProductById(1);

// productManager.deleteProduct(2);
// productManager.getProductById(1);
// productManager.getProductById(3);
// productManager.getProductById(2);
// productManager.getProducts();
// productManager.deleteProduct(4);


// productManager.addProduct(
//     'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
//     );
//     productManager.addProduct(
//         'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123456',25
//         );
// productManager.getProducts();

// productManager.updateProduct(4,{price: 505})
// productManager.getProductById(4);
// productManager.updateProduct(4,{title: 'Changed Product'})
// productManager.getProductById(4);

// productManager.getProducts();

// productManager.deleteProduct(1);
// productManager.getProducts();
// productManager.deleteProduct(1);
// productManager.getProducts();


// productManager.getProductById(1);
// productManager.updateProduct(1,{price: 505})
// productManager.getProductById(1);