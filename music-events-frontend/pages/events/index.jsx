import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem/EventItem";
import { API_URL } from "@/config/index";

const EventsPage = ({ events }) => {
  return (
    <Layout>
      <h1>Events</h1>
      {!events.length && <h3>No events to show</h3>}

      {events.map((eventContent) => (
        <EventItem key={eventContent.id} content={eventContent} />
      ))}
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default EventsPage;
