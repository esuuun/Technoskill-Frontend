import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./components/HomePage";
import AddEmployeePage from "./components/AddEmployeePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserProvider } from "./context/UserContext";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/add-employee" element={<AddEmployeePage />} />

          <Route path="/profile" element={<MyInfoPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          {/* Input rute lain di sini */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
