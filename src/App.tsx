// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';

// React.FC => React.FunctionComponent => 함수형 컴포넌트
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* 추가할 화면 */}
      </Routes>
    </Router>
  );
};

export default App;
