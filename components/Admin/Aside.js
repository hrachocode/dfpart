import React from 'react';
import avatar from '../assets/images/avatar.png';
import user from '../assets/images/user.svg';
import users from '../assets/images/users.svg';
import edit from '../assets/images/edit.svg';
import report from '../assets/images/report.svg';
import settings from '../assets/images/settings.svg';
import logo from '../assets/images/logo.png';
import helpLightGrey from '../assets/images/help-light-grey.svg';
const Aside = () => {
    return (
        <aside>

      <div className="column-fixed">
        <div className="side-column">

          <a href="" className="user-name">
            <span className="user-name__avatar"><img src={avatar} alt="" /></span>
            <span className="user-name__name">Джон<br />Константин</span>
          </a>

          <div className="user-stats">
            <div className="stats-item">
              <span className="stats-item__title">Остаток пользователей для анализа</span>
              <span className="stats-item_text">38 452</span>
            </div>
            <div className="stats-item">
              <span className="stats-item__title">Экспорт</span>
              <span className="stats-item_text">Недоступно</span>
            </div>
            <div className="stats-item">
              <span className="stats-item__title">Сейчас в очереди</span>
              <span className="stats-item_text">7 запросов</span>
            </div>
          </div>

          <div className="side-menu">
            <ul>
              <li><a href=""><span className="icon"><img src={user} alt="" /></span>Анализ аудитории</a></li>
              <li><a href=""><span className="icon"><img src={users} alt="" /></span>Поиск похожих</a></li>
              <li className="current"><a href=""><span className="icon"><img src={edit} alt="" /></span>Обогащение</a></li>
              <li><a href=""><span className="icon"><img src={report} alt="" /></span>Результаты</a></li>
              <li><a href=""><span className="icon"><img src={settings} alt="" /></span>Админка</a></li>
            </ul>
          </div>





        </div>

        <div className="side-logo"><a href="" className="logo"><img src={logo} alt="" /></a><a href="" className="hint"><img src={ helpLightGrey} alt="" /></a></div>
      </div>
    </aside>
    )
}
export default Aside;