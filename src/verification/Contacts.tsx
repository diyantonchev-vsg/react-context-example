import { useContext, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { VerificationFormContext } from '../context/VerificationFormContext';

const Contacts = () => {
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
      <TextField id='email' onChange={handleChange} label='Email' variant='standard' /><br />
      <TextField id='phone' onChange={handleChange} label='Phone' variant='standard' /><br />
    </Box>
  );
}

export default Contacts;
