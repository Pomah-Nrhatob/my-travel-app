import { useState } from 'react'
import styles from './ModalWindowForAddTravel.module.css'
import Modal from 'react-modal'
import { createTravels } from '../../api/travelsApi'
import { createTravelWithId } from '../../03-organisms/EditTravelPage/utils/createTravelWithId'
import { Link, useNavigate } from 'react-router-dom'
import { DRAFT_PAGE, EDIT_TRAVEL } from '../../utils/consts'
import { fetchTravels } from '../../redux/slices/myTravelListSlice'
import { useDispatch } from 'react-redux'
import { addSingleTravel } from '../../redux/slices/singleTravelSlice'

function ModalWindowForAddTravel({
  openModal,
  closeModal,
  modalIsOpen,
  deleteTravelFetch,
}) {
  const [fetchDataState, setFetchDataState] = useState(false)
  const [titleState, setTitleState] = useState('')

  const history = useNavigate()

  const dispatch = useDispatch()

  const fetchCreateTravel = () => {
    const createdTravel = createTravelWithId({ title: titleState })
    const fnA = async () => {
      try {
        const data = await createTravels(createdTravel)
        setFetchDataState(true)
        dispatch(fetchTravels())
        dispatch(addSingleTravel(data))
        history(`${DRAFT_PAGE}${EDIT_TRAVEL}/${data.id_for_slug}`)
      } catch (error) {}
    }
    fnA()
  }

  const customStyle = {
    content: {
      border: '1px solid black',
      width: '350px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  return (
    <div>
      <Modal
        style={customStyle}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className={styles.modal_window}>
          <textarea
            onChange={(e) => setTitleState(e.target.value)}
            value={titleState}
            placeholder="Введите название путешествия"
            className={styles.titleTravel_textarea}
          ></textarea>
          <div className={styles.modal_buttons}>
            <button onClick={fetchCreateTravel}>Создать путешествие</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalWindowForAddTravel
