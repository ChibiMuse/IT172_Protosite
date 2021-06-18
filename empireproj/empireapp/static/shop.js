/*   --- Javascript code for the function Shopping Cart at Empire Espresso Page
Code was modified for this site from tutorial by WebDevSimplified "JavaScript Shopping Cart Tutorial for Beginners"
Modifications by: Megan Smith
Last modified: 6/18/21

Functions in this code:
    - ready
    - removeCartItem
    - quantityChanged
    - updateCartTotal



*/

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

// ready finds all buttons and elements needed for functions below. It is run only after document is loaded.

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('remove-item');
    for (var i=0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('quantity-input')
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
}

// RemoveCartItem Removes items from cart when Remove button is clicked

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

// QuantityChanged listens for the quantity value changes, ensures validity, and updates cart total w/ each change

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value)|| input.value <= 0) { // sets input values that aren't a number or are less than 0 to 1 automatically.
        input.value = 1;
    }
    input.value = Math.round(input.value);  // Ensures only whole numbers for qty. (You can't order half an item)
    updateCartTotal();
}

function updateCartTotal(){
    var cartItemsContainer = document.getElementsByClassName('shopping-cart-items')[0]
    var cartRows = cartItemsContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('price')[0];
        var quantityElement = cartRow.getElementsByClassName('quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
                
    }
    document.getElementsByClassName('total-price')[0].innerText = '$'+ total;
}