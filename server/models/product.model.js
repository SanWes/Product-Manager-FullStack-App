const mongoose = require('mongoose');
 

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Title is required!"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required:[true, "Can't Give it for free you know!? Price is required!"]
    },
    description: {
        type: String,
        required: [true, "Describe the item "],
        minlength: [6, "Description must be at least 6 characters long"]
    },
    
})

//register the above code at a table in mongodb
const Product = mongoose.model("Product", ProductSchema )

module.exports = Product;