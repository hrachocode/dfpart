import React from 'react'
import fbIcon from '../../../assets/images/fb.svg';
import vkIcon from '../../../assets/images/vk.svg';
import telegramIcon from '../../../assets/images/telegram.svg';

const Footer = () => {
    return (
        <div className="user-form__footer">
        <div className="bottom-menu">
            <ul>
                <li>2019 © DataFuel</li>
                <li><a href="">Политика конфиденциальности</a></li>
                <li><a href="">О сервисе</a></li>
            </ul>
        </div>

        <div className="footer-social">
            <span className="footer-social__title">DataFuel в социальных сетях</span>
            <ul>
                <li><a href=""><img src={fbIcon} alt="FB Icon" /></a></li>
                <li><a href=""><img src={vkIcon} alt="VK Icon" /></a></li>
                <li><a href=""><img src={telegramIcon} alt="telegramIcon" /></a></li>
            </ul>
        </div>
    </div>
    )
}
export default Footer;