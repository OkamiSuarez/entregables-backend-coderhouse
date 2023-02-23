// Clase
class ProductManager{
    constructor(){
        this.products = [];
        this.skus = [];
    }
    getProducts(){
        return console.log(this.products)
    }
    
    addProduct(title,description,price,thumbnail,code,stock){

    // Auoincremental
        const id =
            this.products.length === 0
            ? 1
            : this.products[this.products.length -1].id +1

    // array de sku
        const sku = {
            id,
            code
        }

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

    // Evaluacion de codigos
    if (this.skus[0] === undefined){
        // Push a skus
            this.skus.push(sku)
        // Push a products
            this.products.push(product)
        console.log('Products added');
        }else {
        // array has something
        // Para evaluar dejo que entre al array
        // Push a skus
            this.skus.push(sku)
        // Push a products
            this.products.push(product)
        
        // Declaramos variables para
        // Evaluar la repeticion de codigo
        let newCode = code;
        let evaluador = this.skus

        // Iteramos para evaluar
        for (let i = 0; i < evaluador.length -1; i++){
            // console.log ('Prueba de evaluacion' + [i])
            if(newCode != evaluador[i].code){
                // console.log(newCode + ' codigo nuevo');
                // console.log(evaluador[i].code + ' Codigo ya en el array');
                // console.log(`${evaluador.length} Products in stock`);
                return console.log('Products added');
            }else{
                // console.log(newCode + ' codigo nuevo');
                // console.log(evaluador[i].code + ' codigo ya existente');
                // console.log('hay repeticion');
                // // se hace el pop a los arrays
                this.skus.pop(sku)
                // // pop a products
                this.products.pop(product)
                return console.log('Repeated code, please verify info');
                }
            }
        }
    }

    //metodo para obtener el id 
    getProductById(id){
        if(this.products[id - 1] === undefined){
            return console.log(`There's still not a product created with id ${id} or it has been deleted`);
        }else{
            console.log(`Showing products from id ${id}`);
            return (console.log(this.products[id - 1]))
        }
    }

    // // NUEVO
    // Actualizacion de producto
    updateProduct(id,property,newValue){
        let updateProduct = this.products[id - 1]
        // let propertyName = property.toString();
        // console.log(propertyName);
        console.log(`property to change is ${property}`);
        console.log(`Value to update is ${newValue}`);
        // console.log(updateProduct.property);
        console.log(updateProduct.code);
    }

    // Eliminacion de producto 
    deleteProduct(id){
        let arrayPosition = id - 1;
        // console.log('la posicion en el array es ' + arrayPosition);
        if(this.products[arrayPosition] === undefined){
            return console.log(`There's still not a product created with id ${id} !!!`);
        }else{
            console.log('Deleting...');
            this.products[arrayPosition] = undefined
            this.skus[arrayPosition] = undefined
            return console.log(`Product with id ${id} has been succesfully deleted`);
        }
    }
}

// Testing Area
//  Para fines prácticos quitar una línea de 
// comentario a partir de línea 93

// Se instancia
const productManager = new ProductManager();

// // Se llama a get products para array vacio
// productManager.getProducts();

// Se agrega producto con su autoincremental ya declarado en el metodo
productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );

// // Se llama a get products
// productManager.getProducts();

// Se agrega producto repetido
productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );

// // Se llama a get products
// productManager.getProducts();

// Se agrega producto nuevo

productManager.addProduct('producto prueba 2','Este es un producto prueba 2',201,'Sin imagen','abc1234',251);
// productManager.getProducts();

// Se agrega producto nuevo
productManager.addProduct('producto prueba 3','Este es un producto prueba 2',202,'Sin imagen','abc12345',252);
// productManager.getProducts();

// // Se prueba el getProduct
// productManager.getProductById(2);
// productManager.getProductById(4);
// productManager.getProductById(2);
// productManager.getProductById(1);
// productManager.getProductById(0);
// productManager.getProductById(3);
// productManager.getProductById(-1);

// Siguiente entrega

// --se debe devolver el get product como un OJBETO 
// --Por lo tanto ojo en el json string y json parse 


// -- Lo primero que voy a hacer es crear el codigo normal
// -- a partir de ese punto empiezo a trabajar con los fs

productManager.getProductById(1);
productManager.deleteProduct(1);
productManager.getProductById(1);
productManager.getProductById(2);

productManager.addProduct(
    'producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25
    );
productManager.getProductById(1);

productManager.getProductById(3);

productManager.updateProduct(3, 'code', '123abfd');
// productManager.deleteProduct(2);
// productManager.deleteProduct(3);