import React, { useState, useEffect } from "react";

const context = React.createContext() 

function ContextProvider(props) {
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    const fectPhotos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.log(err);
      }
    };
    fectPhotos();
  }, []);

  const [photos, setPhotos] = useState([]);
  const [cartContext, setCartContext] = useState([]);

  function togglefavorite(id) {
    const newPhotoArray = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotoArray);
  }

  function addToCart(id) {
    photos.map((photo) => {
      if (photo.id === id) {
        setCartContext(prvItem => [...prvItem, photo]);
      }
      return photo;
    });
   
  }

  function emptyCardItems(){
    setCartContext([])
  }


  function removeFromCart(id) {
    photos.map((photo) => {
      if (photo.id === id) {

        setCartContext(prvItem => {
          return prvItem.filter(item => item!==photo)
        });
      }
      return photo;
    });
  }
   
 
   return (
    <context.Provider
      value={{
        photos: photos,
        togglefavorite: togglefavorite,
        addToCart: addToCart,
        cartContext: cartContext,
        removeFromCart: removeFromCart,
        emptyCardItems: emptyCardItems
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider }
