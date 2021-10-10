import { React, useContext } from "react";
import { context } from "../useContext";
import Proptype from "prop-types";
import useHover from '../Hooks/useHover'
function Image({ className, img }) {
  const [hovered, ref]= useHover();

  const { togglefavorite, addToCart, cartContext, removeFromCart } = useContext(context);

  function addedToCard() {
    const isInCart = cartContext.some((e) => e.id === img.id);
    console.log(isInCart)
    if (isInCart) {
      return <i  onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>;
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => {
            addToCart(img.id);
          }}
        ></i>
      );
    }
  }

  function hoveredFn() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => togglefavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => togglefavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
       ref={ref}
    >
      <img src={img.url} alt='' className="image-grid" />

      {hoveredFn()}
      {addedToCard()}
    </div>
  );
}

Image.Proptype = {
  className: Proptype.string,
  img: Proptype.shape({
    url: Proptype.string.isRequired,
    id: Proptype.string.isRequired,
    isFavorite: Proptype.bool,
  }),
};

export default Image;
