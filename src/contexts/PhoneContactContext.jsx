import {createContext, useContext, useEffect, useState} from "react";
import {ContactContext} from "./ContactContext";
import {api} from "../services/api";
import {toast} from "react-toastify";
import {CustomerContext} from "./CustomerContext";

export const PhoneContactContext = createContext()

export const PhoneContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [phonesContact, setPhonesContact] = useState([])
  const [phoneContact, setPhoneContact] = useState(null)
  const [showPhoneContactModal, setShowPhoneContactModal] = useState(false)
  const { contact, setContact } = useContext(ContactContext)
  const { customer, setCustomer } = useContext(CustomerContext)

  useEffect(() => {
    setPhonesContact(contact?.phones ?? [])
  }, [contact])

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
      console.log(dataCreate)
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


  return (
    <PhoneContactContext.Provider
      value={{
        phoneContact,
        setPhoneContact,
        phonesContact,
        setPhonesContact,
        showPhoneContactModal,
        setShowPhoneContactModal,
        onCreatePhoneContact,
      }}
    >
      {children}
    </PhoneContactContext.Provider>
  )
}

