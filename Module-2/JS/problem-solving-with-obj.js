// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];

let totalItems = 0;
let totalBill = 0;
for (let item of cart) {
  const itemPrice = item.price * item.quantity;
  totalBill += itemPrice;
  totalItems += item.quantity;
}
console.log(`Total Bill ${totalBill} BDT, And Total Items ${totalItems}`);
