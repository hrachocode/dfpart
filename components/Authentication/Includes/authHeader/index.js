import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

const AuthHeader = () => {
      const history = useHistory();
      return (
            <React.Fragment>
                  <span onClick={e => history.push('/')} className="form-reg__logo"><img src={Logo} alt="Logo"/></span>
                  <span className="form-reg__text">Привлекайте больше новых клиентов с помощью<br /> персонализации на основе психологии</span>
            </React.Fragment>
      );
}
export default AuthHeader;
