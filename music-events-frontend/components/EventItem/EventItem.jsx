import Link from "next/link";
import Image from "next/image";
import defaultImage from "@/images/event-default.png";

import * as S from "./EventItem.styles";

const EventItem = ({ content }) => {
  return (
    <S.EventItem>
      <div className="img">
        <Image
          src={content.image ? content.image : defaultImage}
          width={170}
          height={100}
        />
      </div>
      <div className="info">
        <span>
          {content.date} at {content.time}
        </span>
        <h3>{content.name}</h3>
      </div>
      <div className="link">
        <Link href={`/events/${content.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </S.EventItem>
  );
};

export default EventItem;
