import style from "./Footer.module.css"
import twitter from "../../assets/twitter.png"
import whattsapp from "../../assets/whats.png"
import insta from "../../assets/insta.png"
const Footer = () => {
    return (
        <footer >
            <div className={style.container}>
                <ul className={style.ul}>
                    <li>Покупатели</li>
                    <li>Как сделать заказ</li>
                    <li>Способ оплаты</li>
                </ul>
                <ul className={style.ul}>
                    <li>Партнерам</li>
                    <li>Курьеры</li>
                    <li>Перевозки</li>
                </ul><ul className={style.ul}>
                <li>Компания</li>
                <li>О нас</li>
                <li>Реквизиты</li>
            </ul><ul className={style.ul}>
                <li>Мы в соц сетях</li>
                <li>Твиттер, Instagram</li>
                <li>WhatsApp</li>
            </ul><ul className={style.ul_images}>
                <li><a href="#"> <img className={style.images} src={twitter} alt=""/></a></li>
                <li><a href="#"> <img className={style.images} src={whattsapp} alt=""/> </a></li>
                <li><a href="#"> <img className={style.images} src={insta} alt=""/></a> </li>
            </ul>
            </div>

            <div></div>
        </footer>
    );
};

export default Footer;