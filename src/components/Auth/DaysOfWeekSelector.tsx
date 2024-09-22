import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const DaysOfWeekSelector: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const onDayToggle = (event: React.MouseEvent<HTMLElement>, newDays: string[]) => {
    setSelectedDays(newDays);
  };

  return (
    <ToggleButtonGroup
      value={selectedDays}
      onChange={onDayToggle}
      aria-label="days-of-week"
      fullWidth
      sx={{
        '& .MuiToggleButton-root': {
          borderColor: 'rgba(255, 205, 77, 1)',
          color: 'rgba(114, 88, 39, 1)',
          '&:hover': {
            borderColor: 'rgba(255, 205, 77, 1)',
            color: 'rgba(114, 88, 39, 1)',
          },
        },
        '& .Mui-selected': {
          backgroundColor: 'rgba(255, 205, 77, 1) !important',
          color: '#fff !important',
        },
      }}
    >
        {/* 첫번째 인자 : 요소, 두번째 인자: index */}
        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
            <ToggleButton key={index} value={day}>
            {day}
            </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
};

export default DaysOfWeekSelector;
