import React from 'react';
import Aside from '../includes/Aside';
import Header from '../includes/Header'
import close from '../../assets/images/close.svg'
const Enrichment = () => {
    return (
        <div>
            <div className="popup-reminder">

                <div className="popup-reminder__text">
                    <div className="popup-reminder__title">Заканчивается лицензия</div>
                    <p>Через 3 дня закончится оплаченная лицензия, доступ к сервису будет ограничен.</p>
                </div>

                <a href="" className="btn-pay">Оплатить</a>
                <a className="popup-reminder-close"></a>
            </div>

            <main>
                <Aside />
                <section className="content">
                    <Header title="Обогащение" description="Обогащение аудитории позволит найти вашу аудиторию во ВКонтакте и построить её психологический портрет. Это поможет эффективнее управлять рекламными кампаниями, персонализируя объявления под каждый сегмент." />


                    <div className="content-block">


                        <h2>Обогащение по номерам телефонов или Email</h2>
                        <p className="size-md">После создания запроса он отправится в очередь на анализ. Сбор данных дело не быстрое, но вы всегда сможете узнать о его состоянии в очереди. Как только мы завершим анализ, вам придет уведомление.</p>

                        <div className="form">
                            <div className="form-group">
                                <input type="text" name="text" autocomplete="off" required />
                                <label htmlFor="text" className="label-name">
                                    <span className="content-name">
                                        Название запроса
    
          </span>
                                </label>
                            </div>
                            <div className="form-group">
                                <div className="textarea-block">
                                    <textarea autocomplete="off" required></textarea>
                                    <label htmlFor="text" className="label-name">
                                        <span className="content-name">
                                            Ссылки на сообщества или пользователей в ВК
    
            </span>
                                    </label>
                                </div>

                            </div>

                            <div className="form-group">
                                <div className="loaded-file">
                                    Название_загруженного_файла.txt
              <span className="pre-result">Количество ID в файле: 117</span>
                                    <a href="#"><img src={close} className="Close" /></a>
                                </div>
                                <div className="load-file">
                                    <div className="name">Файл загружается.csv</div>
                                    <span className="progress" style={{ width: '40%' }}></span>
                                </div>
                            </div>

                            <div className="form-group form-group--inline">
                                <a href="#" className="btn-gray">Загрузить файл</a>

                                <span className="form-group-text">Вставьте ссылки или ID интересующих вас сообществ или пользователей ВК по одному в строке. Также вы можете загрузить данные в формате txt, csv, xls, xlsx.</span>
                            </div>

                            <h3>Формат данных</h3>

                            <div className="data-format">
                                <div className="form-radio">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="data-format" />
                                        79111111111
          </label>
                                </div>

                                <div className="form-radio">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="data-format" />
                                        user@email.ru
          </label>
                                </div>
                            </div>
                            <div className="data-format">

                                <div className="form-radio">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="data-format" disabled />
                                        <span className="label--radio__text"><span className="span">SHA-2 256 </span><span className="text-hint">Формат шифрования данных. Пока доступно только для номеров телефонов в формате 79111111111</span></span>
                                        <span className="label_dop">Телефон</span>
                                    </label>
                                </div>

                                <div className="form-radio">
                                    <label className="label--radio">
                                        <input type="radio" className="radio" name="data-format" disabled />
                                        <span className="label--radio__text"><span className="span">SHA-2 256 </span> <span className="text-hint">Формат шифрования данных. Пока доступно только для номеров телефонов в формате 79111111111</span></span>
                                        <span className="label_dop">E-mail</span>
                                    </label>
                                </div>

                            </div>

                            <button className="btn">Обогатить</button>
                        </div>

                        <div className="request-queue">
                            <h2>Очередь запросов</h2>

                            <div className="table">
                                <table>
                                    <tr className="sticky">
                                        <th><span className="current">ID</span></th>
                                        <th><span>Название запроса</span></th>
                                        <th><span>Тип</span></th>
                                        <th><span>Дата создания</span></th>
                                        <th><span>Статус</span></th>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--analize">Анализ (75 %)</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--done">Готово</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--wait">Ожидание...</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--error">Ошибка</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--analize">Анализ (75 %)</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--done">Готово</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--wait">Ожидание...</span></td>
                                    </tr>
                                    <tr>
                                        <td>17327</td>
                                        <td><span className="request-name">Тестовое название анализа</span></td>
                                        <td>Look Alike</td>
                                        <td>25.09.2019 в 12:25</td>
                                        <td><span className="request-status request-status--error">Ошибка</span></td>
                                    </tr>
                                </table>
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
        </div >
    )
}
export default Enrichment;