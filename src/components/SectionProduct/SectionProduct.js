import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./SectionProduct.css";


function cards(products) {
    var components = [];

    for (var indice = 0; indice < products.length; indice++) {
        components.push(<CardProduct name={products[indice].name} price={products[indice].price} image={products[indice].image} />);
    }

    return components;
}

export default (props) => (
    <section className="section-product">
        <h1 className="section-product__title">{props.title}</h1>
        <div className="section-product__cards">
            {cards(props.products)}
        </div>
    </section>
);