import { useState } from 'react'
import Modal from 'react-modal'
import styles from './ModalWindowForDelete.module.css'

function ModalWindow({ openModal, closeModal, modalIsOpen, fnFetch, item }) {
  const customStyle = {
    content: {
      border: '1px solid black',
      width: '350px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const deleteTravel = () => {
    closeModal()
    fnFetch()
  }

  return (
    <div>
      <Modal
        style={customStyle}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className={styles.modal_window}>
          <span>
            Вы уверены, что хотите удалить {item} путешествия безвозвратно?
          </span>
          <div className={styles.modal_buttons}>
            <button onClick={deleteTravel}>Да, уверен</button>
            <button onClick={closeModal}>Нет, оставить {item}</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalWindow
