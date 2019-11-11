import React from 'react';
import Modal from 'react-modal';
import style from "./ActionSelection.module.scss"

export function ActionSelection(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.onRequestClose}
      className={style.action_selection}>
      <div className={style.modal_container}>
        <div className={style.card_slot}>
          {props.cardSlot}
        </div>
        <div className={style.content_slot}>
          {props.contentSlot}
        </div>
        <div className={style.button_slot}>
          {props.buttonSlot}
        </div>
      </div>
    </Modal>
  );
}