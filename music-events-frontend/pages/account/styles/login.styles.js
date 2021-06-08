import styled from "styled-components";

export const AuthForm = styled.div`
  .auth {
    max-width: 500px;
    margin: auto;
    padding: 30px;
    box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);
  }

  .auth label {
    display: block;
    margin-bottom: 10px;
  }

  .auth input[type="text"],
  .auth input[type="email"],
  .auth input[type="password"] {
    display: block;
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 18px;
  }

  .auth input[type="submit"] {
    margin-top: 20px;
    width: 100%;
    font-size: 17px;
  }

  .auth div {
    margin-bottom: 20px;
  }
`;
