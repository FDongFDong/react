import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import { Routes, Route, Navigate } from 'react-router-dom';
// Navigate는 컴포넌트다
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';
function App() {
  const [authenticate, setAuthenticate] = useState(true); // false 면 유저가 로그인 해야한다.
  const PrivateRoute = () => {
    // 대문자니까 컴포넌트이다.
    // 리다이렉트
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/user" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
