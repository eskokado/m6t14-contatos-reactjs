/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const CustomerContext = createContext({})

export const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [showCustomerModal, setShowCustomerModal] = useState(false)
  const navigate = useNavigate()

  const onLogin = async (data) => {
    try {
      setLoading(true)
      const response = await api.post('login', data)
      localStorage.setItem('@TOKEN', response.data.token)
      localStorage.setItem('@CUSTOMERID', response.data.customer.id)
      await getCustomer()
      const loggedSuccess = () => navigate('/home')
      loggedSuccess()
    } catch (error) {
      const notify = () => toast.error('Falha ao logar!!!')
      notify()
    } finally {
      setLoading(false)
    }
  }

  const onRegister = async (data) => {
    try {
      setLoading(true)
      delete data['confirmPassword']
      await api.post('customers', data)
      const notify = () => toast.success('Cadastrado com sucesso. Edit o profile e adicione os telefones')
      notify()
      const registeredSuccess = () => navigate('/login')
      registeredSuccess()
    } catch (error) {
      const notify = () =>
        toast.error('Não foi possível cadastrar o usuário', error)
      notify()
    } finally {
      setLoading(false)
    }
  }


  const onUpdateCustomer = async (data) => {
    const token = localStorage.getItem('@TOKEN')
    const customerId = localStorage.getItem('@CUSTOMERID')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    setLoading(true)
    try {
      delete data['email']
      delete data['password']
      await api.patch(`/customers/${customer.id}`, data, config)
      const notify = () => toast.success('Profile alterado com sucesso.')
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


  const onLogout = () => {
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@CUSTOMERID')
    setCustomer(null)
    navigate('/login')
  }

  const onCustomerPrint = () => {
    getCustomer()
    navigate('/customer-print')
  }

  const onCustomerEdit = () => {
    setShowCustomerModal(true)
    getCustomer()
    console.log('onCustomerEdit')
  }

  const getCustomer = async () => {
    setLoading(true)
    const customerId = localStorage.getItem('@CUSTOMERID')
    const token = localStorage.getItem('@TOKEN')
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const response = await api.get(`customers/${customerId}`, config)
      setCustomer(response.data)
    } catch (error) {
      const notify = () => toast.error('Erro ao localizar o cliente')
      notify()
      setCustomer({})
    } finally {
      setLoading(false)
    }
  }

  return (
    <CustomerContext.Provider
      value={{
        // loading,
        onLogin,
        onRegister,
        onLogout,
        customer,
        setCustomer,
        onCustomerPrint,
        getCustomer,
        onCustomerEdit,
        showCustomerModal,
        setShowCustomerModal,
        onUpdateCustomer,
        // autoLogin
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}
