import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";


const ProductPage = () => {
  const dispatch = useDispatch();
  const token = 'q7tLVIGkiL9IeH5KRvTNsL6DiHkRTJhWNnwr2YQwN9rCObVcljAUxaMI'
  const fetchProducts = () => {
    fetch("https://api.pexels.com/v1/curated?page=2&per_page=40", {
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        dispatch(setProducts(result.photos))
      })
      .catch(err => console.log(err))


  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
