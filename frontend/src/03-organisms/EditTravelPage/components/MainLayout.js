import styles from './MainLayout.module.css'
import TravelGeneralInfo from './TravelGeneralInfo'

import ChaptersList from './ChaptersList'
import { useSelector } from 'react-redux'
import { selectTravelList } from '../../../redux/slices/myTravelListSlice'
import { useParams } from 'react-router-dom'
import { fetchAddChapter } from '../../../api/chaptersApi'
import { selectSingleTravel } from '../../../redux/slices/singleTravelSlice'

function MainLayout() {
  const travelList = useSelector(selectTravelList)
  const singeTravel = useSelector(selectSingleTravel)

  let travel = {
    title: '',
    countries: [],
  }

  const id = useParams()

  if (id.id) {
    travel = travelList.find((travel) => travel.id_for_slug === id.id)
  }

  const fetchChapter = (title, content) => {
    fetchAddChapter({
      title: title,
      content: content,
      travel_id: singeTravel.id,
    })
  }

  return (
    <main className={styles.main_page}>
      <TravelGeneralInfo />
      <ChaptersList travelId={singeTravel.id} fetchAddChapter={fetchChapter} />
    </main>
  )
}

export default MainLayout
