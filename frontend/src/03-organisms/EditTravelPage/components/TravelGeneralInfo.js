import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './TravelGeneralInfo.module.css'
import { Link, useParams } from 'react-router-dom'
import { DRAFT_PAGE, EDIT_TRAVEL } from '../../../utils/consts'
import { createTravelWithId } from '../utils/createTravelWithId'
import {
  addTravel,
  changeTravel,
  selectTravelList,
} from '../../../redux/slices/myTravelListSlice'
import { useDispatch, useSelector } from 'react-redux'

import SelectCountry from '../../../02-templates/SelectCountry/components/SelectCountry'
import { updateTravel, createTravels } from '../../../api/travelsApi'
import { selectSingleTravel } from '../../../redux/slices/singleTravelSlice'

function TravelGeneralInfo() {
  const [generalInfoState, setGeneralInfoState] = useState({})
  const singleTravel = useSelector(selectSingleTravel)

  const id = useParams()

  useEffect(() => {
    setGeneralInfoState(singleTravel)
  }, [])

  const dispatch = useDispatch()

  const createTravel = createTravelWithId({
    title: generalInfoState.title,
    countries: generalInfoState.countryTravels,
  })
  const travelActiveId = createTravel.id_for_slug

  const handleAddTravel = () => {
    // dispatch(addTravel(createTravel))
    // setGeneralInfoState(createTravel)
    const fnAsync = async () => {
      const data = await createTravels({
        title: createTravel.title,
        countries: createTravel.countries,
        id_for_slug: createTravel.id_for_slug,
      })
      dispatch(addTravel(data))
    }
    fnAsync()
  }

  const handleSaveShange = () => {
    dispatch(changeTravel(generalInfoState))
    updateTravel({
      title: generalInfoState.title,
      countries: generalInfoState.countries,
      id: generalInfoState.id,
    })
  }

  const submitCountry = (country) => {
    setGeneralInfoState({
      ...generalInfoState,
      countries: [...generalInfoState.countries, country],
    })
  }

  const deleteCountry = (deletedCountry) => {
    setGeneralInfoState({
      ...generalInfoState,
      countries: generalInfoState.countries.filter(
        (el) => el !== deletedCountry
      ),
    })
  }

  return (
    <div className={styles.generalInfo_main}>
      <SelectCountry
        generalInfoState={generalInfoState}
        submitCountry={submitCountry}
        deleteCountry={deleteCountry}
      />
      <textarea
        onChange={(e) =>
          setGeneralInfoState({ ...generalInfoState, title: e.target.value })
        }
        value={generalInfoState.title}
        placeholder="Введите название путешествия"
        className={styles.titleTravel_textarea}
      ></textarea>
      {id.id ? (
        <button onClick={handleSaveShange}>Сохранить изменения</button>
      ) : (
        <Link
          onClick={handleAddTravel}
          to={DRAFT_PAGE + EDIT_TRAVEL + `/${travelActiveId}`}
        >
          Добавить путешествие
        </Link>
      )}
    </div>
  )
}

export default TravelGeneralInfo
