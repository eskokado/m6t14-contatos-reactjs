/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { UserContext } from './UserContext'

export const ContactContext = createContext()

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [tech, setTech] = useState(null)
  const [techs, setTechs] = useState([])
  const [showTechModal, setShowTechModal] = useState(false)
  // const { user } = useContext(UserContext)

  // useEffect(() => {
  //   setTechs(user?.techs ? user.techs : [])
  // }, [user])

  const onCreateContact = async (data) => {
    // const token = localStorage.getItem('@TOKEN')
    // api.defaults.headers.common.authorization = `Beader ${token}`
    setLoading(true)
    try {
      const customerId = 'af3daca9-1c19-4268-b329-981ea1c41b6f'
      const data01 = { ...data, customerId }
      console.log(data01)
      await api.post('/contacts', data01)
      // const response = await api.get('/profile')
      // setTechs(response.data.techs)
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao cadastrar')
      notify()
    } finally {
      setLoading(false)
    }
  }

  const onUpdateTech = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    api.defaults.headers.common.authorization = `Beader ${token}`
    setLoading(true)
    try {
      const token = localStorage.getItem('@TOKEN')
      api.defaults.headers.common.authorization = `Beader ${token}`
      await toast.promise(api.put(`/users/techs/${tech.id}`, data), {
        pending: 'Atualizando a contato',
        success: 'Contato alterado com sucesso!'
      })
      const response = await api.get('/profile')
      setTechs(response.data.techs)
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao atualizar')
      notify()
    } finally {
      setLoading(false)
    }
  }

  const onRemoveTech = async (id) => {
    const token = localStorage.getItem('@TOKEN')
    api.defaults.headers.common.authorization = `Beader ${token}`
    setLoading(true)
    try {
      await toast.promise(api.delete(`/users/techs/${id}`), {
        pending: 'Deletando a contato',
        success: 'Contato deletado com sucesso!'
      })
      const response = await api.get('/profile')
      setTechs(response.data.techs)
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao deletar')
      notify()
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContactContext.Provider
      value={{
        loading,
        showTechModal,
        tech,
        setTech,
        techs,
        setTechs,
        setShowTechModal,
        onCreateContact,
        onUpdateTech,
        onRemoveTech
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
