import styles from './TitleGeneralInfo.module.css'

function TitleGeneralInfo() {
  return (
    <textarea
      onChange={(e) =>
        setGeneralInfoState({ ...generalInfoState, title: e.target.value })
      }
      value={generalInfoState.title}
      placeholder="Введите название путешествия"
      className={styles.titleTravel_textarea}
    ></textarea>
  )
}

export default TitleGeneralInfo
