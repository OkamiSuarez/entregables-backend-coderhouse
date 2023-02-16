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
    // Prototipo de evaluacion
    if (this.skus[0] === undefined){
        // console.log(this.skus);
        // console.log(this.products);
        console.log('array is empty')


        // Push a skus
            this.skus.push(sku)
        // Push a products
            this.products.push(product)

        // console.log(this.skus);
        // console.log(this.products);
        console.log('array is now added')
        
    }else {
        console.log('array has something')

        // console.log(this.skus.every((sku, index)=>{
        //     console.log(index)
        //     return console.log(sku);
        // }));

        console.log('Para borrar pero evaluar');
                // Push a skus
                this.skus.push(sku)
                // Push a products
                    this.products.push(product)
        console.log('evaluacion fin');

        let newCode = code;
        console.log(newCode);
        let evaluador = this.skus
        console.log(this.skus);
        console.log(evaluador);
        console.log(this.skus[0]);
        console.log(evaluador[0]);
        console.log(this.skus[1]);

        console.log('Evaluacion de entrar al array code');
        console.log(this.skus[1].code);

        console.log('Evaluacion alternativa');
        // Otra forma de imprimirlos
        for (let i = 0; i < evaluador.length; i++){
            console.log (evaluador[i])
        }
        for (let i = 0; i < evaluador.length; i++){
            console.log (evaluador[i].code)
        }
        for (let i = 0; i < evaluador.length -1; i++){

            console.log ('Prueba de evaluacion' + [i])
            if(newCode != evaluador[i].code){
                console.log(newCode + ' codigo nuevo');
                console.log(evaluador[i].code);
                console.log('no hay repeticion')
            }else{
                console.log(newCode + ' codigo nuevo');
                console.log(evaluador[i].code);
                console.log('hay repeticion');
                console.log('Repeated code, please verify info');
            }

        }
        // Si cualquier codigo que existe en la variable temporal
        // coincide con esta iteración, devuelve un true

        console.log('Evaluacion finalizada');

        // console.log(this.skus.every((index)=>{
        //     // console.log(index)
        //     return index;
        // }));
        // console.log(this.skus[sku.code]); 
    }
    
    // // Evaluacion de duplicidad
    //     const skus_code = this.skus[id - 1].code
    //     console.log(this.skus.some((sku) => sku.code === skus_code))
    //     console.log(skus_code);

    //     const duplicado = this.skus.find((sku) => sku.code === code)
    //     console.log("duplicado")
    //     console.log(duplicado + 'error')



    }

    getProductById(id){
        return (console.log(this.products[id - 1]))
        // const identifier = this.products[id - 1]
        // console.log(identifier);

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

productManager.addProduct('producto prueba 3','Este es un producto prueba 2',202,'Sin imagen','abc12345',252);
productManager.getProducts();

// productManager.getProductById(1);
// productManager.getProductById(2);
// productManager.getProductById(2);
// productManager.getProductById(1);
// productManager.getProductById(3);