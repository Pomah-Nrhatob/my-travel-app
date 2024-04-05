import { useEffect, useState } from 'react'
import styles from './SingleCountry.module.css'

function SingleCountry({ country, pushTravel, countryTravel, ref }) {
  const [selectedCountry, setSelectedCountry] = useState(true)

  useEffect(() => {
    const selectCountry = countryTravel.includes(country)
    if (selectCountry) {
      setSelectedCountry(false)
    }
  }, [countryTravel])

  return (
    <>
      <li
        ref={ref}
        onClick={() => (selectedCountry ? pushTravel(country) : '')}
        className={
          selectedCountry
            ? styles.li_singleCountry
            : styles.li_singleCountry_deactive
        }
      >
        {country}
      </li>
      <hr />
    </>
  )
}

export default SingleCountry
