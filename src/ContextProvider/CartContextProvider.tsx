// @ts-nocheck

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems:[],
  addToCart:(item: any) =>{},
  removeFromCart:(item: any) => {}
});

export const CartContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    if(typeof localStorage !== "undefined"){
      localStorage.setItem("cartList",JSON.stringify(cartItems));
    }
  },[cartItems]);
  let updatedValue = -1;
  let objectIndex = -1;
  const addToCart = (item: any) => {
    setCartItems(prevItems=> {
      if (prevItems.length) {
        for (let j in prevItems) {
          if (prevItems[j]["id"] == item) {
            objectIndex = Number(j);
            const value = prevItems[j]["content"];
            updatedValue = value + 1;
            break;
          }
        }
      }
      if (updatedValue >= 0) {
        return [
          ...prevItems.slice(0, objectIndex),
          { ...prevItems[objectIndex], content: updatedValue },
          ...prevItems.slice(objectIndex + 1),
        ];
      } else {
        updatedValue = -1;
        objectIndex = -1;
        const newObjext = {
          id: item,
          content: 1,
        };
        return [...prevItems, newObjext];
      }
    });
  };

  const removeFromCart = (item: any) => {
    setCartItems((prevItems) => {
      if (prevItems.length) {
        for (let j in prevItems) {
          if (prevItems[j]["id"] == item) {
            objectIndex = Number(j);
            const value = prevItems[j]["content"];
            if(value>0){
              updatedValue = value - 1;
            }
            else{
              updatedValue=0;
            }
            break;
          }
        }
      }
      if (updatedValue >= 0) {
        return [
          ...prevItems.slice(0, objectIndex),
          { ...prevItems[objectIndex], content: updatedValue },
          ...prevItems.slice(objectIndex + 1),
        ];
      }
      else if(updatedValue==0){
        return [
          ...prevItems.slice(0, objectIndex),
          ...prevItems.slice(objectIndex + 1),
        ];
      }
       else {
        updatedValue = -1;
        objectIndex = -1;
        const newObjext = {
          id: item,
          content: 1,
        };
        return [...prevItems, newObjext];
      }
    });

  };
  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
