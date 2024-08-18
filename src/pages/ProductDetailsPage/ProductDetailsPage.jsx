import React from "react";
import ProducDetailsComponent from "../../components/ProductDetailsComponent/ProducDetailsComponent";

const ProductDetailsPage = () => {
  return (
    <div
      style={{ padding: "0 120px", background: "#efefef", height: "1000px" }}
    >
      <h5>Home</h5>
      <div>
        <ProducDetailsComponent />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
