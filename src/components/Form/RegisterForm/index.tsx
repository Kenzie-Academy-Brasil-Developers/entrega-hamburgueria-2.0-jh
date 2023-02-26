import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';



export interface IData {
  email: string;
  password: string;
  name: string;
  comfirmarSenha: string;
}



const RegisterForm = () => {

  const fromSchema = yup.object().shape({

    name: yup.string().required('Campo obrigatório'),

    email: yup.string().required('Campo obrigatório'),

    password: yup.string()
    .required("Preencha este campo")
    .matches(/[a-z]/ , "Deve conter uma letra minuscula")
    .matches(/\d/ , "Deve conter ao menos 1 numero" )
    .matches(/[A-Z]/ , "Deve conter ao menos uma letra maiuscula")
    .matches(/\W|_/ , "Deve conter no minimo caracter especial")
    .matches(/.{8,}/ , "Deve conter no minimo 8 caracters"),

    comfirmarSenha: yup.string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")] ,"Comfirmar senha deve ser igual senha"),
  })

  const {register , handleSubmit ,formState:{errors} } = useForm <IData> ({

    resolver: yupResolver(fromSchema)

  })

  
  const dadosDoUsuario = ({comfirmarSenha , ...data} : IData)  => {

    // eslint-disable-next-line no-console
    console.log(data)
  

  }

  return (

    <StyledForm onSubmit={ handleSubmit(dadosDoUsuario)}>

      <Input labelText='nome' register={register('name')} error={errors.name?.message}/>
      

      <Input labelText='email' register={register('email')} error={errors.email?.message}/>
      

      <Input labelText='senha' tipo='password' register={register('password')} error={errors.password?.message}/>
      
      <Input labelText='Comfirmar senha' tipo='password' register={register('comfirmarSenha')} error={errors.comfirmarSenha?.message}/>

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
}

export default RegisterForm;
