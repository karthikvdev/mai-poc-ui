
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from './pages/sign-up-page';
import { SignInPage } from './pages/sign-in-page';
import OtpPage from './pages/otp-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<SignInPage />} />
        <Route path='/otp' element={<OtpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
