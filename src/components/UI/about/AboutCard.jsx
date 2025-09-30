import React from "react";
import cl from './About.module.css';


const AboutCard = ({img, text}) => {
    return(
        <div className={cl.about__cards__item}>
            <img src={img} className={cl.about__cards__item__img}/>

            <div className={cl.about__cards__item__txt}>{text}</div>
        </div>
    )
}


export default AboutCard;
