import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';



export interface IData {

  name: string;
  email: string;
  senha: string;
  comfirmarSenha: string;
}



const RegisterForm = () => {

  const fromSchema = yup.object().shape({

    name: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('email invalido'),
    senha: yup.string().required('Campo obrigatório'),
    comfirmarSenha: yup.string().required("Campo obrigatório"),
   
  })

  const {register , handleSubmit ,formState:{errors} } = useForm <IData> ({

    resolver: yupResolver(fromSchema)

  })

  const dadosDoUsuario = (data : IData)  => {

    // eslint-disable-next-line no-console
    console.log(data)
  

  }

  return (

    <StyledForm onSubmit={ handleSubmit(dadosDoUsuario)}>

      <Input labelText='nome' register={register('name')} error={errors.name?.message}/>
      

      <Input labelText='email' register={register('email')} error={errors.email?.message}/>
      

      <Input labelText='senha' tipo='password' register={register('senha')} error={errors.senha?.message}/>
      
      <Input labelText='Comfirmar senha' tipo='password' register={register('comfirmarSenha')} error={errors.comfirmarSenha?.message}/>

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
}

export default RegisterForm;
