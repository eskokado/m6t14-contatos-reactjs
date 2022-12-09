import { ToastContainer } from "react-toastify";
import { TechProvider } from "./contexts/TechContext";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
