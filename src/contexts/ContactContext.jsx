/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { CustomerContext } from './CustomerContext'

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState(null)
  const [contacts, setContacts] = useState([])
  const [showContactModal, setShowContactModal] = useState(false)
  const [phonesContact, setPhonesContact] = useState([])
  const [phoneContact, setPhoneContact] = useState(null)
  const [showPhoneContactModal, setShowPhoneContactModal] = useState(false)
  const { customer, setCustomer } = useContext(CustomerContext)

  useEffect(() => {
    setContacts(customer?.contacts ?? [])
  }, [customer])

  useEffect(() => {
    setPhonesContact(contact?.phones ?? [])
  }, [contact])

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
      console.log(error)
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
      await api.patch(`/contacts/${contact.id}`, data, config)
      const notify = () => toast.success('Contato alterado com sucesso.')
      notify()
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
      const notify = () => toast.success('Contato excluido com sucesso.')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao deletar')
      notify()
    } finally {
      const response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }
  const onCreatePhoneContact = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      const dataCreate = { ...data }
      dataCreate.contactId = contact.id
      await api.post('/phones-contacts', dataCreate, config)
      const notify = () => toast.success('Telefone cadastrado com sucesso')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao cadastrar')
      notify()
    } finally {
      let response = await api.get(`/contacts/${contact.id}`, config)
      setContact(response.data)
      response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  const onUpdatePhoneContact = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      data.contactId = contact.id
      await api.patch(`/phones-contacts/${phoneContact.id}`, data, config)
      const notify = () => toast.success('Telefone alterado com sucesso.')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao atualizar')
      notify()
    } finally {
      let response = await api.get(`/contacts/${contact.id}`, config)
      setContact(response.data)
      response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  const onRemovePhoneContact = async (id) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      await api.delete(`/phones-contacts/${id}`, config)
      const notify = () => toast.success('Telefone excluido com sucesso.')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao deletar')
      notify()
    } finally {
      let response = await api.get(`/contacts/${contact.id}`, config)
      setContact(response.data)
      response = await api.get(`/customers/${customerId}`, config)
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
        phoneContact,
        setPhoneContact,
        phonesContact,
        setPhonesContact,
        showPhoneContactModal,
        setShowPhoneContactModal,
        onCreateContact,
        onUpdateContact,
        onRemoveContact,
        onCreatePhoneContact,
        onUpdatePhoneContact,
        onRemovePhoneContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
