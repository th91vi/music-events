import Link from "next/link";
import { PER_PAGE } from "@/config/index";

import * as S from "./Paginations.styles";

const Pagination = ({ page, totalEventsCount }) => {
  const lastPage = Math.ceil(totalEventsCount / PER_PAGE);

  return (
    <S.Pagination>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </S.Pagination>
  );
};

export default Pagination;
