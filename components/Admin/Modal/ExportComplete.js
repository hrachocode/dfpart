import React from 'react';
const ExportComplete = () => {
    return (
        <div id="export-complete" style={{display:'none'}} className="modal">
        <h2 className="text-center">Выбранные сегменты<br />
          успешно экспортированы.</h2>
    
        <span className="btn-center">
          <a href="" className="btn">Продолжить работу</a>
        </span>
    
      </div>
    )
}
export default ExportComplete;