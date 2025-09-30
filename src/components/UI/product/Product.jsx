import React, { useState } from "react";
import cl from './Product.module.css'
import server from '../../img/product_server.png';
import cart from '../../img/product_cart.png';
import ProductCard from "./ProductCard";

const Product = () => {
    const [cards, setCards] = useState([
        {
            titleImg: server, 
            desc: [
                {descName: 'RAM', descValue: '8 GB'},
                {descName: 'SSD Space', descValue: '30 GB'},
                {descName: 'CPU Cores', descValue: '2'},
                {descName: 'Bandwidth', descValue: '1 TB'},
                {descName: 'Control Panel', descValue: 'Full'},
            ],
            days: "7 день", 
            cost: "400₽", 
            btnImg: cart
        },
        {
            titleImg: server, 
            desc: [
                {descName: 'RAM', descValue: '8 GB'},
                {descName: 'SSD Space', descValue: '30 GB'},
                {descName: 'CPU Cores', descValue: '2'},
                {descName: 'Bandwidth', descValue: '1 TB'},
                {descName: 'Control Panel', descValue: 'Full'},
            ],
            days: "14 дней", 
            cost: "770₽", 
            btnImg: cart
        },
        {
            titleImg: server, 
            desc: [
                {descName: 'RAM', descValue: '8 GB'},
                {descName: 'SSD Space', descValue: '30 GB'},
                {descName: 'CPU Cores', descValue: '2'},
                {descName: 'Bandwidth', descValue: '1 TB'},
                {descName: 'Control Panel', descValue: 'Full'},
            ],
            days: "30 дней", 
            cost: "2700₽", 
            btnImg: cart
        },
    ])

    return(
        <div className={cl.product}>
            <div className="container">
                <div className={cl.product__title}>Стоимость и оплата</div>

                <div className={cl.product__cards}>
                    {cards.map(card => 
                        <ProductCard 
                            key={card.days}
                            titleImg={card.titleImg} 
                            desc={card.desc}
                            days={card.days}
                            cost={card.cost}
                            btnImg={card.btnImg} 
                        />
                    )}
                </div>
            </div>
        </div>
    )
}


export default Product;