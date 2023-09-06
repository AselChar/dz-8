import style from "./Header.module.css"


const Header = () => {
    return (
        <header className={style.header}>

            <nav>
                <ul>
                    <li> <a href="#">Меню</a>   </li>
                    <li> <a href="#">Товары по акции</a> </li>
                    <li> <a href="#">Корзина</a> </li>
                    <li> <a href="#">Мой кабинет</a> </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;