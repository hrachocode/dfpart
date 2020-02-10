import React from 'react'
const ProfileAddLk = () => {
    return (
        <div id="profile-add-lk" style={{display: 'none'}}className="modal">
    <h2>Мои рекламные кабинеты ВК</h2>
    <p>Добавьте новые рекламные кабинеты для быстрого экспорта статистики.</p>

    <div className="id-lk">
      <div className="form-group">
        <input type="text" name="text" autocomplete="off" required />
        <label htmlFor="text" className="label-name">
          <span className="content-name">
            ID рекламного кабинета

          </span>
        </label>
      </div>
      <a href="" className="btn">Добавить</a>
    </div>

    <div className="form-group form-group--max">
      <div className="loaded-file">
        Название рекламного кабинета
        <span className="pre-result">ID: community_name</span>
        <a href="#"><img src="images/close.svg" className="Close" /></a>
      </div>
    </div>

    <div className="form-group form-group--max">
      <div className="loaded-file">
        Ещё одно название
        <span className="pre-result">ID: groupname</span>
        <a href="#"><img src="images/close.svg" className="Close" /></a>
      </div>
    </div>

    <div className="form-group form-group--max">
      <div className="loaded-file">
        Рекламный кабинет
        <span className="pre-result">ID: another_id</span>
        <a href="#"><img src="images/close.svg" className="Close" /></a>
      </div>
    </div>

  </div>
    )
}
export default ProfileAddLk;