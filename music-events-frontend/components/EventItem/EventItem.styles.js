import styled from "styled-components";
import media from "styled-media-query";

export const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 13px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

  .img {
    flex: 1;
    margin: 10px;
  }

  .info {
    flex: 2;
  }

  ${media.lessThan("small")`
    .event {
      flex-direction: column;
      text-align: center;
    }

    .info {
      margin-bottom: 20px;
    }
  `}
`;
