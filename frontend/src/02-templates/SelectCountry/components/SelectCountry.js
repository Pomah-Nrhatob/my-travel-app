import { useEffect, useReducer, useRef, useState } from 'react'
import CountryList from './CountryList'
import styles from './SelectCountry.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import SelectedCountry from './SelectedCountry'

function SelectCountry({ submitCountry, generalInfoState, deleteCountry }) {
  const [countryTravel, setCoutryTravel] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [activeSelect, setActiveSelect] = useState(false)
  const selectCountryRef = useRef(null)

  useEffect(() => {
    if (generalInfoState.countries) {
      setCoutryTravel(generalInfoState.countries)
    }
  }, [generalInfoState])

  const handleFocusEditor = () => {
    setActiveSelect(true)
    selectCountryRef.current.focus()
  }

  const pushTravel = (country) => {
    submitCountry(country)
  }

  return (
    <div>
      <div className={styles.selectedCountry_list}>
        {countryTravel.map((country) => {
          return (
            <SelectedCountry
              deleteCountry={deleteCountry}
              key={country}
              country={country}
            />
          )
        })}
      </div>
      <div
        onFocus={() => setActiveSelect(true)}
        className={
          activeSelect
            ? styles.wrapper__form__container_active
            : styles.wrapper__form__container
        }
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите страну..."
          ref={selectCountryRef}
          type="text"
          className={styles.input_string}
        ></input>
        <label
          onClick={() => {
            return activeSelect ? setActiveSelect(false) : handleFocusEditor()
          }}
        >
          {activeSelect ? (
            <IoIosArrowUp size="1.3rem" color="gray" />
          ) : (
            <IoIosArrowDown size="1.3rem" color="gray" />
          )}
        </label>
        {activeSelect ? (
          <CountryList
            inputValue={inputValue}
            countryTravel={countryTravel}
            pushTravel={pushTravel}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default SelectCountry
