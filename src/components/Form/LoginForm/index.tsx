import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

interface ILogin{

  email: string;
  senha: string;

}


const LoginForm = () => {

    const fromSchema = yup.object().shape({
  
      
      email: yup.string().required('Campo obrigatório').email('email invalido'),
      senha: yup.string().required('Campo obrigatório'),
      
    })


    const {register , handleSubmit ,formState:{errors} } = useForm <ILogin> ({

      resolver: yupResolver(fromSchema)
  
    })


  const userObject =  ( data : ILogin) => {

    console.log(data)

  }


 return (<StyledForm onSubmit={handleSubmit(userObject)} >
    <Input tipo='email' labelText='email' register={register('email')} error={errors.email?.message}/>
    <Input tipo='password' labelText='senha' register={register('senha')} error={errors.senha?.message}/>

    <StyledButton type='submit'  $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>)
  };


export default LoginForm;
