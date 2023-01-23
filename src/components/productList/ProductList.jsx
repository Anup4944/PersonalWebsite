import React from "react";
import Product from "../product/Product";
import "./productlist.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <>
      <div className="pl" id="projects">
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire. It's Anup</h1>
        </div>

        <div className="pl-list">
          {products.map((item) => {
            return (
              <Product
                key={item.id}
                img={item.img}
                link={item.link}
                title={item.title}
                desc={item.desc}
                github={item.gitLink}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
