import "./App.css";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/mainPage/MainPage";
import { useUser } from "./context/auth/context";

function App() {
  const { isLoggedIn } = useUser();

  return <>{isLoggedIn ? <MainPage /> : <LoginPage />}</>;
}

export default App;
