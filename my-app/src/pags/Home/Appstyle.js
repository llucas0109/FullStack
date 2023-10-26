import styled from "styled-components";
import Background from '../../assets/bgimage.svg'

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
    height: 100vh;
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
export const Input = styled.input`
width: 342px;
height: 58px;
top: 193px;
left: 36px;
padding: 15px, 20px, 15px, 25px;
border-radius: 14px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding-left: 10px;
margin-bottom: 34px ;
border:none;
outline: none;

`
export const Inputlabel = styled.label`
padding-left: 9px;
`
export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
border: none ;
font-size: 17px;
font-weight: 700;
margin-top:52px;
line-height: 28px;
letter-spacing: 0px;
text-align: center;
background-color:#000;
color:#fff;
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
`