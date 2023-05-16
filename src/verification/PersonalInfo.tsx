import { useContext, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { VerificationFormContext } from '../context/VerificationFormContext';

const PersonalInfo = () => {
  const { form, setForm } = useContext(VerificationFormContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
   setForm && setForm({ 
      ...form, 
      [e.target.id]: e.target.value || ''
    });
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='name' onChange={handleChange} label='Name' variant='standard' /><br />
      <TextField id='city' onChange={handleChange} label='City' variant='standard' /><br />
      <TextField id='address' onChange={handleChange} label='Address' variant='standard' /><br />
    </Box>
  );
}

export default PersonalInfo;
