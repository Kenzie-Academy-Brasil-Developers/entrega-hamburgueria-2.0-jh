import  { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { IData } from '../RegisterForm';

interface IInput extends InputHTMLAttributes < HTMLInputElement > {

  
  labelText: string;
  error?: any;
  register?: UseFormRegisterReturn<string> ;
  tipo?: string ;

}


const Input = ({labelText , error , tipo , register, ...rest}: IInput ) => (

  <fieldset>
    <StyledTextField {...register} label={labelText}  type={tipo}/>
    <StyledParagraph fontColor='red'>{error}</StyledParagraph>
  </fieldset>

);

export default Input;
