/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { UserContext } from './UserContext'

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState(null)
  const [contacts, setContacts] = useState([])
  const [showContactModal, setShowContactModal] = useState(false)
  const { customer, setCustomer } = useContext(UserContext)

  useEffect(() => {
    setContacts(customer?.contacts ?? [])
  }, [customer])

  const onCreateContact = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      const dataCreate = { ...data }
      dataCreate.customerId = customerId
      await api.post('/contacts', dataCreate, config)
      const notify = () => toast.success('Contato cadastrado com sucesso. Edit o contato e adicione os telefones')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao cadastrar')
      notify()
    } finally {
      const response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  const onUpdateContact = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      delete data['email']
      delete data['password']
      await api.patch(`/contacts/${contact.id}`, data, config)
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao atualizar')
      notify()
    } finally {
      const response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  const onRemoveContact = async (id) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      await api.delete(`/contacts/${id}`, config)
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao deletar')
      notify()
    } finally {
      const response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  return (
    <ContactContext.Provider
      value={{
        loading,
        showContactModal,
        contact,
        setContact,
        contacts,
        setContacts,
        setShowContactModal,
        onCreateContact,
        onUpdateContact,
        onRemoveContact
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
