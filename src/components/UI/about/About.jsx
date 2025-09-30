import React, { useState } from "react";
import cl from './About.module.css'
import AboutCard from "./AboutCard";
import guard from '../../img/about_guard.png';
import social from '../../img/about_social.png';
import sup from '../../img/about_sup.png';
import solid from '../../img/about_solid.png';
import mas from '../../img/about_mas.png'

const About = () => {
    const [cards, setCards] = useState([
        {img: sup, text: 'Оперативная и адекватная поддержка'},
        {img: social, text: 'Опытные разработчики'},
        {img: solid, text: 'Возможность сотрудничества'},
        {img: mas, text: 'Гибкая ценовая политика'},
        {img: guard, text: 'Безопасность и анонимность '}
    ])

    return(
        <div className={cl.about}>
            <div className="container">
                <div className={cl.about__title}>О <p style={{color: '#FE9E45', display: 'inline-block'}}>продукте</p></div>

                <div className={cl.about__text}>VDS - это виртуально созданный ПК с нужными вам конфигурациями. <br/> Это отличное решение для полной анонимности и получения необходимой мощности для решения различных задач. <br/> <br/> Изначально мы создавали VDS под свои личные нужды (использование собственного ПО ), но увидев дефицит качественного сервиса VDS для профессионалов, мы решили предоставить его широкой аудитории.</div>

                <div className={cl.about__rules}>Наши главные правила для всех продуктов:</div>
            
                <div className={cl.about__cards}>
                    {cards.map(card => 
                        <AboutCard key={card.text} img={card.img} text={card.text}/>
                    )}
                </div>
            </div>
        </div>
    )
}


export default About;