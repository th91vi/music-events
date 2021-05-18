import Link from "next/link";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </S.Logo>
      <S.NavLinks>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </S.NavLinks>
    </S.Header>
  );
};

export default Header;
