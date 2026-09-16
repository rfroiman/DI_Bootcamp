const products = require("./products");

function findProduct(productName) {
    const product = products.find(
        product => product.name === productName
    );

    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}

findProduct("Laptop");
findProduct("Phone");
findProduct("Shoes");