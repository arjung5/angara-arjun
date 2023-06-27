import { useEffect, useState } from "react";
import { prductConfig } from "../../../../_mocks_/product";
import MediaWithContent from "@/components/moleclues/MediaWithContent/MediaWithContent";
import Link from "next/link";

const ProductsList = () => {
  const { subTitle, title, productsList } = prductConfig;
  const [productList, setpProductList] = useState([]);
  const [productCount, setProductCount] = useState(3);

  const handleViewDetailClick = (id: number, e: any) => {
    e.preventDeafult();
    // const data = { message: { id }.toString() };
    // const queryParams = new URLSearchParams(data).toString();
    window.location.href = "/product-details";
  };

  const renderProducts = () =>
    productsList?.map((productData, index) => {
      const {
        id,
        category,
        productDecscUrl,
        href,
        mrpPrice,
        sellPrice,
        currency,
        details,
        productName,
      } = productData;
      if (id > productCount) {
        return;
      }
      const data = { message: { id }.toString() };
      const queryParams = new URLSearchParams(data).toString();
      return (
        <div
          key={id}
          className="cell small-12 medium-6 large-4 m-b-30 large-m-b-50 light"
        >
          <a style={{ color: "inherit" }} href={href}>
            <div className="grid-x">
              <div className="cell small-12 medium-12 large-12">
                <MediaWithContent
                  media={{
                    type: "image",
                    imageSrc: productDecscUrl,
                    altText: productName,
                  }}
                >
                  <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12 text-center b-1x b-light-gray hvr-sweep-to-top">
                      <h5 className="fg-dark-gray m-t-40">{productName}</h5>
                      <h3 className="bold m-t-10">{category}</h3>
                      <span>
                        <span> </span>
                      </span>
                      <span className="m-b-20 bold p-r-5 saleprice">
                        <span className="uppercase">{currency} </span>
                        <span>{sellPrice}</span>
                      </span>
                      <span className="m-b-20 bold strike font-size-small mrp">
                        <span className="uppercase">{currency} </span>
                        <span>{mrpPrice}</span>
                      </span>
                      <div className="grid-x">
                        <div className="cell large-10 large-offset-1 m-t-20 m-b-30">
                        {/* onClick={(e: any) => handleViewDetailClick(id, e)} */}
                          <Link
                            className="bold button light-gray expanded"
                            href={`/product-details?id=${id}`}                            
                          >
                            {details}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </MediaWithContent>
              </div>
            </div>
          </a>
        </div>
      );
    });

  useEffect(() => {
    const listOfProducts = renderProducts();
    setpProductList(listOfProducts as []);
  }, [productCount]);

  const loadMoreProducts = (value: string) => {
    if (value === "reset") {
      setProductCount(3);
      setpProductList([]);
    } else {
      setProductCount((prevCount) => prevCount + 3);
    }
  };

  return (
    <div className="m-t-60 large-m-b-80 m-b-40">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell">
            <div className="grid-x">
              <div className="cell small-12 medium-12 large-6 large-offset-3 text-center">
                <h6 className="bold fg-prmiary m-b-0">{subTitle}</h6>
                <h2 className="m-b-40 bold">{title}</h2>
              </div>
              <div className="grid-x grid-margin-x">{productList}</div>
              {productList.length - productCount > 0 ? (
                <a
                  className="button hvr-bubble-top"
                  onClick={() => loadMoreProducts("")}
                >
                  Load {productsList.length - productCount} More Product
                </a>
              ) : (
                <a
                  className="button hvr-bubble-top"
                  onClick={() => loadMoreProducts("reset")}
                >
                  Reset
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
