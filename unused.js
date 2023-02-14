// class ProductManager{
//     constructor(id,title,description,price,thumbnail,code,stock){
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.thumbnail = thumbnail;
//         this.code = code;
//         this.stock = stock;
//     }
//     getProducts(){
//         // Creo que se tiene que usar map para poder generar el array que me van a pedir al principio 
//         let products = [this.id, this.title, this.description, this.price, this.thumbnail, this.code, this.stock]
//         console.log(products); 
//     }
//     addProduct(title,description,price,thumbnail,code,stock){
//         if (id <= 1) {
//             id++
//         } else {
//             id = 1
//         }
//         console.log(id);
//         // new id = ProductManager(title,description,price,thumbnail,code,stock)
//     }
//     getProductById(id){
//         // Probablemente se tiene que usar el metodo some para poder regresar con un booleano 
//     }
// }

// // ProductManager.getProducts();

// // ProductManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)

// const productManager = new ProductManager();
// // console.log(productManager);

// // productManager.getProducts();


// Segundo código 

// Autoincremental
let id = 1;

// Funcion que genera un autoincremental
function autoincrement() {
    id++;
    return id;
};

// Arrays
const products = [];
const sku = [];

// Clase
class ProductManager{
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    getProducts(){
        console.log(products); 
    }
    addProduct(title,description,price,thumbnail,code,stock){
        products.push(id,title,description,price,thumbnail,code,stock);
        console.log(products.code);
        autoincrement();
        sku.push(code);
    }
    // getProductById(id){
    //     console.log(products[id]); 
    // }
}

// Se instancia
const productManager = new ProductManager();

// Se llama a get products para array vacio
productManager.getProducts();

// Se agrega producto con su autoincremental ya declarado en el metodo
productManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25);

// Se llama a get products
productManager.getProducts();



// Pendiente

productManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25);
// productManager.getProducts();

// for( const product of products){
//     console.log(product.code)
// }

console.log(products.code)
console.log(products[5]);
if (products[5] === 'abc123'){
    console.log('funciona')
}else{
    console.log('no funciona');
}

let evaluacion = products[5,5];
console.log(evaluacion)

let skuCode = sku;
console.log(skuCode);

console.log(stock);
