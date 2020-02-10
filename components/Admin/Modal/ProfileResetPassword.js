import React from 'react'
const ProfileResetPassword = () => {
    return (
        <div id="profile-reset-password" style={{display: 'none'}} className="modal">
    <h2>Изменение пароля</h2>
    <p>Рекомендуем придумать сложный пароль, например не менее 8 имволос, содержащий как минимум одну цифру и одну большую букву. Обязательно укажите текущий пароль.</p>

    <div className="reset-password">
      <div className="form-group">
        <input type="password" name="text" autocomplete="off" required />
        <label htmlFor="text" className="label-name">
          <span className="content-name">

            Старый пароль
          </span>
        </label>
      </div>
      <div className="form-group form-group--link">
        <a href="">Я не помню свой пароль</a>
      </div>
      <div className="form-group">
        <input type="password" name="text" autocomplete="off" required />
        <label htmlFor="text" className="label-name">
          <span className="content-name">
            Новый пароль

          </span>
        </label>
      </div>
      <div className="form-group">
        <input type="password" name="text" autocomplete="off" required />
        <label htmlFor="text" className="label-name">
          <span className="content-name">

            Повтор нового пароля
          </span>
        </label>
      </div>
    </div>


    <a href="" className="btn">Изменить пароль</a>
  </div>
    )
}
export default ProfileResetPassword;