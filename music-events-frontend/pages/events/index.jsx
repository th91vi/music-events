import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem/EventItem";
import { API_URL, PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination/Pagination";

const EventsPage = ({ events, page, totalEventsCount }) => {
  return (
    <Layout>
      <h1>Events</h1>
      {!events.length && <h3>No events to show</h3>}

      {events.map((eventContent) => (
        <EventItem key={eventContent.id} content={eventContent} />
      ))}

      <Pagination page={page} totalEventsCount={totalEventsCount} />
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const paginationStart = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const eventsCount = await fetch(`${API_URL}/events/count`);
  const totalEventsCount = await eventsCount.json();

  const eventsRequest = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${paginationStart}`
  );
  const events = await eventsRequest.json();

  return {
    props: { events, page: +page, totalEventsCount },
  };
}

export default EventsPage;
