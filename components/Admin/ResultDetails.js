import React from 'react';
import Aside from './Aside'
const ResultDetails = () => {
    return (
        <main>
    <Aside />

      
    <section className="content">

      <div className="content-top-text">

        <div className="back-btn"><a href="">Назад</a></div>

        <h1 className="margin-small">NFS HEAT test by Alex <a href="#" className="edit-btn"></a></h1>
        <p className="size-lg"><strong>9 039</strong> пользователей</p>
        <div className="profile-btn">
          <a href="" className="btn">Экспорт статистики в XLSX</a>
          <a href="" className="btn">Экспорт профилей в рекламный кабинет</a>
        </div>
      </div>


      <div className="content-block">
	      


        <div className="details-item">
          <h2>Возраст (Обычный график)</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. В зависимости от количества столбцов их ширина может варьироваться. Если значений у столбцов слишком много — чередуем их через один. У первого столбца есть подпись, у второго нет, у третьего есть итд.</p>
          
          <div className="bar-chart">
              <canvas id="bar-chart" width="400" height="200"></canvas>
              <span className="bar-mask"></span>
          </div>
        
        </div>

        <div className="details-item">
          <h2>Пол (Пай-чарт)</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. В зависимости от количества столбцов их ширина может варьироваться. Если значений у столбцов слишком много — чередуем их через один. У первого столбца есть подпись, у второго нет, у третьего есть итд.</p>

          <div className="doughnut-content twoline">
            <div id="doughnutChart" className="chart"></div>

            <div className="doughnut-list">
              <div className="doughnut-item">
                <span className="doughnut-item__procent">95%</span>
                <span className="doughnut-item__color" style="background: #4de200"></span>
                <span className="doughnut-item__title">Мужчины <span className="dop">Лучшие</span></span>
              </div>
              <div className="doughnut-item">
                <span className="doughnut-item__procent">5%</span>
                <span className="doughnut-item__color" style="background: #80adff"></span>
                <span className="doughnut-item__title">Женщины <span className="dop">Тоже</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="details-item">
          <h2>Семейное положение (Пай-чарт график)</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>

          <div className="doughnut-content">
            <div id="doughnutChart2" className="chart"></div>

            <div className="doughnut-list">
              <div className="doughnut-item">
                <span className="doughnut-item__procent">31%</span>
                <span className="doughnut-item__color" style="background: #80adff"></span>
                <span className="doughnut-item__title">В браке</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">27%</span>
                <span className="doughnut-item__color" style="background: #186aff"></span>
                <span className="doughnut-item__title">Одинок</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">20%</span>
                <span className="doughnut-item__color" style="background: #ff186b"></span>
                <span className="doughnut-item__title">В активном поиске</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">11%</span>
                <span className="doughnut-item__color" style="background: #ff0000"></span>
                <span className="doughnut-item__title">Влюблен</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">6%</span>
                <span className="doughnut-item__color" style="background: #ff6f00"></span>
                <span className="doughnut-item__title">В отношениях</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">4%</span>
                <span className="doughnut-item__color" style="background: #44c800"></span>
                <span className="doughnut-item__title">Все сложно</span>
              </div>

              <div className="doughnut-item">
                <span className="doughnut-item__procent">1%</span>
                <span className="doughnut-item__color" style="background: #4de200"></span>
                <span className="doughnut-item__title">Помолвлены</span>
              </div>
            </div>
          </div>

        </div>

        <div className="details-item">
          <h2>Города</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
          <div className="doughnut-content">
            <div id="doughnutChart3" className="chart"></div>

            <div className="doughnut-list twoline">
              <div className="doughnut-item">
                <span className="doughnut-item__procent">95%</span>
                <span className="doughnut-item__color" style="background: #4de200"></span>
                <span className="doughnut-item__title">Мужчины <span className="dop">Лучшие</span></span>
              </div>
              <div className="doughnut-item">
                <span className="doughnut-item__procent">5%</span>
                <span className="doughnut-item__color" style="background: #80adff"></span>
                <span className="doughnut-item__title">Женщины <span className="dop">Тоже</span></span>
              </div>
            </div>
          </div>

        </div>
        <div className="details-item">
          <h2>Направленность (Процентное соотношение)</h2>
          <p>Здесь должно быть небольшое описание данных, показанных на графике. Можно брать любые цвета, главное, чтобы они были примерно в одой тональности. Ещё я не понял, что означает черта посередине — к ней, вероятно, нужна подпись.</p>

          <div className="directing-block">

            <div className="directing-item">
              <div className="directing-item__head">
                <div className="directing-item__procent"><strong>29,7%</strong> <a data-fancybox="modal2" data-src="#results-1" href="javascript:;">Экстраверт</a></div>
                <div className="directing-item__title">Направленность</div>
                <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-2" href="javascript:;">Интроверт</a> <strong>70,3%</strong></div>
              </div>
              <div className="directing-item__content">
                <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2"  style="width: 33%"></span>
                <span className="directing-item__line" style="left: 50%"></span>
                <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style="width: 67%"></span>
              </div>
            </div>

            <div className="directing-item">
              <div className="directing-item__head">
                <div className="directing-item__procent"><strong>15%</strong> <a data-fancybox="modal2" data-src="#results-3" href="javascript:;">Ощущения</a></div>
                <div className="directing-item__title">Восприятие</div>
                <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-4" href="javascript:;">Интуиция</a> <strong>85%</strong></div>
              </div>
              <div className="directing-item__content">
                <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2"  style="width: 43%"></span>
                <span className="directing-item__line" style="left: 30%"></span>
                <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style="width: 57%"></span>
              </div>
            </div>

            <div className="directing-item">
              <div className="directing-item__head">
                <div className="directing-item__procent"><strong>59,3%</strong> <a data-fancybox="modal2" data-src="#results-5" href="javascript:;">Логика</a></div>
                <div className="directing-item__title">Принятие решений</div>
                <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-6" href="javascript:;">Эмоции</a> <strong>40,7%</strong></div>
              </div>
              <div className="directing-item__content">
                <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style="width: 23%"></span>
                <span className="directing-item__line" style="left: 70%"></span>
                <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style="width: 77%"></span>
              </div>
            </div>

            <div className="directing-item">
              <div className="directing-item__head">
                <div className="directing-item__procent"><strong>64%</strong> <a data-fancybox="modal1" data-src="#results-7" href="javascript:;">Рациональность</a></div>
                <div className="directing-item__title">Тактика</div>
                <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-8" href="javascript:;">Иррациональность</a> <strong>36%</strong></div>
              </div>
              <div className="directing-item__content">
                <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style="width: 75%"></span>
                <span className="directing-item__line" style="left: 10%"></span>
                <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style="width: 25%"></span>
              </div>
            </div>


          </div>

        </div>
        <div className="details-item">
          <h2>Психотипы SPECTRUM</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
          <div className="doughnut-content twoline">
            <div id="doughnutChart4" className="chart"></div>

            <div className="doughnut-list">
              <div className="doughnut-item">
                <span className="doughnut-item__procent">95%</span>
                <span className="doughnut-item__color" style="background: #4de200"></span>
                <span className="doughnut-item__title">Мужчины <span className="dop">Лучшие</span></span>
              </div>
              <div className="doughnut-item">
                <span className="doughnut-item__procent">5%</span>
                <span className="doughnut-item__color" style="background: #80adff"></span>
                <span className="doughnut-item__title">Женщины <span className="dop">Тоже</span></span>
              </div>
            </div>
          </div>

        </div>
        <div className="details-item">
          <h2>Психотипы MBTI</h2>
          <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
          <div className="doughnut-content twoline">
            <div id="doughnutChart5" className="chart"></div>

            <div className="doughnut-list">
              <div className="doughnut-item">
                <span className="doughnut-item__procent">95%</span>
                <span className="doughnut-item__color" style="background: #4de200"></span>
                <span className="doughnut-item__title">Мужчины <span className="dop">Лучшие</span></span>
              </div>
              <div className="doughnut-item">
                <span className="doughnut-item__procent">5%</span>
                <span className="doughnut-item__color" style="background: #80adff"></span>
                <span className="doughnut-item__title">Женщины <span className="dop">Тоже</span></span>
              </div>
            </div>
          </div>

        </div>

      </div>


    </section>
  </main>
    )
}
export default ResultDetails;