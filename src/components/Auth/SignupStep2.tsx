import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import StepIndicator from './StepIndicator';
import FormField from './FormField';
import DaysOfWeekSelector from './DaysOfWeekSelector';

interface SignupStep2Props {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupStep2: React.FC<SignupStep2Props> = ({ step, setStep }) => {
    const [selectedType, setSelectedType] = React.useState<string>('');

    const btnStyle = {
        borderColor: 'rgba(255, 205, 77, 1)',
        color: 'rgba(208, 171, 73, 1)',
        '&:hover': {
          borderColor: 'rgba(255, 205, 77, 1)',
          color: 'rgba(208, 171, 73, 1)',
        },
    };

    const formFields = [
        { label: '이름', placeholder: '이름을 입력해주세요', id: 'name' },
        { label: '가게 이름', placeholder: '가게 이름을 입력해주세요', id: 'storeName' },
        { label: '연락처', placeholder: '연락처는 손님에게 노출되지 않습니다', id: 'contact' },
        { label: '이메일', placeholder: '이메일을 입력해주세요', id: 'email' },
        { label: '가게설명', placeholder: '안녕하세요! 맛있는 커피를 제공하는 스꾸냠입니다!', id: 'description' },
        { label: '가게위치', placeholder: '서울특별시 종로구 명륜동 000-00', id: 'address' },
    ]

    return (
        <Box sx={{ backgroundColor: "rgba(255, 251, 229, 1)" }}>
            <Box sx={{ width: '30%', m: 'auto', mt: '55px', p: '40px'}}>
                <StepIndicator step={step} />
            </Box>

            <Box sx={{width: '50%', maxWidth: 950, m: 'auto'}}>
                <Typography sx={{ color: "rgba(114, 88, 39, 1)", fontWeight: 700, fontSize: 15, pb: '10px' }}>
                    사장님의 가게를 선택해주세요
                </Typography>

                <Box sx={{ display: "flex", gap: "30px", mb: "20px" }}>
                    {['school', 'cafe'].map((type, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            fullWidth
                            sx={{
                                ...btnStyle,
                                backgroundColor: selectedType === type ? 'rgba(255, 205, 77, 1)' : 'transparent',
                                color: selectedType === type ? '#fff' : 'rgba(208, 171, 73, 1)',
                            }}
                            onClick={() => setSelectedType(type)}
                        >
                            {type === 'school' ? '학식' : '카페'}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, 
                    gap: '23px' 
                }}>                    {
                        formFields.map(({label, placeholder, id}, index) => (
                            <FormField key={index} label={label} placeholder={placeholder} id={id} />
                        ))
                    }
                    <div>
                        <Typography sx={{ color: "rgba(114, 88, 39, 1)", fontWeight: 700, fontSize: 15 }}> 운영요일 </Typography>
                        <DaysOfWeekSelector />
                    </div>
                    <div>
                        <Typography sx={{ color: "rgba(114, 88, 39, 1)", fontWeight: 700, fontSize: 15 }}> 운영시간 </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            <FormField id="open" placeholder="오픈시간" />
                            <FormField id="close" placeholder="마감시간" />
                        </Box>
                    </div>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}>
                    <Button
                        disableElevation
                        variant="contained"
                        sx={{ backgroundColor: 'rgba(255, 231, 105, 1)', color: 'rgba(114, 88, 39, 1)', width: '50%', fontSize: '21px', lineHeight: '22px', fontWeight: 700, p: '10px', mt: '20px' }}
                        onClick={() => setStep(3)}
                    >
                        가입하기
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SignupStep2;
