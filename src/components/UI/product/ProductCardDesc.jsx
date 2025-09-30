import React from "react";
import cl from './Product.module.css';


const ProductCardDesc = ({name, value}) => {
    return(
        <div className={cl.product__cards__item__desc}>
            <div className={cl.product__cards__item__desc__name}>{name}</div>

            <div className={cl.product__cards__item__desc__value}>{value}</div>
        </div>
    )
}


export default ProductCardDesc;