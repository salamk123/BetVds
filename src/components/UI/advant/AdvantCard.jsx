import React from "react";
import cl from './Advant.module.css'


const AdvantCard = ({img, name, desc}) => {
    return(
        <div className={cl.advant__inner__card}>
            <img src={img} className={cl.advant__inner__card__img}/>

            <div className={cl.advant__inner__card__name}>{name}</div>

            <div className={cl.advant__inner__card__desc}>{desc}</div>
        </div>
    )
}


export default AdvantCard;