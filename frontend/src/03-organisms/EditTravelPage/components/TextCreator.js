import React, { useEffect, useRef, useState } from 'react'
import styles from './TextCreator.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeChapter,
  selectChapters,
} from '../../../redux/slices/chaptersOfTravelListSlice'
import TextEditor from '../../../02-templates/TextEditor/components/TextEditor'
import { deleteChapter, updateChapter } from '../../../api/chaptersApi'
import { convertFromRaw, convertToRaw } from 'draft-js'
import ModalWindow from '../../../04-pages/DrafrPage/ModalWindowForDelete'

function TextCreator({
  chapter,
  fetchAddChapter,
  updateTravelList,
  setUpdateTravelList,
  travelId,
}) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  const [titleState, setTitleState] = useState('')
  const [contentState, setContentState] = useState('')
  const [focus, setFocus] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTitleState(chapter.title)
    if (chapter.content.length > 0) {
      setContentState(JSON.parse(chapter.content))
    }
  }, [chapter])

  const handleSaveTitle = () => {
    dispatch(changeChapter({ ...chapter, title: titleState }))
  }
  const handleSaveText = (text) => {
    dispatch(changeChapter({ ...chapter, text: text }))
  }

  const handleUpdateChapter = () => {
    updateChapter({
      title: titleState,
      content: contentState,
      id: chapter.id,
    })
  }

  const handleAddChapter = () => {
    fetchAddChapter(titleState, contentState)
  }

  const handleDeleteChapter = () => {
    deleteChapter(chapter.id)
    updateTravelList ? setUpdateTravelList(false) : setUpdateTravelList(true)
  }

  return (
    <>
      <div className={styles.modal_none}>
        <ModalWindow
          fnFetch={handleDeleteChapter}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          item={'главу'}
        />
      </div>
      <div
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        className={focus ? styles.main_active : styles.main}
      >
        <button
          onClick={() =>
            chapter.id ? handleUpdateChapter() : handleAddChapter()
          }
        >
          Сохранить изменения
        </button>
        <button onClick={openModal} className={styles.delete_btn}>
          Удалить главу
        </button>
        <div className={styles.chapter_info}>
          <h3>Название главы:</h3>
          <input
            onChange={(e) => {
              setTitleState(e.target.value)
            }}
            // onBlur={() => {
            //   handleSaveTitle()
            // }}
            value={titleState}
            placeholder="Введите название главы..."
            className={styles.textTitle}
          />
        </div>
        <TextEditor
          contentState={contentState}
          setContentState={setContentState}
          chapter={chapter}
          handleSaveText={handleSaveText}
        />
      </div>
    </>
  )
}

export default TextCreator
