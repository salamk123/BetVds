import React from "react";
import cl from './Intro.module.css'

const IntroItem = ({text, img}) => {
    return(
        <div className={cl.intro__inner__line__item}>
            <img src={img} className={cl.intro__inner__line__item__img}/>

            <div className={cl.intro__inner__line__item__text}>{text}</div>
        </div>
    )
}

export default IntroItem;