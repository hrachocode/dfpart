import React from 'react';
const ResultsExportExpert = () => {
    return (
        <div id="results-export--expert" style={{display: 'none'}} className="modal">
        <h2>Экспорт в рекламный кабинет</h2>
        <p>Для загрузки сегмента в рекламный кабинет укажите его ID и введите название для аудитории. Обратите внимание, что выбор отдельных сегментов возможен только при наличии <a href="">специальной лицензии</a>.</p>
    
        <div className="drop" id="drop_2">
          <div className="option active placeholder" data-value="placeholder">
            <div className="option-item">
              Рекламный кабинет<span>Необходимо выбрать один или несколько</span>
            </div>
          </div>
    
          <div className="option" data-value="drop">
            <div className="option-item">
              Вариант 1<span>ID: groupname</span>
            </div>
          </div>
          <div className="option" data-value="select1">
            <div className="option-item">
              Вариант 2<span>ID: community_name</span>
            </div>
          </div>
          <div className="option" data-value="select">
            <div className="option-item">
              Вариант 3<span>ID: community_name</span>
            </div>
          </div>
          <div className="option" data-value="wow1">
            <div className="option-item">
              Вариант 4<span>ID: another_id</span>
            </div>
          </div>
          <div className="option" data-value="wow">
            <div className="option-item">
              Вариант 5<span>ID: another_id</span>
            </div>
          </div>
          <div className="option" data-value="wow2">
            <div className="option-item">
              Вариант 6<span>ID: another_id</span>
            </div>
          </div>
          
    
        </div>
    
        <div className="form-group form-group--max">
          <input type="text" name="text" autocomplete="off" required />
          <label for="text" className="label-name">
            <span className="content-name">
              Название для аудитории
    
            </span>
          </label>
        </div>
    
        <span className="content-title">Выбор сегментов для экспорта</span>
    
    
        <ul className="filters">
          <li><a href="#" data-src="rom" id="sel_rom" onclick="selectFilter(this); return false;">Романтики</a></li>
          <li><a href="#" data-src="pro" id="sel_pro" onclick="selectFilter(this); return false;">Прагматики</a></li>
          <li><a href="#" data-src="nov" id="sel_nov" onclick="selectFilter(this); return false;">Новаторы</a></li>
          <li><a href="#" data-src="kon" id="sel_kon" onclick="selectFilter(this); return false;">Консерваторы</a></li>
    
        </ul>
    
    
        <div className="tabgroup--modal">
    
          <div className="export-columns">
            <div className="export-column">
                <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border rom" onchange="checkFilter(this, 'rom');" />
                  Посредник - ISFP (30)
                </label>
              </div>
               <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border rom" onchange="checkFilter(this, 'rom');" />
                  Хранитель - ISFJ (74)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border rom" onchange="checkFilter(this, 'rom');" />
                  Политик - ESFP (51)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border rom" onchange="checkFilter(this, 'rom');" />
                  Энтузиаст - ESFJ (275)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border pro" onchange="checkFilter(this, 'pro');" />
                  Аналитик - INTJ (893)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border pro" onchange="checkFilter(this, 'pro');" />
                  Критик - INTP (1318)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border pro" onchange="checkFilter(this, 'pro');" />
                  Искатель - ENTP (698)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border pro" onchange="checkFilter(this, 'pro');" />
                  Предприниматель - ENTJ (538)
                </label>
              </div>
              
             
    
            </div>
            <div className="export-column">
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border nov" onchange="checkFilter(this, 'nov');" />
                  Советчик - ENFP (660)
                </label>
              </div>
              
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border nov" onchange="checkFilter(this, 'nov');" />
                  Наставник - ENFJ (385)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border nov" onchange="checkFilter(this, 'nov');" />
                  Лирик - INFP (212)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border nov" onchange="checkFilter(this, 'nov');" />
                  Гуманист - INFJ (59)
                </label>
              </div>
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border kon" onchange="checkFilter(this, 'kon');" />
                  Инспектор - ISTJ (2097)
                </label>
              </div>
              
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border kon" onchange="checkFilter(this, 'kon');" />
                  Администратор - ESTJ (649)
                </label>
              </div>
              
              
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border kon" onchange="checkFilter(this, 'kon');" />
                  Маршал - ESTP (106)
                </label>
              </div>
              
              <div className="export-item">
                <label className="label--checkbox ">
                  <input type="checkbox" className="checkbox checkbox--border kon" onchange="checkFilter(this, 'kon');" />
                  Мастер - ISTP (568)
                </label>
              </div>
    
            </div>
          </div>
    
    
        </div>
    
        <button className="btn">Экспортировать</button>
      </div>
    
    )
}
export default ResultsExportExpert;