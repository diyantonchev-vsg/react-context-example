import { useContext } from 'react';
import Button from '@mui/material/Button';

import { VerificationFormContext } from '../context/VerificationFormContext';

const Confirm = () => {
  const { form } = useContext(VerificationFormContext);

  const onSubmit = () => {
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <>
      <h4>Are you ready?</h4>
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </>
  );
};

export default Confirm;
