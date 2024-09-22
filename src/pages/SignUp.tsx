import React, { useState } from 'react';
import { Box } from '@mui/material';
import SignupStep2 from '../components/Auth/SignupStep2';
import SignupStep3 from '../components/Auth/SignupStep3';

const Signup: React.FC = () => {
  const [step, setStep] = useState<number>(2);

  return (
    <Box sx={{backgroundColor: "rgba(255, 251, 229, 1)", height: "100vh"}}>
      {step === 2 && <SignupStep2 step={step} setStep={setStep} />}
      {step === 3 && <SignupStep3 step={step} setStep={setStep} />}
    </Box>
  );
};

export default Signup;
