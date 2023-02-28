import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import {  useContext } from "react";
import { IUser } from "../../../providers/User/@typesUser";
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

import { UserContext } from "../../../providers/User/UserContext";

const LoginForm = () => {

  const { logar } = useContext(UserContext)

    const fromSchema = yup.object().shape({
  
      
      email: yup.string().required('Campo obrigatório').email('email invalido'),
      password: yup.string().required('Campo obrigatório'),
      
    })

    const {register , handleSubmit ,formState:{errors} } = useForm <IUser> ({

      resolver: yupResolver(fromSchema)
  
    })

  const userObject =  (data : IUser ) => {

    logar(data)

  }

 return (
 
  <StyledForm onSubmit={handleSubmit(userObject)} >
    <Input tipo='email' labelText='email' register={register('email')} error={errors.email?.message}/>
    <Input tipo='password' labelText='senha' register={register('password')} error={errors.password?.message}/>

    <StyledButton type='submit'  $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
  
  )
  };

export default LoginForm;
