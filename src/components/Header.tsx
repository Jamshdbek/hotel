
import styled, { css } from "styled-components";
const Header = ({ image }: any) => {
    const HeaderWrap = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  color:#fff;
  align-items: center;
   background-image: url(${(params: any) => params.image});
    background-color: rgba(16, 16, 16, 0.4);
    padding: 0px 10vh 0px 10vh;
    justify-content: space-between;
  `
        ;
    return (
        <HeaderWrap image={image} />
    )
}

export default Header