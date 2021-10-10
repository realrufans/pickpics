import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../useContext";

export default function Header() {
  const { cartContext } = useContext(context);

  const c = <span value={cartContext}></span> 
 
   console.log(c.props.value.length)

    

  function renderCarticon(){
  return c.props.value.length>0 ? (
      <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    ) : (
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    );
  }

  return (
    <header className="App-header">
      <Link to={process.env.PUBLIC_URL + '/'}>
        <h2>Pic Some</h2>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/cart'}>
        <div className="cart-icon"><span className='cartcount'>{c.props.value.length>0?c.props.value.length:'' }</span>{renderCarticon()}</div>
      </Link>
    </header>
  );
}
