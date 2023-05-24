import { Typography } from '../../../../styles/typography'
import { StyledCardContact } from './styles'
import { FaTrash } from 'react-icons/fa'
import { Button } from '../../../../styles/buttons'
import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'

export const CardContact = ({ tech }) => {
  const { setShowTechModal, setTech } = useContext(ContactContext)
  const handleShowModal = () => {
    setTech(tech)
    setShowTechModal(true)
  }

  return (
    <StyledCardContact onClick={handleShowModal}>
      <div>
        <Typography fonttype='title3' fontcolor='grey0'>
          {tech.title}
        </Typography>
        <Typography fonttype='headline' fontcolor='grey1'>
          {tech.status}
        </Typography>
      </div>
    </StyledCardContact>
  )
}
