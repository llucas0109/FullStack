import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import api from "../../services/api.js";
// import { yupResolver } from "@hookform/resolvers/yup"

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  Button,
  Logo
} from './style.js'
import styled from "styled-components";

function Login(){
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().max(15)
  })
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async clientData => {
    const response = await api.post('sessions',{  // api.post(pastaCaminhoUrl,DadosQueSeramEnviados) Faz o envio dos dados para o back end pelo metodo post.
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }
  
  return (
    <Container>
      <LoginImage>
      <Logo> Santa monica </Logo>
      </LoginImage>
      <ContainerItens>
        <img />
        <h1> Login</h1>
         <form onSubmit={handleSubmit(onSubmit)}> {/* Ao clicar em enviar ele envia os dados para o onSubmit */}
          {/* type="email" pelo fato de estar dentro do form é configurado automaticamente assim como o type="password" Isso é do html  caso nao queiramos passamos uma configuraçao no form 'noValidate' para validar somente pelo reactHookForm*/}
          <Label>Email</ Label>
          {/*// ...register chama a funçao register e cadastra o campo e ja da um name  */}
          {/*Podemos passar validaçoes no segundo parametro de '...register()' */}
          <Input placeholder="Your email" id="email" {...register('email', { required: true })} error={errors.email?.type} />   
          {errors.email && errors.email.type === "required" && <span>Email is required</span>}  {/* Se ouver um erro em : 'errors.email', Ele exibira a mensagem de erro. */}
          <Label>Senha</ Label>
          <Input placeholder="Your Password"  id="password" {...register('password', { required: true, maxLength: 15 })} error={errors.password?.type} />   
           {errors.password && errors.password.type === "required" &&  <span>password is required</span>}   {/*errors.NomeDoCampo.message     Para exibir o erro ao usuario*/}
           {errors.password && errors.password.type === "maxLength" &&  <span>Your password dont could have more than 15 of Length</span>}
          <Button type="submit" > Sign In </ Button>  {/* type="submit"  por estar dentro do formulario vai submeter os dados */}
        </form>
        <SignInLink>
        Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ ContainerItens>
    </ Container>
  )
}


export default Login