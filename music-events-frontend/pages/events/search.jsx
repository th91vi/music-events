import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem/EventItem";
import { API_URL } from "@/config/index";

const Search = ({ events }) => {
  const router = useRouter();

  return (
    <Layout>
      <Link href="/events">Go back</Link>
      <h1>
        Search results for: <i>{router.query.term}</i>
      </h1>
      {!events.length && <h3>No results to show</h3>}

      {events.map((eventContent) => (
        <EventItem key={eventContent.id} content={eventContent} />
      ))}
    </Layout>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default Search;
