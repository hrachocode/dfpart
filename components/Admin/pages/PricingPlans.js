import React from 'react';
import Aside from './Aside';
const PricingPlans = () => {
    return (
        <div>
            <main>
                <Aside />

                <section class="content">

                    <div class="content-top-text">
                    <h1>Тарифы</h1>
                    <p class="size-lg">Обогащение аудитории позволит найти вашу аудиторию во ВКонтакте и построить её психологический портрет. Это поможет эффективнее управлять рекламными кампаниями, персонализируя объявления под каждый сегмент.</p>
                    <ul class="tabs clearfix" data-tabgroup="first-tab-group">
                        <li><a href="#tab1" class="active">Для физических лиц</a></li>
                        <li><a href="#tab2">Для юридических лиц</a></li>

                    </ul>
                    </div>

                <div class="content-block">
                <section id="first-tab-group" class="tabgroup">
                    <div id="tab1">

                    <div class="plans">
                        <div class="plans__discription-columns">
                        <span class="plans__discription-item">Лимит запросов</span>
                        <span class="plans__discription-item">Look-alike</span>
                        <span class="plans__discription-item">Выгрузка аналитики</span>
                        <span class="plans__discription-item">Анализ по номерам телефонов или email</span>
                        <span class="plans__discription-item">Поддержка</span>
                        <span class="plans__discription-item">Сегменты ВКонтакте</span>
                        <span class="plans__discription-item">1 месяц</span>
                        <span class="plans__discription-item">3 месяца</span>
                        <span class="plans__discription-item">6 месяцев</span>
                        <span class="plans__discription-item">12 месяцев</span>

                        </div>
                        <div class="plan-item">
                        <span class="plan-item__title">Light</span>
                        <span class="plan-item__block">500 k</span>
                        <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block">Общая</span>
                        <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all"  />
                            1 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all"  />
                            2 500 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all"  />
                            4 500 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all"  />
                            8 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        </div>
                        <div class="plan-item plan-item--optimum">
                        <span class="plan-item__title">Optimum</span>
                        <span class="plan-item__block">1 m</span>
                        <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                        <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" /></span>
                        <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" /></span>
                        <span class="plan-item__block">Общая</span>
                        <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            1 500 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            4 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            7 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            12 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        </div>
                        <div class="plan-item">
                        <span class="plan-item__title">Pro</span>
                        <span class="plan-item__block">2 m</span>
                        <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                        <span class="plan-item__block">Скоро</span>
                        <span class="plan-item__block plan-item__block--column"><span>4<span class="rouble">o</span></span> <span class="plan-item__text">за найденный профиль</span></span>
                        <span class="plan-item__block">Выделенная</span>
                        <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            2 500 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            6 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            10 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            16 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        </div>

                        <div class="plan-item">
                        <span class="plan-item__title">The King</span>
                        <span class="plan-item__block">10 m</span>
                        <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                        <span class="plan-item__block">Скоро</span>
                        <span class="plan-item__block plan-item__block--column"><span>2<span class="rouble">o</span></span> <span class="plan-item__text">за найденный профиль</span></span>
                        <span class="plan-item__block">Выделенная</span>
                        <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" class="plan-close" /></span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            4 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            10 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            18 000 <span class="rouble">o</span>
                            </label>
                        </span>
                        <span class="plan-item__block left">
                            <label class="label--radio">
                            <input type="radio" class="radio" name="plan-all" />
                            30 000 <span class="rouble">o</span>
                            </label>
                        </span></div>

                    </div>
                    
                    <h2>Промо-код и оплата</h2>
                    <p>Активируя промо-код вы получите доступ ко всем функциям на 7 дней.</p>
                    
                    <div class="payment-form requisites-form">
                    <div class="form-group">
                        <input class="form-control form-control--check" type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                        <span class="content-name">
                            Промокод
                        </span>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <button class="btn-gray" data-fancybox="modal1" data-src="#check_promocode" href="javascript:;">Проверить промокод</button>
                    
                        <div id="check_promocode" style="display: none;" class="modal">
                        <h2>Промокод подтвержден</h2>
                        <p>Вы получили скидку на тарифу, цены указаны в таблице тарифов, приятного использования!</p>
                        <button class="btn">Применить промокод</button>
                        </div>
                    
                    </div>
                    
                    <div class="payment-form__bottom">
                        <button class="btn">Оплатить</button>
                        <span class="payment-form__text">Нажимая кнопку «Оплатить», Вы соглашаетесь
                        с условиями <a href="">договора-оферты</a>.</span>
                    </div>
                    

                    </div>
                    </div>
                    <div id="tab2">
                        <div class="plans">
                            <div class="plans__discription-columns">
                            <span class="plans__discription-item">Лимит запросов</span>
                            <span class="plans__discription-item">Look-alike</span>
                            <span class="plans__discription-item">Выгрузка аналитики</span>
                            <span class="plans__discription-item">Анализ по номерам телефонов или email</span>
                            <span class="plans__discription-item">Поддержка</span>
                            <span class="plans__discription-item">Сегменты ВКонтакте</span>
                            <span class="plans__discription-item">1 месяц</span>
                            <span class="plans__discription-item">3 месяца</span>
                            <span class="plans__discription-item">6 месяцев</span>
                            <span class="plans__discription-item">12 месяцев</span>

                            </div>
                            <div class="plan-item">
                            <span class="plan-item__title">Light</span>
                            <span class="plan-item__block">500 k</span>
                            <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block">Общая</span>
                            <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                1 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                2 500 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                4 500 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                8 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            </div>
                            <div class="plan-item plan-item--optimum">
                            <span class="plan-item__title">Optimum</span>
                            <span class="plan-item__block">1 m</span>
                            <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                            <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" /></span>
                            <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" /></span>
                            <span class="plan-item__block">Общая</span>
                            <span class="plan-item__block"><img src="images/tarif-close-white.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                1 500 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                4 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                7 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                12 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            </div>
                            <div class="plan-item">
                            <span class="plan-item__title">Pro</span>
                            <span class="plan-item__block">2 m</span>
                            <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                            <span class="plan-item__block">Скоро</span>
                            <span class="plan-item__block plan-item__block--column"><span>4<span class="rouble">o</span></span> <span class="plan-item__text">за найденный профиль</span></span>
                            <span class="plan-item__block">Выделенная</span>
                            <span class="plan-item__block"><img src="images/close.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                2 500 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                6 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                10 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                16 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            </div>

                            <div class="plan-item">
                            <span class="plan-item__title">The King</span>
                            <span class="plan-item__block">10 m</span>
                            <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" /></span>
                            <span class="plan-item__block">Скоро</span>
                            <span class="plan-item__block plan-item__block--column"><span>2<span class="rouble">o</span></span> <span class="plan-item__text">за найденный профиль</span></span>
                            <span class="plan-item__block">Выделенная</span>
                            <span class="plan-item__block"><img src="images/tarif-cheked.svg" alt="" class="plan-close" /></span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                4 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                10 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                18 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span>
                            <span class="plan-item__block left">
                                <label class="label--radio">
                                <input type="radio" class="radio" name="plan-all" />
                                30 000 <span class="rouble">o</span>
                                <span class="old_price">1500</span>
                                </label>
                            </span></div>

                        </div>
                    </div>
                    <h2>Реквизиты организации</h2>
                    <p>Данные о компании будут указаны в счете и акте.</p>


                    <div class="requisites-form">
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            Компания

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            E-mail для отправки документов

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            ИНН

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            ОГРН

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            Название банка

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            Расчетный счет

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            Корр. счет

                            </span>
                        </label>
                        </div>
                        <div class="form-group">
                        <input type="text" name="text" autocomplete="off" required />
                        <label for="text" class="label-name">
                            <span class="content-name">
                            БИК

                            </span>
                        </label>
                        </div>

                        <h2>Промо-код и оплата</h2>
                        <p>Активируя промо-код вы получите доступ ко всем функциям на 7 дней.</p>

                        <div class="payment-form requisites-form">
                        <div class="form-group">
                            <input class="form-control form-control--check" type="text" name="text" autocomplete="off" required />
                            <label for="text" class="label-name">
                            <span class="content-name">
                                Промокод
                            </span>
                            </label>
                        </div>

                        <div class="form-group">
                            <button class="btn-gray" data-fancybox="modal1" data-src="#check_promocode" href="javascript:;">Проверить промокод</button>

                            <div id="check_promocode" style="display: none;" class="modal">
                            <h2>Промокод подтвержден</h2>
                            <p>Вы получили скидку на тарифу, цены указаны в таблице тарифов, приятного использования!</p>
                            <button class="btn">Применить промокод</button>
                            </div>

                        </div>

                        <div class="payment-form__bottom">
                            <button class="btn">Оплатить</button>
                            <span class="payment-form__text">Нажимая кнопку «Оплатить», Вы соглашаетесь
                            с условиями <a href="">договора-оферты</a>.</span>
                        </div>
                        </div>

                    </div>

                </section>


                </div>


                </section>
          </main>
        </div>
    )
}
