import Link from "next/link";
import Search from "../Search/Search";

import * as S from "./styles";

const Header = () => {
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
          <li>
            <Link href="/events/addEvent">
              <a>Add event</a>
            </Link>
          </li>
        </ul>
      </S.NavLinks>
    </S.Header>
  );
};

export default Header;
