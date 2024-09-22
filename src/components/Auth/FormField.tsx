import React from 'react';
import { Box, Typography, TextField} from '@mui/material';

interface FormFieldProps {
  label?: string;
  placeholder: string;
  id: string;
}

const FormField: React.FC<FormFieldProps> = ({ label = "", placeholder, id }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "rgba(114, 88, 39, 1)",
          fontWeight: 700,
          fontSize: 15,
          mb: "3px",
        }}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        id={id}
        placeholder={placeholder}
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 231, 105, 1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 231, 105, 1)',
            },
          },
          backgroundColor: '#fff',
        }}
      />
    </Box>
  );
}

export default FormField;
