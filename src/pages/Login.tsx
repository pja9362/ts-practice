import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import backgroundImg from "../images/authBackground.png";
import { useNavigate } from 'react-router-dom';

const commonButtonStyles: React.CSSProperties = {
  fontWeight: 700,
  padding: "10px",
  margin: "3px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#fff",
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/signup");
    // console.log("Login button clicked");
  };

  return (
    <Box justifyContent="center" alignItems="center" height="100vh" sx={{backgroundColor: '#FFFBE5'}}>
      <Box sx={{height: '40%', marginTop: '30px'}}>
        <img src={backgroundImg} alt="background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>

      <Box sx={{textAlign: 'center', pt: '30px'}}>
        <Typography sx={{ color: "rgba(70, 70, 70, 1)", fontWeight: 700, fontSize: 32, lineHeight: "42px" }}>
          안녕하세요 관리자님!<br />스꾸냠 관리하기입니다!
        </Typography>
        <Typography sx={{ color: "rgba(70, 70, 70, 1)", m: "15px 0 25px", fontSize: 18 }}>
          스꾸냠에서 받은 오더와 매출 관리를 도와드릴게요
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", width: "22%", margin: "auto" }}
      >
        <button
          onClick={handleLogin}
          style={{ ...commonButtonStyles, backgroundColor: "rgba(255, 205, 77, 1)" }}
        >
          카카오로 시작하기
        </button>
        <button
          onClick={handleLogin}
          style={{ ...commonButtonStyles, backgroundColor: "rgba(238, 238, 238, 1)", color: "rgba(85, 85, 85, 1)" }}
        >
          구글로 시작하기
        </button>
        <button
          onClick={handleLogin}
          style={{ ...commonButtonStyles, backgroundColor: "rgba(34, 34, 34, 1)" }}
        >
          애플계정으로 시작하기
        </button>

        <Button
          sx={{ color: "rgba(0, 0, 0, 0.5)", backgroundColor: "transparent", mt: "15px", fontWeight: 400 }}
        >
          회원가입
        </Button>
      </Box>

    </Box>
  );
};

export default Login;
