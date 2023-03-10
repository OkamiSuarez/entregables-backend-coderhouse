// Clase
class ProductManager{
    #products
    constructor(){
        this.#products = [];
    }

    // Metodo get products
    getProducts(){
        // Si no retorno el console log al llamar la funcion
        // No aparece nada, entonces por que no mejor declararlo asi
        let consoleProduct = console.log(this.#products)
        return consoleProduct; 
    }

    // Autoincremental
    #setProductId(){
        return this.#products.length === 0
        ? 1
        : this.#products[this.#products.length -1].id +1
    }
    
    // Getter del product code
    #setProductCode(code){
        // Donde usamos el get product que guardamos en const?
        // Creo que aquí se genera un error por que esta escrito
        // Como product y no como products
        const getProduct = this.#products.find((product) => product.code === code);
        // ¿Que es throw?
        // Como funciona el new error?
        // ¿Por que usamos product en el if si declaramos getProduct?
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
        // Misma situacion aqui para poder devolver algo a la consola
        let gotProducts = console.log(this.#products.find((product) => product.id === id));
        return gotProducts;
    }
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
productManager.getProductById(2);
productManager.getProductById(4);
productManager.getProductById(2);
productManager.getProductById(1);
productManager.getProductById(0);
productManager.getProductById(3);
productManager.getProductById(-1);