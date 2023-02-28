// Clase
class ProductManager{
    #products
    constructor(){
        this.#products = [];
    }

    // Metodo get products
    getProducts(){
        let consoleProduct = console.log(this.#products)
        return consoleProduct; 
    }

    // Autoincremental
    #setProductId(){
        const id = this.#products.length === 0
        ? 1
        : this.#products[this.#products.length -1].id +1
        return id
    }
    
    // Getter del product code
    #setProductCode(code){
        const getProduct = this.#products.find((product) => product.code === code);
        if (getProduct){
            throw new Error('assigned code');
        }
        return code;
    }

    // Metodo add product
    addProduct(title,description,price,thumbnail,code,stock){

    // Array de product
    this.#products.push({
        id: this.#setProductId(),
        title,
        description,
        price,
        thumbnail,
        code: this.#setProductCode(code),
        stock
    })
    }

    //metodo para obtener el id 
    getProductById(id){
        // this.#products.find((product) => product.id === id)
        // console.log(this.#products);
        let gotProducts = console.log(this.#products.find((product) => product.id === id));
        return gotProducts;
    }

        // // NUEVO
    // Actualizacion de producto
    updateProduct(id,obj){
        let realId = id - 1
        let updateProduct = this.#products[realId]
        if (updateProduct === undefined){
            console.log('Product does not exist');
        }else{
            const productUpdate = {...updateProduct, ...obj}
            this.#products.splice(realId, 1, productUpdate);
            console.log('Updated succesfully');    
        }
    }

    // Eliminacion de producto 
    deleteProduct(id){
        let arrayPosition = id - 1;
        // let product = this.#products[arrayPosition]
        // console.log(typeof this.#products[arrayPosition]);
        // console.log(Array.isArray(product));
        // console.log(product);
        // console.log(this.#products);
        if(this.#products[arrayPosition] === undefined){
            throw new Error(`Product with id ${id} has already been deleted!!!`);
            // return console.log(`There's still not a product created with id ${id} !!!`);
        }else{
            console.log('Deleting...');
            this.#products[arrayPosition] = undefined
            return console.log(`Product with id ${id} has been succesfully deleted`);
        }
    }

    // // Consultar productos
    // requestProducts = async () => {
    //     if (fs.existsSync(this.path)){
    //         const infoProducts = await fs.promises.readFile(this.path, 'utf-8')
    //         const fileProducts = JSON.parse(infoProducts)
    //         return fileProducts
    //     } else {
    //         console.log('File does not exists');
    //     }
    // }

}

// Testing Area
//  Para fines prácticos quitar una línea de 
// comentario a partir de línea 93

// // Se instancia
const productManager = new ProductManager();

// // Se llama a get products para array vacio
productManager.getProducts();

// // Se agrega producto con su autoincremental ya declarado en el metodo
productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );

// // Se llama a get products
// productManager.getProducts();

// // Se agrega producto repetido
// productManager.addProduct(
//     'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
//     );

// Se llama a get products
// productManager.getProducts();

// Se agrega producto nuevo

productManager.addProduct('producto prueba 2','Este es un producto prueba 2',201,'Sin imagen','abc1234',251);
// productManager.getProducts();

// Se agrega producto nuevo
productManager.addProduct('producto prueba 3','Este es un producto prueba 2',202,'Sin imagen','abc12345',252);
productManager.getProducts();

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

productManager.getProductById(1);
productManager.getProducts();
productManager.deleteProduct(1);
productManager.getProducts();
// productManager.deleteProduct(1);
productManager.deleteProduct(3);
productManager.getProducts();

// productManager.getProductById(2);
// productManager.deleteProduct();
// productManager.getProductById(1);

// productManager.deleteProduct(2);
// productManager.getProductById(1);
// productManager.getProductById(3);
// productManager.getProductById(2);
// productManager.getProducts();
// productManager.deleteProduct(4);


productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );
productManager.getProducts();

productManager.updateProduct(4,{price: 505})
productManager.getProductById(4);
productManager.updateProduct(4,{title: 'Changed Product'})
productManager.getProductById(4);

productManager.getProducts();

// productManager.deleteProduct(1);
// productManager.getProducts();
// productManager.deleteProduct(1);
// productManager.getProducts();


// productManager.getProductById(1);
// productManager.updateProduct(1,{price: 505})
// productManager.getProductById(1);