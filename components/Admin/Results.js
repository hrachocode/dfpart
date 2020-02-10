import React, { useState } from 'react';
import Aside from './Aside'
import Header from './Header'

const Results = () => {

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
<Aside/>
<section className="content">
      <Header title="Результаты" description="Результаты запросов содержат много статистической информации, наглядно расположеной на графиках. Можно экспортировать данные статистики в файл XLSX, а аудиторию напрямую в рекламный кабинет."/>

  <div className="content-block">

    <div className="main-search">
        <div className="form-group full">
            <input type="text" name="text" autocomplete="off" required />
            <label htmlFor="text" className="label-name">
              <span className="content-name">
                Поиск по названию

              </span>
            </label>
          </div>
      
      <button></button>
    </div>


    <div className="request-queue">
      <div className="table table_with_checkbox">
        <table>
          <tr className="sticky">
            <th> 
                <label className="label--checkbox">
                    <input type="checkbox" className="checkbox all_select" />
                </label>
            </th>
            <th><span className="current">ID</span></th>
            <th><span>Название запроса</span></th>
            <th><span>Тип</span></th>
            <th><span>Дата создания</span></th>
            <th><span>Статус</span></th>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--analize">Анализ (75 %)</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--done">Готово</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--wait">Ожидание...</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--error">Ошибка</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--analize">Анализ (75 %)</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--done">Готово</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--wait">Ожидание...</span></td>
          </tr>
          <tr>
            <td>
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />

              </label>
            </td>
            <td>17327</td>
            <td><span className="request-name">Тестовое название анализа</span></td>
            <td>Look Alike</td>
            <td>25.09.2019 в 12:25</td>
            <td><span className="request-status request-status--error">Ошибка</span></td>
          </tr>
        </table>

      </div> <a href="" className="btn">Загрузить еще</a>
    </div>

  </div>


</section>
</main>

        </div>
    )
}
export default Results;