import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EDIT_TRAVEL, DRAFT_PAGE } from '../../utils/consts'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTravels,
  selectTravelList,
} from '../../redux/slices/myTravelListSlice'
import SingleTravelInfo from './SingleTravelInfo'
import styles from './DraftList.module.css'
import ModalWindow from './ModalWindowForDelete'
import ModalWindowForAddTravel from './ModalWindowForAddTravel'

function DraftList() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [updateTravelList, setUpdateTravelList] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const dispatch = useDispatch()
  const draftTravels = useSelector(selectTravelList)

  useEffect(() => {
    dispatch(fetchTravels())
  }, [updateTravelList])

  return (
    <div className={styles.draft_mainDiv}>
      <ModalWindowForAddTravel
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <button onClick={openModal}>Добавить новое путешествие</button>
      <div className={styles.draft_list}>
        {draftTravels.map((travel) => {
          return (
            <SingleTravelInfo
              updateTravelList={updateTravelList}
              setUpdateTravelList={setUpdateTravelList}
              key={travel.id}
              travel={travel}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DraftList
