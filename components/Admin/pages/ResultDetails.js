import React, { useEffect } from 'react';
import Aside from '../includes/Aside';
import { pieChartDrawer, barChartDrawer, directionChartDrawer, getExportedDataXLSX, getSingleRequest } from '../utils';
import { colors } from '../contants/colors';
import { translation } from '../contants/translations';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ResultDetails = ({ history }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const needYearsOldData = ["0-17", "18-21", "22-24", "25-27", "28-30", "31-35", "36-45", "46+"]
  const readyData = useSelector(state => state.analyzeData);

  useEffect(() => {
    (async () => {
      await getSingleRequest(id, dispatch);
      if (readyData) {
        pieChartDrawer(readyData.analyzeData.life_main_distibution, translation.life_main_distibution, colors, "life-main-distribution");
        pieChartDrawer(readyData.analyzeData.relations_distribution, translation.relations_distribution, colors, "relations-distribution");
        pieChartDrawer(readyData.analyzeData.people_main_distibution, translation.people_main_distibution, colors, "people-distribution");
        pieChartDrawer(readyData.analyzeData.psy_type_distribution, translation.psy_type_distribution, colors, "psy-distribution");
        pieChartDrawer(readyData.analyzeData.MBTI.types_distribution, translation.MBTI, colors, "mbti-distribution");

        barChartDrawer(readyData.userData, needYearsOldData, "bar-chart");

        directionChartDrawer(readyData.analyzeData.MBTI.types_distribution);
      }
    })()

  }, [id, dispatch]);

  return (
    <main>
      <Aside />
      <section className="content">
        <div className="content-top-text">
          <div className="back-btn" onClick={e => history.goBack()}><span>Назад</span></div>
          <h1 className="margin-small">{readyData && readyData.name} <a href="#" className="edit-btn"></a></h1>
          <p className="size-lg"><strong>{readyData && readyData.userData.length}</strong> пользователей</p>
          <div className="profile-btn">
            <button onClick={e => readyData && getExportedDataXLSX(e.target, readyData.data, needYearsOldData)} className="btn">Экспорт статистики в XLSX</button>
            <button className="btn">Экспорт профилей в рекламный кабинет</button>
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
            <h2>Распределение жизни</h2>
            <p>Здесь должно быть небольшое описание данных, показаных на графике. В зависимости от количества столбцов их ширина может варьироваться. Если значений у столбцов слишком много — чередуем их через один. У первого столбца есть подпись, у второго нет, у третьего есть итд.</p>

            <div className="doughnut-content twoline">
              <canvas id="life-main-distribution"></canvas>
            </div>
          </div>

          <div className="details-item">
            <h2>Семейное положение (Пай-чарт график)</h2>
            <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>

            <div className="doughnut-content">
              <canvas id="relations-distribution"></canvas>
            </div>

          </div>

          <div className="details-item">
            <h2>Характер</h2>
            <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
            <div className="doughnut-content">
              <canvas id="people-distribution"></canvas>
            </div>

          </div>
          <div className="details-item">
            <h2>Направленность (Процентное соотношение)</h2>
            <p>Здесь должно быть небольшое описание данных, показанных на графике. Можно брать любые цвета, главное, чтобы они были примерно в одой тональности. Ещё я не понял, что означает черта посередине — к ней, вероятно, нужна подпись.</p>

            <div className="directing-block">

              <div className="directing-item">
                <div className="directing-item__head">
                  <div className="directing-item__procent"><strong>29,7%</strong> <a data-fancybox="modal2" data-src="#results-1" href="#">Экстраверт</a></div>
                  <div className="directing-item__title">Направленность</div>
                  <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-2" href="#">Интроверт</a> <strong>70,3%</strong></div>
                </div>
                <div className="directing-item__content">
                  <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style={{ width: "33%" }}></span>
                  <span className="directing-item__line" style={{ left: "50%" }}></span>
                  <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style={{ width: "67%" }}></span>
                </div>
              </div>

              <div className="directing-item">
                <div className="directing-item__head">
                  <div className="directing-item__procent"><strong>15%</strong> <a data-fancybox="modal2" data-src="#results-3" href="#">Ощущения</a></div>
                  <div className="directing-item__title">Восприятие</div>
                  <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-4" href="#">Интуиция</a> <strong>85%</strong></div>
                </div>
                <div className="directing-item__content">
                  <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style={{ width: "43%" }}></span>
                  <span className="directing-item__line" style={{ left: "30%" }}></span>
                  <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style={{ width: "57%" }}></span>
                </div>
              </div>

              <div className="directing-item">
                <div className="directing-item__head">
                  <div className="directing-item__procent"><strong>59,3%</strong> <a data-fancybox="modal2" data-src="#results-5" href="#">Логика</a></div>
                  <div className="directing-item__title">Принятие решений</div>
                  <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-6" href="#">Эмоции</a> <strong>40,7%</strong></div>
                </div>
                <div className="directing-item__content">
                  <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style={{ width: "23%" }}></span>
                  <span className="directing-item__line" style={{ left: "70%" }}></span>
                  <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style={{ width: "77%" }}></span>
                </div>
              </div>

              <div className="directing-item">
                <div className="directing-item__head">
                  <div className="directing-item__procent"><strong>64%</strong> <a data-fancybox="modal1" data-src="#results-7" href="#">Рациональность</a></div>
                  <div className="directing-item__title">Тактика</div>
                  <div className="directing-item__procent"><a data-fancybox="modal2" data-src="#results-8" href="#">Иррациональность</a> <strong>36%</strong></div>
                </div>
                <div className="directing-item__content">
                  <span className="directing-item__fill tooltip" title="This is my span's tooltip message!2" style={{ width: "75%" }}></span>
                  <span className="directing-item__line" style={{ left: "10%" }}></span>
                  <span className="directing-item__clear tooltip" title="This is my span's tooltip message!1" style={{ width: "25%" }}></span>
                </div>
              </div>


            </div>

          </div>
          <div className="details-item">
            <h2>Психотипы SPECTRUM</h2>
            <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
            <div className="doughnut-content twoline">
              <canvas id="psy-distribution"></canvas>
            </div>

          </div>
          <div className="details-item">
            <h2>Психотипы MBTI</h2>
            <p>Здесь должно быть небольшое описание данных, показаных на графике. При наведении на участок графика — показываем соответствующее значение в процентном виде и в количественном.
            В зависимости от количества участков мы выводим нужно количество элементов легены сбоку.</p>
            <div className="doughnut-content twoline">
              <canvas id="mbti-distribution"></canvas>
            </div>
          </div>

        </div>


      </section>
    </main>
  )
}
export default ResultDetails;