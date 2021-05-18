import Link from "next/link";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = styled.div`
  text-align: center;
  margin: 100px 0 200px;

  h1 {
    font-size: 50px;
  }
`;

import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title={"Page not found"}>
      <Error>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there's nothing here.</h4>
        <Link href="/">Go back to Home</Link>
      </Error>
    </Layout>
  );
};

export default NotFoundPage;
