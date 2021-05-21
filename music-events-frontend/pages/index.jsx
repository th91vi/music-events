import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem/EventItem";
import { API_URL } from "@/config/index";
import Link from "next/link";

const Home = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {!events.length && <h3>No events to show</h3>}

      {events.map((eventContent) => (
        <EventItem key={eventContent.id} content={eventContent} />
      ))}

      {!!events.length && (
        <Link href="/events">
          <a className="btn-secondary">View all events</a>
        </Link>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 4) },
  };
}

export default Home;
