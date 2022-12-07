import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
