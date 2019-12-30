function ShoppingCart() {
    var count = 4;
    var items = [{
        id:1,
        name:'Laptop',
        price:57000,
        quantity:5
    },{
        id:2,
        name:'i5Processor',
        price:15000,
        quantity:7
    },{
        id:3,
        name:'Airpod',
        price:17000,
        quantity:10
    },{
        id:4,
        name:'iPhone',
        price:85000,
        quantity:2
    }
];
function addToCart(item) {
    items.unshift(item);
}
function removeFromCart(item) {
    items.shift();
}
function getItems() {
    return items;
}
return {
    add : addToCart,
    remove : removeFromCart,
    allItems : getItems
}
}
var sc = new ShoppingCart;
sc.add({
    id:5,
    name:'iWatch',
    price:7000,
    quantity:4
});
console.log(sc.allItems());
sc.remove({
    id:5,
    name:'iWatch',
    price:7000,
    quantity:4
});
console.log(sc.allItems());