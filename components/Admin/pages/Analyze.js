import React, { useRef, useEffect } from 'react';
import Aside from '../includes/Aside';
import Header from '../includes/Header'
import { getAnalyzeData, handleUserIds, abortFile, getRequests } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { errorIndicated, setAnalyzeData } from '../../../store/actions';
import PopupReminder from '../Popup/popupReminder';

import closeIcon from '../../assets/images/close.svg';
import ModalShowMessage from '../Modal/modalShowMessage';

const Analyze = () => {
  const file = useRef(null);
  const requestName = useRef(null);
  const errorMessage = useSelector(state => state.errorIndicated);
  const getUserRequests = useSelector(state => state.request);
  const dispatch = useDispatch();
  const history = useHistory();
  const popup = useSelector(state => state.popupIndicated);
  const modal = useSelector(state => state.modalIndicated);

  useEffect(() => {
    (async () => await getRequests(dispatch))();
  }, [dispatch])
  
  return (
    <div>  
      {popup.isOpen && <PopupReminder />}
      {modal.isOpen && <ModalShowMessage title={modal.content.title} action={modal.content.action} />}

      <main>
        <Aside />
        <section className="content">
          <Header title="Анализ аудитории" description="Анализ аудитории позволит получить психологический потртет вашей целевой аудитории. Это поможет эффективнее управлять рекламными кампаниями, персонализируя объявления под каждый сегмент." />


          <div className="content-block">

            <h2>Создать запрос</h2>
            <p className="size-md">После создания запроса он отправится в очередь на анализ. Сбор данных дело не быстрое, но вы всегда сможете узнать о его состоянии в очереди. Как только мы завершим анализ, вам придет уведомление.</p>

            <div className="form">
              <div className="form-group">
                <input type="text" name="text" ref={requestName} autoComplete="off" required />
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

              <div className="form-group file-processor hide">
                <div className="loaded-file">
                  <span className='file-name'>Файл заргужается</span>
                  <span className="pre-result">Количество ID в файле: <span className='file-length'>117</span></span>
                  <span className='close-file'><img onClick={e => abortFile()} src={closeIcon} className="Close" /></span>
                </div>
                <div className="load-file">
                  <div className="name">Файл загружается</div>
                  <span className="progress" style={{ width: '40%' }}></span>
                </div>
              </div>

              <div className="form-group form-group--inline">
                <input accept='.txt, .csv, .xls, .xlsx' type="file" name="photo" id="upload-user-ids" ref={file} onChange={e => handleUserIds(file)} />
                <a className="btn-gray">Загрузить файл</a>
                <span className="form-group-text">Вставьте ссылки или ID интересующих вас сообществ или пользоватей ВК по одному в строке. Также вы можете загрузить данные в формате txt, csv, xls, xlsx.</span>
              </div>

              <button className="btn" onClick={e => requestName.current.value !== "" ? getAnalyzeData({ file, requestName: requestName.current.value, modal }, dispatch, e.target) : dispatch(errorIndicated('Поля имя запроса обязательно'))}>Проанализировать</button>
              {errorMessage && <p>{errorMessage}</p>}
            </div>

            <div className="request-queue">
              <h2>Очередь запросов</h2>

              <div className="table">
                {getUserRequests.length > 0 ? <table>
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
                    {getUserRequests.map(request => {
                      return (
                        <tr key={request.id} onClick={e => history.push(`/analyze/${request.id}`)}>
                          <td>{request.id}</td>
                          <td><span className="request-name">{request.name}</span></td>
                          <td>{request.type}</td>
                          <td>{`${request.date.substr(0, 9)}'в'${request.date.substr(11, 15)}`}</td>
                          <td><span className="request-status request-status--analize">{request.status}</span></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table> : <h2>У вас нету запросов</h2>}
              </div>
            </div>

          </div>


        </section>
      </main>
    </div>
  )
}
export default Analyze;