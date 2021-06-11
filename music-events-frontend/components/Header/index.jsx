import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Search from "../Search/Search";

import * as S from "./styles";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </S.Logo>
      <Search />
      <S.NavLinks>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/events/addEvent">
                  <a>Add event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/account/login">
                <a className="btn-secondary btn-icon">
                  <FaSignInAlt /> Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </S.NavLinks>
    </S.Header>
  );
};

export default Header;
