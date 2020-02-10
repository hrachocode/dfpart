import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { popupIndicated } from '../../../store/actions';

const PopupReminder = () => {
      const dispatch = useDispatch();

      return (
            <div className="popup-reminder">
                  <div className="popup-reminder__text">
                        <div className="popup-reminder__title">Заканчивается лицензия</div>
                        <p>Через 3 дня закончится оплаченная лицензия, доступ к сервису будет ограничен.</p>
                  </div>

                  <Link to="" className="btn-pay">Оплатить</Link>
                  <p className="popup-reminder-close" onClick={e => dispatch(popupIndicated())}></p>
            </div>
      );
}

export default PopupReminder;
