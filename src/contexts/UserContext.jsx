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

  // useEffect(() => {
  //   autoLogin()
  // }, [])

  // const autoLogin = async () => {
  //   setLoading(true)
  //   // const token = localStorage.getItem('@TOKEN')
  //   // if (!token) {
  //   //   setLoading(false)
  //   //   return
  //   // }
  //   try {
  //     const { data } = await api.get('/customer/1', {
  //       // headers: {
  //       //   authorization: `Bearer ${token}`
  //       // }
  //     })
  //     setCustomer(data)
  //     navigate('/home')
  //   } catch (error) {
  //     localStorage.removeItem('@TOKEN')
  //     localStorage.removeItem('@USERID')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const onLogin = async (data) => {
    try {
      setLoading(true)
      const response = await api.post('sessions', data)
      localStorage.setItem('@TOKEN', response.data.token)
      localStorage.setItem('@USERID', response.data.user.id)
      setCustomer(response.data.customer)
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
      await api.post('customers', data)
      const registeredSuccess = () => navigate('/login')
      registeredSuccess()
    } catch (error) {
      const notify = () => toast.error('Não foi possível cadastrar o usuário')
      notify()
    } finally {
      setLoading(false)
    }
  }

  const onLogout = () => {
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@USERID')
    setCustomer(null)
    navigate('/login')
  }

  const getUser = async () => {
    setLoading(true)
    const userId = localStorage.getItem('@USERID')
    try {
      const response = await api.get(`users/${userId}`)
      setCustomer(response.data)
    } catch (error) {
      const notify = () => toast.error('Erro ao localizar o usuário')
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
        onLogout
        // user,
        // autoLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
