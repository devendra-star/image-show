import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products, "products");
  const renderList = products.map((product) => {
    const { id, photographer, src, photographer_id, height, width, photographer_url } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={src.large} alt={photographer} width={width} height={height} />
              </div>
              <div className="content">
                <div className="header">{photographer}</div>
                <div className="meta price"># {photographer_id}</div>
                <div className="meta">{height}</div>
                <div className="meta">{width}</div>
                <div className="meta">{photographer_url}</div>

              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
