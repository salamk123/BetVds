import React from "react";
import cl from "./Intro.module.css"
import IntroItem from "./IntroItem";
import spyImg from "../../img/intro_spy.png"
import securImg from '../../img/intro_secur.svg';
import powerImg from '../../img/intro_power.svg';
import btnImg from '../../img/intro_btn.svg'

const Intro = ({children}) => {

    return(
        <div className={cl.intro}>
            {children}

            <div className="container">
                <div className={cl.intro__inner}>
                    <div className={cl.intro__inner__name}>ЛУЧШЕЕ СОЧЕТАНИЕ</div>

                    <div className={cl.intro__inner__line}>
                        <IntroItem text={"АНОНИМНОСТЬ"} img={spyImg}/>
                        <IntroItem text={"БЕЗОПАСНОСТЬ"} img={securImg}/>
                        <IntroItem text={"МОЩНОСТЬ"} img={powerImg}/>
                    </div>

                    <div className={cl.intro__inner__desc}>
                         - это виртуально созданный ПК с нужными вам конфигурациями. Это отличное решение для полной анонимности и получения необходимой мощности для решения различных задач.
                    </div>

                    <button className={cl.intro__inner__btn}>
                        <img src={btnImg} className={cl.intro__inner__btn__img}/>

                        <div className={cl.intro__inner__btn__text}>Купить VDS</div>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Intro;