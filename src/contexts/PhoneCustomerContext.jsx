import {createContext, useContext, useEffect, useState} from "react";
import {api} from "../services/api";
import {toast} from "react-toastify";
import {CustomerContext} from "./CustomerContext";

export const PhoneCustomerContext = createContext()

export const PhoneCustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [phonesCustomer, setPhonesCustomer] = useState([])
  const [phoneCustomer, setPhoneCustomer] = useState(null)
  const [showPhoneCustomerModal, setShowPhoneCustomerModal] = useState(false)
  const { customer, setCustomer } = useContext(CustomerContext)

  useEffect(() => {
    setPhonesCustomer(customer?.phones ?? [])
  }, [customer])

  const onCreatePhoneCustomer = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      const dataCreate = { ...data }
      dataCreate.customerId = customer.id
      await api.post('/phones-customers', dataCreate, config)
      const notify = () => toast.success('Telefone cadastrado com sucesso')
      notify()
    } catch (error) {
      const notify = () => toast.error('Ocorreu um erro ao cadastrar')
      notify()
    } finally {
      let response = await api.get(`/customers/${customer.id}`, config)
      setCustomer(response.data)
      response = await api.get(`/customers/${customerId}`, config)
      setCustomer(response.data)
      setLoading(false)
    }
  }

  const onUpdatePhoneCustomer = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      data.customerId = customer.id
      await api.patch(`/phones-customers/${phoneCustomer.id}`, data, config)
      const notify = () => toast.success('Telefone alterado com sucesso.')
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

  const onRemovePhoneCustomer = async (id) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      await api.delete(`/phones-customers/${id}`, config)
      const notify = () => toast.success('Telefone excluido com sucesso.')
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


  return (
    <PhoneCustomerContext.Provider
      value={{
        phoneCustomer,
        setPhoneCustomer,
        phonesCustomer,
        setPhonesCustomer,
        showPhoneCustomerModal,
        setShowPhoneCustomerModal,
        onCreatePhoneCustomer,
        onUpdatePhoneCustomer,
        onRemovePhoneCustomer,
      }}
    >
      {children}
    </PhoneCustomerContext.Provider>
  )
}

