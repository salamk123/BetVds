import React from "react";
import cl from './Product.module.css'
import ProductCardDesc from "./ProductCardDesc";

const ProductCard = ({titleImg, desc, days, cost, btnImg}) => {
    return(
        <div className={cl.product__cards__item}>
            <div className={cl.product__cards__item__title}>
                <img src={titleImg} className={cl.product__cards__item__title__img}/>

                <div className={cl.product__cards__item__title__txt}>VDS</div>
            </div>

            <div className={cl.product__cards__item__line}></div>

            {desc.map(d => 
                <ProductCardDesc key={d.descValue} name={d.descName} value={d.descValue}/>
            )}
            
            <div className={cl.product__cards__item__line}></div>

            <div className={cl.product__cards__item__days}>{days}</div>

            <div className={cl.product__cards__item__cost}>{cost}</div>

            <button className={cl.product__cards__item__btn}>
                <img src={btnImg} className={cl.product__cards__item__btn__img}/>

                <div className={cl.product__cards__item__btn__txt}>Заказать</div>
            </button>
        </div>
    )
}

export default ProductCard