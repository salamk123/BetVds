import React from "react";
import cl from './Service.module.css';


const ServiceCardInfo = ({number, text, place}) => {
    const module = [cl.service__card__info];
    console.log(place)
    if (place === 1) {
        module.push(cl.first)
        console.log(module)
    } 
    if (place === 2) {
        module.push(cl.second)
    } 
    if (place === 3) {
        module.push(cl.third)
    } 
    if (place === 4) {
        module.push(cl.fourth)
    } 
    if (place === 5) {
        module.push(cl.fifth)
    } 
    if (place === 6) {
        module.push(cl.sixth)
    } 

    return(
        <div className={module.join(' ')}>
            <div className={cl.service__card__info__number}>{number}</div>

            <div className={cl.service__card__info__txt}>{text}</div>
        </div>
    )
}


export default ServiceCardInfo;