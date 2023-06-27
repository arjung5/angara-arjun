import ImageComp from "@/components/atoms/ImaageComp/ImageComp";
import { useRouter } from "next/router";
import { prductConfig } from "../../../../_mocks_/product";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { HeaderWrapper, Footer } from "@/components/organisms";
import { CartContext } from "@/ContextProvider";

const ProductDetails = () => {
  let productDeatilsData = {
    id: -1,
    productName: "",
    category: "",
    productDecscUrl: "",
    href: "",
    mrpPrice: "",
    sellPrice: "",
    currency: "",
    details: "",
    navTitle: "",
  };

  const [productData, setProductData] = useState(productDeatilsData);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [showAddToCart, setShowAddToCart] = useState(true);
  const [getLengthOfProduvts, setLengthOfProducts] = useState(0);

  useEffect(() => {
    const foundObject = cartItems.find((obj: any) => {
      return obj.id == id;
    });
    if (foundObject) {
      for (let j of cartItems) {
        if (j["id"] == id) {
          if (foundObject["content"] == 0) {
            setShowAddToCart(true);
          } else {
            setLengthOfProducts(foundObject["content"]);
            setShowAddToCart(false);
          }

          break;
        }
      }
    }
  }, [cartItems]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const { productsList } = prductConfig;
    productsList.forEach((product) => {
      if (Number(id) === product.id) {
        productDeatilsData = product;
      }
    });
    if (productDeatilsData) {
      setProductData(productDeatilsData);
    }
  }, []);

  return (
    <>
      <HeaderWrapper />
      <div className="m-t-30">
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell">
              <div className="">
                <div className="grid-x grid-container m-t-40  ">
                  <div className="cell small-12 align-self-middle">
                    <div className="grid-x grid-margin-x grid-margin-y align-middle">
                      <div className="cell small-12 medium-5  ">
                        <ImageComp
                          imageSrc={productData.productDecscUrl}
                          addClasses="z-depth-2"
                        />
                      </div>
                      <div className="cell small-12 large-offset-1 medium-6 large-6  ">
                        <h3>{productData.productName}</h3>
                        <p className=" m-b-10 m-t-10">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dicta voluptatibus quos ea dolore rem,
                            molestias,Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Dicta voluptatibus quos ea dolore
                            rem, molestiasLorem ipsum dolor sit amet,
                            consectetur adipisicing elit.s
                          </span>
                        </p>
                        <span>
                          <span></span>
                        </span>
                        <span className="m-b-10 bold p-r-5 saleprice inline-block">
                          <span className="uppercase">
                            {productData.currency}{" "}
                          </span>
                          <span>{productData.sellPrice}</span>
                        </span>
                        <span className="m-b-10 bold strike font-size-small mrp inline-block"></span>
                        <div className="button-group m-t-20">
                          <div>
                            {showAddToCart && (
                              <button
                                className="button"
                                onClick={() => {
                                  addToCart(id);
                                }}
                              >
                                Add to cart
                              </button>
                            )}
                            {!showAddToCart && (
                              <>
                                <button
                                  className="button"
                                  onClick={() => {
                                    removeFromCart(id);
                                  }}
                                >
                                  -
                                </button>
                                <span className="m-r-10 m-l-20-negative">
                                  {getLengthOfProduvts}
                                </span>
                                <button
                                  className="button"
                                  onClick={() => {
                                    addToCart(id);
                                  }}
                                >
                                  +
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="cell small-12  ">
                        <div className="m-b-30 medium-m-b-50">
                          <p>
                            <div>
                              <h3 className="bold">Description</h3>
                              <div className="m-t-20">
                                <p>
                                  Double click to add your content and make
                                  changes. It is a place to describe the feature
                                  or business value of your product or service.
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industrys standard dummy text
                                  ever since the 1500s, unknown printer took a
                                  galley of type and scrambled it to make a type
                                  specimen book.
                                </p>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      {/* build rate functionality */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default React.memo(ProductDetails);
