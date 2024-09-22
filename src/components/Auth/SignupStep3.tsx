import React from "react";
import { Box, Typography, Button } from "@mui/material";
import StepIndicator from "./StepIndicator";
import logoImg from '../../images/logo.png';
import { useNavigate } from "react-router-dom";

interface SignupStep3Props {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupStep3: React.FC<SignupStep3Props> = ({ step, setStep }) => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/');
    };

    return (
        <Box sx={{ backgroundColor: "rgba(255, 251, 229, 1)" }}>
            <Box sx={{ textAlign: 'center', pt: '120px' }}>
                <img src={logoImg} alt="logo" style={{ width: 160, objectFit: "cover" }} />
            </Box>

            <Box sx={{ width: '30%', m: 'auto', mt: '55px', p: '40px'}}>
                <StepIndicator step={step} />
            </Box>


            <Box sx={{ width: "100%", justifyContent: "center", textAlign: "center", mt: '30px' }}>
                <Typography sx={{ color: "rgba(70, 70, 70, 1)", fontWeight: 700, fontSize: 32, lineHeight: "42px" }}>
                    가입이 완료되었습니다!
                </Typography>
                <Typography sx={{ color: "rgba(70, 70, 70, 1)", m: "15px 0 25px", fontSize: 18 }}>
                    스꾸냠에서 받은 오더와 매출 관리를 도와드릴게요
                </Typography>

                <Button disableElevation onClick={handleBtnClick} sx={{m: '25px', p: '10px', fontSize: '21px', lineHeight: '22px', fontWeight: 700, backgroundColor: 'rgba(255, 231, 105, 1)', color: 'rgba(114, 88, 39, 1)', width: '30%', maxWidth: 586}}>가게 관리하러 가기</Button>
            </Box>
        </Box>
    );
};

export default SignupStep3;