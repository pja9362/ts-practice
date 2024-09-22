import { AppBar, Button, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar
      elevation={0}
      sx={{ backgroundColor: "rgba(70, 70, 70, 1)", alignItems: "center", height: 55 }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: 55, width: "77%" }}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: 700 }}>
            SKKUNYAM
          </Typography>
          <Typography sx={{ color: "white", fontSize: 14, fontWeight: 700 }}>
            성균관대학교 오더 서비스 스꾸냠입니다!
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button color="inherit" component={Link} to="/login">로그인</Button>
          <Button color="inherit" component={Link} to="/signup">회원가입</Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
