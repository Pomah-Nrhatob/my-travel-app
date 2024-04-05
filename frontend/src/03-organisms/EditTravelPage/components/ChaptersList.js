import React, { useEffect, useState } from 'react'
import styles from './ChaptersList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addChapter,
  fetchChaptersFromDb,
  selectChapters,
} from '../../../redux/slices/chaptersOfTravelListSlice'
import TextCreator from './TextCreator'
import { useParams } from 'react-router-dom'
import { createTravelWithId } from '../utils/createTravelWithId'
import { $host } from '../../../api'
import ModalWindow from '../../../04-pages/DrafrPage/ModalWindowForDelete'

function ChaptersList({ fetchAddChapter, travelId }) {
  const [updateTravelList, setUpdateTravelList] = useState(true)
  const id = useParams()
  // const chaptersOfTravel = useSelector(selectChapters).filter(
  //   (chapter) => chapter.travelId == id.id
  // )
  const dispatch = useDispatch()

  const fetchOneTravelChapter = async (id) => {
    try {
      const { data } = await $host.get(`/chapter/${id}`, id)
      dispatch(fetchChaptersFromDb(data))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchOneTravelChapter(travelId)
  }, [updateTravelList])

  const chapters = useSelector(selectChapters)

  const handleAddNewChapter = () => {
    dispatch(
      addChapter({
        title: '',
        content: '',
      })
    )
  }

  return (
    <>
      {[...chapters]
        .sort(function (a, b) {
          return a.id - b.id
        })
        .map((chapter) => {
          return (
            <TextCreator
              travelId={travelId}
              updateTravelList={updateTravelList}
              setUpdateTravelList={setUpdateTravelList}
              fetchAddChapter={fetchAddChapter}
              key={chapter.id}
              chapter={chapter}
            />
          )
        })}
      {id.id ? (
        <button className={styles} onClick={handleAddNewChapter}>
          Добавить новую главу
        </button>
      ) : (
        ''
      )}
    </>
  )
}

export default ChaptersList
