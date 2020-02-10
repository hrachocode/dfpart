import React from 'react';
import Aside from './Aside';
import lightGreyCopy from '../assets/images/help-light-grey-copy.svg';
import userProfile from '../assets/images/user-profile.png'
import userProfileWhite from '../assets/images/user-profile-white.svg';
const Profile = () => {
  return (
    <div>
      <main>
        <Aside />
        <section className="content">

          <div className="content-top-text">

            <div className="profile-main">
              <div className="avatar-main">
                <div className="imageWrapper">
                  <img className="image" src={userProfile} />
                </div>
                <button className="hover-block file-upload">
                  <span className="hover-block__icon"><img src={userProfileWhite} alt="" /></span>
                  <input type="file" className="file-input" /> Изменить<br /> аватар
            </button>
              </div>
              <div className="profile-main__content">
                <div className="profile-main__name">Джон Константин</div>
                <ul>
                  <li>337 дней</li>
                  <li>Тип лицензии: «The King» <a data-fancybox="modal111" data-src="#text" href="javascript:;" className="hint-modal"><img src={lightGreyCopy} alt="" /></a></li>
                </ul>
              </div>
            </div>

            <div className="profile-btn">
              <a href="" className="btn">Управление личными кабинетами</a>
              <a href="" className="btn">Сменить тариф</a>
            </div>
          </div>


          <div className="content-block">



            <div className="profile-item">
              <h2>Личные данные</h2>
              <div className="profile-item__form">
                <div className="form-group">
                  <input type="text" name="text" autocomplete="off" required />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">
                      Имя профиля
    
                </span>
                  </label>
                </div>

                <button className="btn" disabled>Сохранить</button>
              </div>
            </div>

            <div className="profile-item balance">
              <h2>Доступно средств для анализа по номеру телефона или email</h2>
              <div className="profile-item__form">
                <div className="form-group">
                  <p className="mb-0"><span className="profile-sum">7 950 <span className="rouble">o</span></span></p>
                  <p>1000 профилей</p>
                </div>
                <button className="btn">Пополнить баланс</button>
              </div>
            </div>

            <div className="profile-item">
              <h2>Ваш промо-код</h2>
              <p>Зарегистрировать ваш личный промо код? Что это?</p>

              <div className="profile-item__form">
                <div className="form-group">
                  <input type="text" name="text" autocomplete="off" required />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">
                      Промокод
    
                </span>
                  </label>
                </div>

                <button className="btn" disabled>Зарегистрировать</button>
              </div>
              <p>Сумма по партнерским начислениям по промокоду: <span className="profile-sum">7 950 <span className="rouble">o</span></span></p>

            </div>


            <div className="profile-item">
              <h2>Способ оповещения</h2>
              <p>Выбор способа оповещения об окончании анализа и других уведомлений сервиса.</p>
              <div className="profile-item__form">

                <div className="form-radio">
                  <label className="label--radio">
                    <input type="radio" className="radio" name="notification" />
                    Уведомлять по Email
              </label>
                </div>

                <div className="form-radio">
                  <label className="label--radio">
                    <input type="radio" className="radio" name="notification" />
                    С помощью Web-Push
              </label>
                </div>
              </div>
            </div>
          </div>


        </section>
      </main>


      <div id="modal" style={{ display: 'none' }} className="modal">
        <h2>Экспорт в рекламный кабинет</h2>
        <p>Для загрузки сегмента в рекламный кабинет укажите его ID и введите название для аудитории. Обратите внимание, что выбор отдельных сегментов возможен только при наличии <a href="">специальной лицензии</a>.</p>

        <div className="drop">
          <div className="option active placeholder" data-value="placeholder">
            <div className="option-item">
              Название рекламного кабинета из профиля<span>ID: community_name</span>
            </div>
          </div>
          <div className="option" data-value="wow">
            <div className="option-item">
              Рекламный кабинет<span>ID: another_id</span>
            </div>
          </div>
          <div className="option" data-value="drop">
            <div className="option-item">
              Ещё одно название<span>ID: groupname</span>
            </div>
          </div>
          <div className="option" data-value="select">
            <div className="option-item">
              Название рекламного кабинета из профиля<span>ID: community_name</span>
            </div>
          </div>

        </div>
      </div>

      <div id="text" style={{ display: 'none' }} className="modal">
        <h2>Экспорт в рекламный кабинет</h2>
        <p>Для загрузки сегмента в рекламный кабинет укажите его ID и введите название для аудитории. Обратите внимание, что выбор отдельных сегментов возможен только при наличии <a href="">специальной лицензии</a>.</p>


      </div>
    </div>
  )
}
export default Profile;