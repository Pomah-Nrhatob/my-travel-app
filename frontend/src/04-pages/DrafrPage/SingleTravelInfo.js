import React, { useState } from 'react'
import styles from './SingleTravelInfo.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { EDIT_TRAVEL, DRAFT_PAGE } from '../../utils/consts'
import { deleteTravel } from '../../api/travelsApi'
import ModalWindow from './ModalWindowForDelete'
import { addSingleTravel } from '../../redux/slices/singleTravelSlice'
import { useDispatch } from 'react-redux'

function SingleTravelInfo({ travel, updateTravelList, setUpdateTravelList }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const history = useNavigate()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const deleteTravelFetch = () => {
    deleteTravel(travel.id)
    updateTravelList ? setUpdateTravelList(false) : setUpdateTravelList(true)
  }

  const changeSingleTravelInfo = () => {
    dispatch(addSingleTravel(travel))
    history(`${DRAFT_PAGE}${EDIT_TRAVEL}/${travel.id_for_slug}`)
  }

  return (
    <div className={styles.travelInfo_main}>
      <div className={styles.modal_none}>
        <ModalWindow
          fnFetch={deleteTravelFetch}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          item={'черновик'}
        />
      </div>
      <h1>{travel.title}</h1>
      <div className={styles.pannel_buttons}>
        <button onClick={changeSingleTravelInfo}>Редактировать</button>
        <button onClick={openModal}>Удалить</button>
      </div>
    </div>
  )
}

export default SingleTravelInfo
