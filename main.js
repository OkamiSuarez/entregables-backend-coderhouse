class ProductManager{
    constructor(id,title,description,price,thumbnail,code,stock){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    getProducts(){
        // Creo que se tiene que usar map para poder generar el array que me van a pedir al principio 
        console.log(); 
    }
    addProduct(title,description,price,thumbnail,code,stock){
        let id = 0
        if (id <= 1) {
            id++
        } else {
            id = 1
        }
        console.log(id);
        // new id = ProductManager(title,description,price,thumbnail,code,stock)
    }
    getProductById(id){
        // Probablemente se tiene que usar el metodo some para poder regresar con un booleano 
    }
}

// ProductManager.getProducts();

// ProductManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)

const productManager = new ProductManager();
console.log(productManager);