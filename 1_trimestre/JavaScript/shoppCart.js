const shoppingCart = [];
 
function addItemToCart(item) {
	shoppingCart.push(item);
};

function removeItemToCard(item) {
	const isItemExist = shoppingCart.indexOf(item);
	if (isItemExist !== -1) {
		shoppingCart.splice(isItemExist, 1);
	}
};

function viewCart() {
	if (shoppingCart.length === 0) {
		console.log("Your shopping cart is empty")
	} else {
		console.log("Itens in yout shopping cart")
		for (let i = 0;i < shoppingCart.length;i++) {
			console.log(`${i + 1} - ${shoppingCart[i]}`);
		}
	};
};

function cleanCart() {
	shoppingCart.length = 0;
	console.log("Your shopping cart has been cleared");
}

addItemToCart("PC");
addItemToCart("Mouse");

viewCart();

removeItemToCard("Mouse");
viewCart();

cleanCart();
viewCart();

