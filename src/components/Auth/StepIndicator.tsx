import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// steps 배열의 타입을 string[]로 명시
const steps: string[] = ["SNS 연동", "정보 입력", "완료"];

// StepIndicator 컴포넌트의 Props에 대한 타입 정의
interface StepIndicatorProps {
  step: number; // step은 number 타입으로 받음
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ step }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                color: "rgba(177, 177, 177, 1)",
                fontWeight: 700,
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "rgba(255, 205, 77, 1)", // completed 상태일 때의 색상
              },
              "& .MuiStepLabel-root .Mui-active ": {
                color: "rgba(110, 195, 113, 1)", // active 상태일 때의 색상
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepIndicator;
