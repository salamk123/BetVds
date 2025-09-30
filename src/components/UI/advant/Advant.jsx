import React, { useState } from "react";
import cl from './Advant.module.css';
import rocket from '../../img/advant_rocket.png'
import gear from '../../img/advant_gear.png'
import window from '../../img/advant_window.png'
import finger from '../../img/advant_finger.png'
import fork from '../../img/advant_fork.png'
import bag from '../../img/advant_bag.png'
import AdvantCard from "./AdvantCard";


const Advant = () => {
    const [cards, setCards] = useState([
        {img: rocket, name: 'Скорость', desc: "Интернет канал без ограничений Быстрый отклик"},
        {img: gear, name: 'Софт', desc: "Предустановлены популярные программы, в том числе и бот/сканер Betting Со"},
        {img: window, name: 'Windows 10', desc: "На всех решениях предустановлена сборка Windows 10"},
        {img: fork, name: 'Оптимизация под вилки', desc: "Стабильная работа бота и моментальная проставка плеч в сканере"},
        {img: bag, name: 'Оптимальная цена', desc: "400р - 7 дней Одно из самых лучших предложений на рынке"},
        {img: finger, name: 'Уникализация', desc: "Каждая виртуальная машина уникальна"}
    ])

    return(
        <div className={cl.advant}>
            <div className="container">
                <div className={cl.advant__name}>Преимущества</div>

                <div className={cl.advant__line}></div>

                <div className={cl.advant__inner}>
                    {cards.map(card => 
                        <AdvantCard key={card.desc} img={card.img} desc={card.desc} name={card.name}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Advant;