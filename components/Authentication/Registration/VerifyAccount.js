import React, { useEffect } from 'react';
import { verifyUserEmail } from '../utils';
import { useDispatch } from 'react-redux';

const VerifyAccount = ({ history }) => {
      const email = new URLSearchParams(document.location.search.substring(1)).get('mail');
      const token = new URLSearchParams(document.location.search.substring(1)).get('token');
      const dispatch = useDispatch()
      useEffect(() => {
            verifyUserEmail(email,token, history, dispatch);
      });
      return (
            <React.Fragment>
                  {/* {sentEmail.error && sentEmail.error} */}
            </React.Fragment>
      );
}

export default VerifyAccount;