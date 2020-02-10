import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalIndicated } from '../../../store/actions';

const ModalShowMessage = ({ title, action }) => {
      const dispatch = useDispatch();
      const modal = useSelector(state => state.modalIndicated);
      return (
            <div id="modal-message" className="modal">
                  <h2 className="text-center">{title}</h2>

                  <span className="btn-center">
                        <span onClick={e => dispatch(modalIndicated({ isOpen: !modal.isOpen }))} className="btn">{action}</span>
                  </span>
            </div>
      );
}

export default ModalShowMessage;