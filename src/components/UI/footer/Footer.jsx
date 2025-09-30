import React from "react";
import cl from './Footer.module.css';
import logo from '../../img/footer_logo.png'

const Footer = () => {
    return(
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footer__inner}>
                    <img src={logo} className={cl.footer__inner__logo}/>

                    <div className={cl.footer__inner__txt}>© Все права защищены. All Rights Reserved. 2021 BetVDS</div>
            
                </div>
            </div>
        </footer>
    )
}


export default Footer;