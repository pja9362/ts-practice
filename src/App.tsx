// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Common/Header';

// React.FC => React.FunctionComponent => 함수형 컴포넌트
const App: React.FC = () => {
  return (
    <Router>
      <div style={{ overflow: "hidden", height: "100vh", width: "100vw", backgroundColor: 'rgba(249, 249, 249, 1)' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* 추가할 화면 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
