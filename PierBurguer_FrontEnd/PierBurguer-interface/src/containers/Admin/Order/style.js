import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div` 
  background: #efefef;
  min-height: 100vh;
  padding: 20px;
`
export const Img = styled.img`
  width: 60px;
  height: 60px;
`
export const ReactSelectStyled = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control{
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`
export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
`