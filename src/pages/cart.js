import React, { useContext, useState } from "react";
import CartItems from "../Components/cartItems";
import { context } from "../useContext";


function Cart() {
  const { cartContext, emptyCardItems } = useContext(context);
  const [buttonVisiblity, setButtonVisibility] = useState(false);
  const [displayStyle, setDisplayStyle] = useState({ display: "none" });
  const [orderStatus, setOrderStatus] = useState();

  const totalCost = cartContext.length * 5.99;
  const options = {
    style: "currency",
    currency: "Usd",
  };
  const displayTotalCost = (totalCost) => {
    return totalCost.toLocaleString(undefined, options);
  };

  function placeOrder() {
    if (cartContext.length > 0) {
      setDisplayStyle({ display: "block" });
      setOrderStatus("Placing Order...");
      setTimeout(() => {
        setButtonVisibility(false);
        setDisplayStyle({ display: "block" });
        emptyCardItems();
        setOrderStatus("Thank Your for shopping with us.");
      }, 3000);
      setButtonVisibility(true);
    } else {
        setDisplayStyle({ display: "block" });
      setOrderStatus("Your Cart Is Empty");
    }
  }

  const cartImages = cartContext.map((item) => (
    <CartItems item={item} key={item.id} />
  ));

  return (
    <main className="cart-page">
      <h1>Checkout</h1>
      <p style={displayStyle}>{orderStatus}</p>
      {cartImages}

      <p className="total-cost">Total: {displayTotalCost(totalCost)} </p>
      <div className="order-button">
        <button className='place-order-btn' disabled={buttonVisiblity} onClick={() => placeOrder()}>
          Place order{" "}
        </button>
      </div>
    </main>
  );
}

export default Cart;
