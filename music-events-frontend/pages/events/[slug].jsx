import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaPencilAlt, FaTimes, FaAngleDoubleLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import formatDate from "@/utils/formatDate";

import * as S from "./Slug.styles";
import "react-toastify/dist/ReactToastify.css";

const EventPage = ({ evt }) => {
  const router = useRouter();

  const deleteEvent = async (e) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: "DELETE",
      });

      const eventInfo = res.json();

      if (!res.ok) {
        toast.error(eventInfo.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        router.push("/events");
      }
    }
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
      <ToastContainer />
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
