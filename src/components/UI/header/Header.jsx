import React from "react";
import cl from './Header.module.css'
import logo from '../../img/header_logo.svg'



const Header = () => {
    return(
        <section className={cl.header}>
            <div className={cl.header__inner}>
                <img src={logo} className={cl.header__inner__logo}/>

                <div className={cl.header__inner__tools}>
                    <div className={cl.header__inner__tools__links}>
                        <a className={cl.header__inner__tools__links__item}>Купить VDS</a>
                        <a className={cl.header__inner__tools__links__item}>О продукте</a>
                        <a className={cl.header__inner__tools__links__item}>FAQ</a>
                    </div>

                    <button className={cl.header__inner__tools__btn}>Тех. Поддержка</button>
                </div>
            </div>

            <div className={cl.header__line}></div>
        </section>
    )
}


export default Header;