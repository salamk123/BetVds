import React from "react";
import cl from './FAQ.module.css'
import mail from '../../img/FAQ_mail.png'


const FAQ = () => {
    return(
        <div className={cl.faq}>
            <div className="container">
                <div className={cl.faq__title}>Остались вопросы?</div>

                <div className={cl.faq__line}></div>

                <div className={cl.faq__txt}>Напишите нам на наш E-mail, и мы с радостью ответим на все ваши вопросы!</div>

                <button className={cl.faq__btn}>
                    <img src={mail} className={cl.faq__btn__img}/>

                    <div className={cl.faq__btn__txt}>Написать</div>
                </button>
            </div>
        </div>
    )
}

export default FAQ;

