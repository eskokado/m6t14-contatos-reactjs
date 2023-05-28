import { ToastContainer } from 'react-toastify'
import { ContactProvider } from './contexts/ContactContext'
import { UserProvider } from './contexts/UserContext'
import { RoutesMain } from './routes'
import Global from './styles/global'
import {PhoneContactContext, PhoneContactProvider} from "./contexts/PhoneContactContext";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <ContactProvider>
          <PhoneContactProvider>
            <RoutesMain />
          </PhoneContactProvider>
        </ContactProvider>
      </UserProvider>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
