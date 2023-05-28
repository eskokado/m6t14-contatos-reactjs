import { ToastContainer } from 'react-toastify'
import { ContactProvider } from './contexts/ContactContext'
import { CustomerProvider } from './contexts/CustomerContext'
import { RoutesMain } from './routes'
import Global from './styles/global'
import {PhoneContactContext, PhoneContactProvider} from "./contexts/PhoneContactContext";
import {PhoneCustomerContext, PhoneCustomerProvider} from "./contexts/PhoneCustomerContext";

function App() {
  return (
    <>
      <Global />
      <CustomerProvider>
        <ContactProvider>
          <PhoneCustomerProvider>
            <PhoneContactProvider>
              <RoutesMain />
            </PhoneContactProvider>
          </PhoneCustomerProvider>
        </ContactProvider>
      </CustomerProvider>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
