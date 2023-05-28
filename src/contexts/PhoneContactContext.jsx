import {createContext, useContext, useEffect, useState} from "react";
import {ContactContext} from "./ContactContext";

export const PhoneContactContext = createContext()

export const PhoneContactProvider = ({ children }) => {
  const [phonesContact, setPhonesContact] = useState([])
  const [phoneContact, setPhoneContact] = useState(null)
  const [showPhoneContactModal, setShowPhoneContactModal] = useState(false)
  const { contact, setContact } = useContext(ContactContext)

  useEffect(() => {
    setPhonesContact(contact?.phones ?? [])
    console.log('PhoneContactProvider - phonesContact', phonesContact)
  }, [contact])

  return (
    <PhoneContactContext.Provider
      value={{
        phoneContact,
        setPhoneContact,
        phonesContact,
        setPhonesContact,
        showPhoneContactModal,
        setShowPhoneContactModal,
      }}
    >
      {children}
    </PhoneContactContext.Provider>
  )
}

