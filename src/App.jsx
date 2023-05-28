import { ToastContainer } from 'react-toastify'
import { ContactProvider } from './contexts/ContactContext'
import { CustomerProvider } from './contexts/CustomerContext'
import { RoutesMain } from './routes'
import Global from './styles/global'
import {PhoneContactContext, PhoneContactProvider} from "./contexts/PhoneContactContext";

function App() {
  return (
    <>
      <Global />
      <CustomerProvider>
        <ContactProvider>
          <PhoneContactProvider>
            <RoutesMain />
          </PhoneContactProvider>
        </ContactProvider>
      </CustomerProvider>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
