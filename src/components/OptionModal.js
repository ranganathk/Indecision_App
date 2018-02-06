import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Modal"
    ariaHideApp={false}
    onRequestClose={props.clearSelectedOption}
  >
    <h1>Selected Button</h1>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.clearSelectedOption}
    >
      Close
    </button>
  </Modal>
);

export default OptionModal;
