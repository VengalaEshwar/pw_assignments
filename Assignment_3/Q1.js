totalPrice = (list) => {
    let sum=0;
  list.forEach((row) => {sum+=row.price});
  return sum;
}
const ordersList = [
    { name : "Laptop", price : 120000},
    { name : "Mobile", price : 70000},
    { name : "Mobile Charger", price : 1500},
    { name : "Laptop Charger",price : 10500}
]
console.log(totalPrice(ordersList));