import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const Home = ({ events }) => {
  return (
    <Layout>
      <Link href="/about">Upcoming events</Link>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default Home;
