/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState(null)
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
      const registeredSuccess = () => navigate('/login')
      registeredSuccess()
    } catch (error) {
      const notify = () => toast.error('Não foi possível cadastrar o usuário', error)
      notify()
    } finally {
      setLoading(false)
    }
  }

  const onLogout = () => {
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@CUSTOMERID')
    setCustomer(null)
    navigate('/login')
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
    <UserContext.Provider
      value={{
        // loading,
        onLogin,
        onRegister,
        onLogout,
        customer,
        setCustomer,
        // autoLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
