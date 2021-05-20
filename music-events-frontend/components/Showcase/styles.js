import styled from "styled-components";
import ShowcaseImage from "../../public/images/showcase.jpg";

export const Showcase = styled.div`
  height: 300px;
  width: 100%;
  background: #000 url(${ShowcaseImage}) no-repeat center center;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 40px;
    margin-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    & * {
      z-index: 20;
    }
  }
`;
