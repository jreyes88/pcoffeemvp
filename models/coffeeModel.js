var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoffeeSchema = new Schema({
    productName: {
        type: String,
    },
    productImage: {
        type: String,
    },
    productDescription: {
        type: String,
    }
});

var Coffee = mongoose.model('Coffee', CoffeeSchema);
module.exports = Coffee;