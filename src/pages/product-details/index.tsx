import dynamic from "next/dynamic";

const ProductDeatilsPage = dynamic(
  () => import("@/components/moleclues/ProductDetails/ProductDetails"),
  {
    ssr: false,
  }
);

export default ProductDeatilsPage;
