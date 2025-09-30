import React, { useState } from "react";
import cl from './Service.module.css';
import ServiceCardInfo from "./ServiceCardInfo";
import ServiceDescInner from "./ServiceDescInner";
import think from '../../img/service_think.png';
import question from '../../img/service_question.png';
import road from '../../img/service_road.png';


const Service = () => {
    const [info, setInfo] = useState([
        {number: '1', text: 'На своем компьютере нажать на кнопку пуск;', place: 1},
        {number: '2', text: 'В строке поиск напечатать подключение;', place: 2},
        {number: '3', text: 'Выбрать подключение к удаленному рабочему столу;', place: 3},
        {number: '4', text: 'Напечатать айпи и порт слитно;', place: 4},
        {number: '5', text: 'Далее выбрать Administrator и пароль;', place: 5},
        {number: '6', text: 'Задать свой пароль;', place: 6},
    ])

    const [ques, setQues] = useState([
        {title: '1.1.  	Какой нужен компьютер для работы с виртуальными машинами?', text: 'Для удаленного подключения к виртуальной машине подойдет практически  любой компьютер, главное ,чтобы скорость вашего Интернета была от 5 мбит/сек.'},
        {title: '1.2.  	Зачем мне нужны ваши виртуальные машины?', text: 'Большинство букмекерских контор борются с вилочниками и стараются вычислить их.  При вычислении БК могут порезать лимиты, порезать линию и отправить на дополнительную верификацию для выплаты выигрыша. Службы безопасности БК обращают внимание на ваши действия и так же они смотрят на железо (компьютер) с которого вы заходите в БК. Например, у контор 1хбет, мелбет и мостбет службы безопасности сотрудничают друг с другом. И они могут заметить, что с одного и того же ip играет несколько аккаунтов. Это называется мультиаккаунтингом, и за это блокируют.'}
    ])

    return(
        <div className={cl.service}>
            <div className={cl.service__card}>
                <div className={cl.service__card__set}>
                    <div className={cl.service__card__title}>Как мне выбрать сервер?</div>

                    <div className={cl.service__card__txt}>Зарегистрироваться на сайте и оплатить виртуальный компьютер.</div>

                    <div className={cl.service__card__desc}>Далее подключиться к виртуальному компьютеру, то есть:</div>

                    <img src={question} className={cl.service__card__ques}/>
                    <img src={think} className={cl.service__card__think}/>
                    <img src={road} className={cl.service__card__road}/>

                    <div className={cl.service__card__setting}>
                        {info.map(item => 
                            <ServiceCardInfo place={item.place} key={item.text} number={item.number} text={item.text}/>
                        )}
                    </div>
                    
                </div>
            </div>

            <div className="container">
                <div className={cl.service__title}>Общие вопросы</div>

                <div className={cl.service__line}></div>

                <div className={cl.service__desc}>
                    {ques.map(item => 
                        <ServiceDescInner title={item.title} text={item.text} key={item.text}/>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Service;