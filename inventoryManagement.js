// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct() {
  console.log(products[0])
}
console.log(products[0])

function addProduct(equipment){
  products.push(equipment);
}
let equipment = addProduct("mouse")
console.log(products)

function updateProductName(){
  products[1] = "Smartphone";
}
updateProductName()
console.log(products)

function removeLastProduct(){
  products.pop();
}
removeLastProduct()
console.log(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
