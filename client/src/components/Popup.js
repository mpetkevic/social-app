import React from 'react';

const Popup = (props) => {
  return (
    <div className="popup">
      {props.children}
      <div className="confirm" onClick={() => {
        props.togglePopup();
        props.removeAllItems();
      }}>Yes</div>
      <div className="confirm" onClick={props.togglePopup}>NO</div>
    </div>
  );
};

export default Popup;