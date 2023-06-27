// @ts-nocheck

import { useEffect, useState } from "react";
import { prductConfig } from "../../../../_mocks_/product";
import ImageComp from "@/components/atoms/ImaageComp/ImageComp";
import React from "react";
import { HeaderWrapper, Footer } from "@/components/organisms";
import Link from "next/link";

const ShoppingCart = () => {
  const [listItems, setList] = useState([]);
  const { productsList } = prductConfig;
  const [cartList, setCartList] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  useEffect(() => {
    const tempArray: {
      id: number;
      productName: string;
      category: string;
      productDecscUrl: string;
      href: string;
      mrpPrice: string;
      sellPrice: string;
      currency: string;
      details: string;
      navTitle: string;
    }[] = [];
    if (typeof localStorage !== undefined) {
      let cartItems = localStorage.getItem("cartList");
      let cartItem: never[] = JSON.parse(cartItems as string);
      setItemCount([...cartItem]);
      cartItem?.map((item: any) => {
        if (item.id && !tempArray.includes(item.id)) {
          tempArray.push(productsList[Number(item.id) - 1]);
        }
      });
      setList([...tempArray]);
    }
  }, []);

  const renderCartProducts = () => {
    return listItems?.map((cart) => {
      const {
        id,
        productName,
        productDecscUrl,
        mrpPrice,
        sellPrice,
        currency,
      } = cart;

      function findNumberOfObjects(id: any) {
        let countValue = 1;
        for (let obj of itemCount) {
          if (Number(obj["id"]) == id) {
            countValue = obj["content"];
            break;
          }
        }
        return countValue;
      }
      return (
        <div
          key={productName}
          className="grid-x grid-padding-y grid-padding-x m-b-30 light  z-depth-2 align-middle "
        >
          <div className="cell small-12 medium-3 large-3">
            <ImageComp imageSrc={productDecscUrl} />
          </div>
          <div className="cell small-12 medium-7 large-4">
            <h3>{productName}</h3>
            <span className="m-b-10 bold p-r-5 saleprice inline-block">
              <span className="uppercase">{currency} </span>
              <span>{sellPrice}</span>
            </span>
            <span className="m-b-10 bold strike font-size-small mrp inline-block">
              <span className="uppercase">{currency} </span>
              <span>{mrpPrice}</span>
            </span>
            <div></div>
          </div>
          <div className="cell small-12 medium-2 large-4 button-group">
            <span className="m-r-10">
              Product Count: {findNumberOfObjects(id)}
            </span>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    const listOfProducts = renderCartProducts();
    setCartList(listOfProducts as []);
  }, [listItems]);

  return (
    <>
      <HeaderWrapper />
      {!listItems.length && (
        <h2 className="m-l-80 m-b-80 p-t-30 p-b-80">
          Please add some products from <Link href="/">Home Page</Link>
        </h2>
      )}
      {listItems.length && (
        <div className="m-b-80 p-t-30 p-b-80">
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell">
                <div className="grid-x grid-margin-x grid-margin-y">
                  <div className="cell small-12 text-center medium-text-left">
                    <h2 className="bold  m-b-0">Shopping Cart</h2>
                  </div>
                  <div className="cell small-12">
                    <div className="grid-x grid-margin-x">
                      {/* have to add price column */}
                      
                      <div className="cell small-12 large-7 small-order-1 large-order-1">
                        {renderCartProducts()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default ShoppingCart;
