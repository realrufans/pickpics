import React, { useContext } from "react";
import { context } from "../useContext";
import useHover from "../Hooks/useHover";

export default function CartItems({ item }) {
  const { removeFromCart } = useContext(context);
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => removeFromCart(item.id)}
        className={iconClassName}
      ></i>

      <img className="checkout-img" src={item.url} alt={""} />
      <p>$ 5.99</p>
    </div>
  );
}
