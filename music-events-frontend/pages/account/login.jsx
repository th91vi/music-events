import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import Layout from "@/components/Layout";

import * as S from "./styles/login.styles";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Layout title="User login">
      <S.AuthForm>
        <div className="auth">
          <h1>
            <FaUser /> Log in
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input type="submit" value="Login" className="btn" />
          </form>
          <p>
            Don't have and account?{" "}
            <Link href="/account/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </S.AuthForm>
      <ToastContainer />
    </Layout>
  );
};

export default LoginPage;
