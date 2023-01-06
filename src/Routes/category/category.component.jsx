import { useParams } from "react-router-dom";

import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(products);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-route-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};
