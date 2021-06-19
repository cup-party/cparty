import { createContext, useContext } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

let cart = [];

let cartLength = 0;

let totalAmount = 0;

function addItem(item, cartOperation) {
    if (cartOperation !== "wait") {
        if (cartOperation === "add") {
            let found = 0;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].item_name === item.item_name) {
                    found = 1;
                    cart[i].item_quantity = cart[i].item_quantity + 1;
                    totalAmount = totalAmount + cart[i].item_price;
                }
            }
            if (found === 0) {
                cart.push(item);
                totalAmount = totalAmount + item.item_price;
            }
        } else if (cartOperation === "remove") {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].item_name === item.item_name) {
                    totalAmount = totalAmount - cart[i].item_price;
                    cart[i].item_quantity = cart[i].item_quantity - 1;
                    if (cart[i].item_quantity === 0) {
                        cart.splice(i, 1);
                    }
                }
            }
        }
        cartLength = cart.length;
    }
}

function logCart(item) {
    console.log("Cart: ", cart, "Length: ", cartLength);
}
function getCartLength() {
    return cartLength
}
function CartContextProvider(props) {

    return (
        <CartContext.Provider value={{ cart, cartLength, totalAmount, getCartLength, addItem, logCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;