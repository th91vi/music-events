import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import Layout from "@/components/Layout";

import * as S from "./styles/login.styles";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      return;
    }
    console.log({ email, password });
  };

  return (
    <Layout title="User register">
      <S.AuthForm>
        <div className="auth">
          <h1>
            <FaUser /> Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">User name</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Confirm password</label>
              <input
                type="password"
                id="passwordConfirm"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <input type="submit" value="Register" className="btn" />
          </form>
          <p>
            Already have an account?{" "}
            <Link href="/account/login">
              <a>Log in</a>
            </Link>
          </p>
        </div>
      </S.AuthForm>
      <ToastContainer />
    </Layout>
  );
};

export default RegisterPage;
