import React from 'react';

const RecoveryHeader = ({ title, description }) => {
      return (
            <React.Fragment>
                  <span className="form-reg__title">{title}</span>
                  <span className="form-reg__text form-reg__text--gray">{description}</span>
            </React.Fragment>
      );
}
export default RecoveryHeader;