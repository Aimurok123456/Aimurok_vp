import React from 'react'
import balloon from "./../../assets/balloon.jpg"
import styles from "./Goods.module.css"
import instagram from "./../../assets/instagram.svg"
import whatsApp from "./../../assets/whatsApp.svg"
export default function Goods__Item() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <ul className={styles.branches}>
                        <li> <a href="">Главная   </a> </li>
                        <li>/</li>
                        <li><a href="">  Католог </a> </li>
                        <li>/</li>
                        <li><a href="">   Готовые композиции</a></li>
                    </ul>
                </div>
                <h4 className={styles.composition}>Композиция шаров на день рождения</h4>
                <div className={styles.composition__center}>
                    <img src={balloon} alt="" className={styles.center__left} />
                    <div className={styles.center__right}>
                        <div className={styles.rightPrice}>
                            <span className={styles.priceFirst}>1450р</span>
                            <span className={styles.priceThrough}>1540р</span>
                            <span className={styles.pricePercent}>-7%</span>
                        </div>
                        <button className={styles.basket}> В корзину</button>
                        <hr className={styles.line} />
                        <span className={styles.structure}>Состав:</span>
                        <span className={styles.title}>Шар латоксный - 2 шт</span>
                        <span className={styles.title}>Шар 3D - 1 шт</span>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <div className={styles.left}>
                        <h3 className={styles.important}>Контакты</h3>
                        <a href="" className={styles.phoneNum}>+7 918 346 57 47</a>
                        <div className={styles.left__icon}>
                            <a href="" className={styles.instagram}>
                                <img src={instagram} alt="" />
                                <span className={styles.inst}>instagram</span>
                            </a>
                            <a href="" className={styles.whatsApp}>
                                <img src={whatsApp} alt="" />
                                <span className={styles.whats}>WhatsApp</span>
                            </a>
                        </div>

                    </div>
                    <div className="right">
                        <h3 className={styles.important}> Адрес</h3>
                        <span className={styles.address}>Заветный</span>
                        <h4 className={styles.address}>
                            проезд Лазурный, д.11
                        </h4>
                        <span className={styles.job}>Режим работы</span>
                        <span className={styles.time}>Круглосуточно</span>

                    </div>

                </footer>
            </div>
        </div>

    )
}
