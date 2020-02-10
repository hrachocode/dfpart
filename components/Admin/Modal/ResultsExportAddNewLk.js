import React from 'react'
const ResultsExportAddNewLk = () => {
    return (
        <div id="results-export--add-new-lk" style={{display: 'none'}} className="modal">
    <h2>Новый рекламный кабинет</h2>
    <p>Введите ID рекламного, который хотите добавить.</p>

    <div className="form-group form-group--max">
      <input type="text" name="text" autocomplete="off" required />
      <label for="text" className="label-name">
        <span className="content-name">
          ID рекламного кабинета

        </span>
      </label>
    </div>
    <a href="" className="btn">Добавить</a>
  </div>
    )
}
export default ResultsExportAddNewLk;