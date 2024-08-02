import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./components/HomePage";
import AddEmployeePage from "./components/AddEmployeePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EmployeeDetailsPage from "./components/EmployeeDetailsPage";
import { UserProvider } from "./context/UserContext";
import LandingPage from "./components/LandingPage/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    // yang ada protected route nya berarti harus login dlu baru bisa masuk
    // user provider buat user sessionnya
    <UserProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />

          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

          <Route path="/add-employee" element={<ProtectedRoute><AddEmployeePage /></ProtectedRoute>} />

          <Route path="/profile" element={<ProtectedRoute><MyInfoPage /></ProtectedRoute>} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/employee/:id" element={<ProtectedRoute><EmployeeDetailsPage /></ProtectedRoute>} />

          {/* Input rute lain di sini */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
