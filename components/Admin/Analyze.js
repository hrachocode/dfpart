import React, { useRef } from 'react';
import Aside from './Aside';
import Header from './Header'

const handleUserIds = (file) => {
  const reader = new FileReader();
  reader.onload = event => console.log( event.target.result.replace(/(\r\n|\n|\r)/gm, " ").split(" ") )
  reader.readAsText(file.current.files[0]);
}

const Analyze = () => {
  const file = useRef(null);
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
          <Header title="Анализ аудитории" description="Анализ аудитории позволит получить психологический потртет вашей целевой аудитории. Это поможет эффективнее управлять рекламными кампаниями, персонализируя объявления под каждый сегмент." />


          <div className="content-block">

            <h2>Создать запрос</h2>
            <p className="size-md">После создания запроса он отправится в очередь на анализ. Сбор данных дело не быстрое, но вы всегда сможете узнать о его состоянии в очереди. Как только мы завершим анализ, вам придет уведомление.</p>

            <div className="form">
              <div className="form-group">
                <input type="text" name="text" autoComplete="off" required />
                <label htmlFor="text" className="label-name">
                  <span className="content-name">
                    Название запроса
        
          </span>
                </label>
              </div>
              <div className="form-group">
                <div className="textarea-block">
                  <textarea autoComplete="off" required></textarea>
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">
                      Ссылки на сообщества или пользоватлей в ВК
        
            </span>
                  </label>
                </div>

              </div>

              <div className="form-group">
                <div className="loaded-file">
                  Название_загруженного_файла.txt
              <span className="pre-result">Количество ID в файле: 117</span>
                  <a href="#"><img src="images/close.svg" className="Close" /></a>
                </div>
                <div className="load-file">
                  <div className="name">Файл загружается.csv</div>
                  <span className="progress" style={{width: '40%' }}></span>
                </div>
              </div>

              <div className="form-group form-group--inline">
                <input type="file" name="photo" id="upload-user-ids" ref={file} onChange={e => handleUserIds(file)} />
                <a className="btn-gray">Загрузить файл</a>
                <span className="form-group-text">Вставьте ссылки или ID интересующих вас сообществ или пользоватей ВК по одному в строке. Также вы можете загрузить данные в формате txt, csv, xls, xlsx.</span>
              </div>

              <button className="btn">Проанализировать</button>
            </div>

            <div className="request-queue">
              <h2>Очередь запросов</h2>

              <div className="table">
                <table>
                  <thead>
                    <tr className="sticky">
                      <th><span className="current">ID</span></th>
                      <th><span>Название запроса</span></th>
                      <th><span>Тип</span></th>
                      <th><span>Дата создания</span></th>
                      <th><span>Статус</span></th>
                    </tr>
                  </thead>
                  <tbody>

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
                  </tbody>
                </table>
              </div>
            </div>

          </div>


        </section>
      </main>
    </div>
  )
}
export default Analyze;