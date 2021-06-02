import Link from "next/link";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <p>Copyright &copy; Music Events 2021</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </S.Footer>
  );
};

export default Footer;
