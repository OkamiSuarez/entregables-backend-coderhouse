// Clase
class ProductManager{
    constructor(){
        this.products = [];
        this.skus = [];
    }
    getProducts(){
        // console.log(products);
        return console.log(this.products)
    }
    
    addProduct(title,description,price,thumbnail,code,stock){

    // Auoincremental
        const id =
            this.products.length === 0
            ? 1
            : this.products[this.products.length -1].id +1

    // Prototipo de evaluacion
        this.skus[0] === undefined
        ? console.log('array is empty')
        : console.log('array has something');

        // let skus_code = 
        // // Puedo poner que si es un array vacio entonces que pase algo 
        // this.skus[id - 1].code === undefined
        // // ? skus_code = false
        // ? console.log('This is true')
        // // : console.log(this.skus.some((sku) => sku.code === skus_code));
        // : console.log('This is false')

        // console.log(skus_code);

    // array de skus
        const sku = {
            id,
            code
        }

    // Push al array
        this.skus.push(sku)
    
    // // Evaluacion de duplicidad
    //     const skus_code = this.skus[id - 1].code
    //     console.log(this.skus.some((sku) => sku.code === skus_code))
    //     console.log(skus_code);

    //     const duplicado = this.skus.find((sku) => sku.code === code)
    //     console.log("duplicado")
    //     console.log(duplicado + 'error')

    // Array de product
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }

    getProductById(id){
        const identifier = this.products[id - 1]
        console.log(identifier);

        // this.products.find((prod) => prod.code != )
        // return console.log(this.products.id === id)
        // return console.log(this.products[this.products.find((producto) => producto === id)])
    }
}

// Se instancia
const productManager = new ProductManager();

// Se llama a get products para array vacio
productManager.getProducts();

// Se agrega producto con su autoincremental ya declarado en el metodo
productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );

// Se llama a get products
productManager.getProducts();



// Pendiente

productManager.addProduct('producto prueba 2','Este es un producto prueba 2',201,'Sin imagen','abc1234',251);
productManager.getProducts();

// productManager.getProductById(1);
// productManager.getProductById(2);
// productManager.getProductById(2);
// productManager.getProductById(1);
// productManager.getProductById(3);