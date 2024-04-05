import styles from './CountryList.module.css'
import { countryList } from '../../../03-organisms/data/countryArr'
import SingleCountry from './SingleCountry'
import { useEffect, useRef, React, useState } from 'react'

function CountryList({ pushTravel, countryTravel, inputValue }) {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [isReady, setIsReady] = useState(false)
  const ref = useRef(null)

  const handleEventClick = () => {
    ref.current.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    const regexp = new RegExp(`^${inputValue}.*`, 'i')
    setSelectedCountry(countryList.find((country) => regexp.test(country)))
    isReady ? setIsReady(false) : setIsReady(true)
  }, [inputValue])

  useEffect(() => {
    if (selectedCountry) {
      handleEventClick()
    }
  }, [isReady])

  return (
    <div>
      <ul className={styles.ul_main}>
        {countryList.map((country) => {
          return (
            <div key={country} ref={country === selectedCountry ? ref : null}>
              <SingleCountry
                pushTravel={pushTravel}
                country={country}
                countryTravel={countryTravel}
              />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default CountryList
