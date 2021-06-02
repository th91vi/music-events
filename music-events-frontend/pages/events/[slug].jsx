import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes, FaAngleDoubleLeft } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import formatDate from "@/utils/formatDate";

import * as S from "./Slug.styles";

const EventPage = ({ evt }) => {
  const deleteEvent = (e) => {
    console.log("e");
  };

  return (
    <Layout>
      <S.EventsSlug>
        <div className="event">
          <div className="controls">
            <Link href={`/events/edit/${evt.id}`}>
              <a>
                <FaPencilAlt /> Edit Event
              </a>
            </Link>
            <a href="#" className="delete" onClick={deleteEvent}>
              <FaTimes /> Delete Event
            </a>
          </div>
          <span>
            {formatDate(evt.date)} at {evt.time}
          </span>
          <h1>{evt.name}</h1>
          {evt.image && (
            <div className="image">
              <Image
                src={evt.image.formats.large.url}
                width={960}
                height={600}
              />
            </div>
          )}
          <h3>Performers:</h3>
          <p>{evt.performers}</p>
          <h3>Description:</h3>
          <p>{evt.description}</p>
          <h3>Venue: {evt.venue}</h3>
          <p>{evt.address}</p>
          <Link href="/events">
            <a className="back">
              <FaAngleDoubleLeft /> Go back
            </a>
          </Link>
        </div>
      </S.EventsSlug>
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
  };
}

export default EventPage;
