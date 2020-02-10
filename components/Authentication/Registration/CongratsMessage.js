import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const CongratsMessage = ({ title, action }) => {
  return (
    <div className="form-reg">
      <span className="form-reg__logo"><img src={Logo} alt="Logo" /></span>
      <span className="form-reg__text form-reg__text--margin-small">{title}</span>
      <div className="form-reg__block">
        <span className="form-reg__bottom-link"><Link to="/">{action}</Link></span>
      </div>
    </div>
  )
}
export default CongratsMessage;