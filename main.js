// Clase
class ProductManager{
    constructor(){
        this.products = [];
        this.skus = []
    }
    getProducts(){
        // console.log(products);
        return console.log(this.products)
    }
    
    addProduct(title,description,price,thumbnail,code,stock){

        const id =
            this.products.length === 0
            ? 1
            : this.products[this.products.length -1].id +1

        const sku = {
            id,
            code
        }
        this.skus.push(sku)
        // console.log('skuCode');
        console.log(this.skus);
        // console.log(this.skus.code)
        // Me quede aqui, falta determinar como encontrar ese valor

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
productManager.getProducts();


// console.log(products.code)
// console.log(products[5]);
// if (products[5] === 'abc123'){
//     console.log('funciona')
// }else{
//     console.log('no funciona');
// }

// let evaluacion = products[5,5];
// console.log(evaluacion)

// let skuCode = sku;
// console.log(skuCode);

// console.log(stock);
// console.log(products);