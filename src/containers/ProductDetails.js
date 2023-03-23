import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const [data, setData] = useState()
  console.log(data, "data");
  const { productId } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const newdata = products?.filter((item) => item.id === Number(productId))
    setData(newdata)
  }, [productId])


  const renderList = data?.map((product) => {
    const { id, photographer, src, photographer_id, height, width, photographer_url } = product;

    return (
      <div className="ui grid container">
        {Object.keys(products).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={src.large} width={width} height={height} />
                </div>
                <div className="column rp">
                  <h1>{photographer}</h1>
                  <h2>
                    <a className="ui teal tag label">${photographer_id}</a>
                  </h2>
                  <a href={photographer_url}>{photographer_url}</a>
                  <p>{width}</p>
                  <p>{height}</p>
                  <button onClick={() => navigate('/')}>Go Back Home</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductDetails;
