import styles from './SelectedCountry.module.css'
import { IoMdClose } from 'react-icons/io'

function SelectedCountry({ country, deleteCountry }) {
  return (
    <div className={styles.selectedCountry_main}>
      <span>{country}</span>
      <IoMdClose
        onClick={() => deleteCountry(country)}
        style={{ cursor: 'pointer' }}
        size="1rem"
      />
    </div>
  )
}

export default SelectedCountry
