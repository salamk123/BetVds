import React from "react";
import cl from './Service.module.css';


const ServiceDescInner = ({title, text}) => {
    return(
        <div className={cl.service__desc__inner}>
            <div className={cl.service__desc__title}>{title}</div>
                    
            <div className={cl.service__desc__txt}>{text}</div>
        </div>
    )
}


export default ServiceDescInner;