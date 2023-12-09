const ProductController = require("../controllers/Product.controller");


module.exports = app => {
    //ALL PRODUCTS
    app.get("/api/products", ProductController.findAllProducts);
    //NEW PRODUCT
    app.post("/api/products", ProductController.createNewProduct);
    //ONE PRODUCT
    app.get("/api/products/:id", ProductController.findOneProduct);
    //UPDATE PRODUCT
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    //DELETE PRODUCT
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);

}