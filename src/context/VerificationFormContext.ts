import { createContext } from 'react';

import { IVerificationForm } from '../types/types';

export interface IVerificationFormContextType {
  form: IVerificationForm;
  setForm?: (form: IVerificationForm) => void;
}

export const VerificationFormContext = createContext<IVerificationFormContextType>({ 
  form: {
    name: '',
    email: '',
    city: '',
    address: '',
    phone: ''
  }
});
