import styled from "styled-components";
import Background from '../../assets/bg image.svg'
//import { Link } from "react-router-dom";  //igual o ancora mas funciona para Urls

export const Container = styled.div`
    background: url("${Background}");// ${Background} importa o codigo js e as "" trandorma tudo em texto fazendo a imagem aparecer. Isso somente para backgrounds do style
    
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center ;
    gap: 40px ;
`
export const Imagen = styled.img`
    margin-top: 30px ;
`
export const Containeritens = styled.div`
    background: linear-gradient(157.44deg,rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.15));
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column ;
    backdrop-filter: blur(45px); //deixa mais fosco
    min-height: 100vh; // Para caso a tela mude de tamanho mantera o minimo semquevbras bordar que quebra o fundo.
`
export const H1 = styled.h1`
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 70px;
    text-align: center;

`
export const P = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px; //Da um espaçamente entre as letra

`

export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
border: 1px solid white ;
font-size: 17px;
font-weight: 700;
margin-top: 120px ;
line-height: 28px;
letter-spacing: 0px;
text-align: center;
background: transparent ; // background: transparent ; deixa transparente 
color:#000;
display: flex;
align-items:center;
justify-content: center;
gap:20px;
&:hover{
    opacity: 70%; //formato e 0 a 1
}
&:active{ // active = ao ser clicado
    opacity: 50%;
}
img{
    transform: rotateY(180deg);
}
`
export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-top:20px;
    width: 348px;
    height: 58px ;
    border: none ;
    outline: none ;
    p{
        font-style: normal;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px ;
        color: #fff ;
    }
    button{
        background:none;
        cursor:pointer;
        border:none;
    }
`