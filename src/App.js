import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/HomePage'
import AddNewExpensePage from './pages/AddNewExpensePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/new" element={<AddNewExpensePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
