import React from 'react';
const ResultsExport = () => {
    return (
        <div id="results-export" style={{display: 'none'}} className="modal">
        <h2>Экспорт в рекламный кабинет</h2>
        <p>Для загрузки сегмента в рекламный кабинет укажите его ID и введите название для аудитории. Обратите внимание, что выбор отдельных сегментов возможен только при наличии <a href="">специальной лицензии</a>.</p>
    
        <div className="form-group form-group--max">
          <input type="text" name="text" autocomplete="off" required />
          <label for="text" className="label-name">
            <span className="content-name">
              ID рекламного кабинета
    
            </span>
          </label>
        </div>
    
        <div className="drop" id="drop_1">
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
    
        <a href="" className="btn-gray" data-fancybox="modal2" data-src="#results-export--add-new-lk" href="javascript:;">+ Добавить кабинет</a>
        
        <br/><br/><br/>
        <a href="" className="btn">Экспортировать</a>
      </div>
    )
}
export default ResultsExport;