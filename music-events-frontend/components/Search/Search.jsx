import { useState } from "react";
import { useRouter } from "next/router";
import * as S from "./Search.styles";

const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };
  return (
    <S.Search>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search events"
        />
      </form>
    </S.Search>
  );
};

export default Search;
