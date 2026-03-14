import '../ComponentsCSS/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">

                    <div className="footer-column">
                        <h4>Компания</h4>
                        <ul>
                            <li><a href="#">О Coral Travel</a></li>
                            <li><a href="#">Благодарности</a></li>
                            <li><a href="#">Пресса о Coral Travel</a></li>
                            <li><a href="#">Премия Starway World Best Hotels</a></li>
                            <li><a href="#">Реквизиты компаний</a></li>
                            <li><a href="#">Оставить отзыв</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Бронирование туров на coral.ru</h4>
                        <ul>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Как забронировать онлайн</a></li>
                            <li><a href="#">Способы оплаты</a></li>
                            <li><a href="#">Акции</a></li>
                            <li><a href="#">Программа лояльности CoralBonus</a></li>
                            <li><a href="#">Подарочные карты</a></li>
                            <li><a href="#">Клуб корпоративных клиентов</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Популярные направления</h4>
                        <ul>
                            <li><a href="#">Турция</a></li>
                            <li><a href="#">ОАЭ</a></li>
                            <li><a href="#">Египет</a></li>
                            <li><a href="#">Таиланд</a></li>
                            <li><a href="#">Мальдивы</a></li>
                            <li><a href="#">Бахрейн</a></li>
                            <li><a href="#">Россия</a></li>
                        </ul>
                    </div>

                    {/* Колонка 4: Подписка и контакты */}
                    <div className="footer-column">
                        <h4>Подпишитесь на наши рассылки:</h4>
                        <p>Получайте лучшие и самые выгодные предложения!</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Введите E-mail" />
                            <button className="subscribe-btn">→</button>
                        </div>
                        <p className="privacy-note">
                            Нажимая «Подписаться» вы даёте согласие на обработку персональных данных
                        </p>
                        <div className="contact-info">
                            <div className="phone-box">
                                <img src="/static/src/support.png" alt="" />
                                +7 (495) 502 10 11
                            </div>
                            <div className="rating-box">
                                <span>86,95</span>
                                <span>100,89</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;