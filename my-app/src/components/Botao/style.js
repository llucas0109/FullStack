import styled from "styled-components";

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