import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ${media.lessThan("small")`
    flex-direction: column;
    height: auto;
  
  `}

  a {
    color: #333;
    margin-right: 20px;

    ${media.lessThan("small")`
    margin-right: 0;
    `}

    &:hover {
      color: #000;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    ${media.lessThan("small")`
    margin: 20px 0;
    flex-direction: column;
    text-align: center;

    `}
  }
`;

export const Logo = styled.h2`
  color: red;
  font-size: 20px;
  text-transform: uppercase;

  ${media.lessThan("small")`
  margin: 20px 0;
  
  `}

  a {
    color: red;
  }
`;

export const NavLinks = styled.nav``;
