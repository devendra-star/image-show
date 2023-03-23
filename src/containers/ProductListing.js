import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";


const ProductPage = () => {
  const [query, setQuery] = useState("ocean")
  const dispatch = useDispatch();
  const token = 'q7tLVIGkiL9IeH5KRvTNsL6DiHkRTJhWNnwr2YQwN9rCObVcljAUxaMI'
  const fetchProducts = () => {
    fetch(`https://api.pexels.com/v1/search?page=2&per_page=40&query=${query}`, {
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

  function hendleClick(e) {
    if (e.keyCode === 13) {
      fetchProducts();
    }

  }

  // console.log("Products :", products);
  return (
    <>
      <div className="main">
        <input type="text" height="100%" width="100%"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="serach image..."
          onKeyDown={hendleClick}
        />
      </div>

      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductPage;
