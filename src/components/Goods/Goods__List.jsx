import React from 'react'
import styles from "./Goods.module.css"
import balloon from "./../../assets/balloon.jpg"
import instagram from "./../../assets/instagram.svg"
import whatsApp from "./../../assets/whatsApp.svg"

function Goods__List() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.important}>Готовые композиции</h3>
                <div>
                    <ul className={styles.branches}>
                        <li> <a href="">Главная   </a> </li>
                        <li>/</li>
                        <li><a href="">  Католог </a> </li>
                        <li>/</li>
                        <li><a href="">   Готовые композиции</a></li>
                    </ul>
                </div>


                <div className={styles.choice}>
                    <form action="" className={styles.choicePrice}>
                        <label>Цена</label>
                        <input type="text" className={styles.priceCenter} placeholder='от' />
                        <input type="text" placeholder='до' />
                    </form>

                    <form action="" className={styles.sale} >
                        <label className={styles.saleSpan}>Товары со скидкой</label>
                        <input type="text" className={styles.saleInput} />
                    </form>

                    <form action="" className={styles.sort}>
                        <label htmlFor="select">Сортировать:</label>
                        <select name=""  className={styles.sortSelect}>
                            <option value="" disabled selected >по умолчанию</option>
                        </select>
                    </form>
                </div>

                <div className={styles.goods__list}>
                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>

                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p >
                        </div>
                    </div>

                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>

                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>

                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>


                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>


                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
                    </div>

                    <div className={styles.goods__item}>
                        <a href="">
                            <img src={balloon} className={styles.balloon} alt="" />
                        </a>
                        <div className={styles.bottom}>
                            <div className={styles.price}>
                                <span className={styles.goodsPrice}>1450р</span>
                                <span className={styles.priceLine}>1540р</span>
                                <span className={styles.priceSale}>-7%</span>
                            </div>
                            <p className={styles.p}>
                                Композиция шаров на день
                                рождения
                            </p>
                        </div>
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

export default Goods__List