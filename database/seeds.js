const faker = require('faker');
const ProductModel = require('./models/product_model');
const mongoose = require('mongoose');
// Mongoose Connection
mongoose.connect("mongodb://localhost/fakebae", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));



let productPromises = [];

for(let i = 0 ; i < 50; i++) {
    console.log(`${i}`);
    productPromises.push(ProductModel.create({
        name: faker.commerce.productName(),
        categories: [faker.commerce.department(),faker.commerce.department()],
        price: 1
    }));
}

Promise.all(productPromises)
    .then(() => {
        console.log("seeds completed")
        mongoose.connection.close();
    })
    .catch(console.log);