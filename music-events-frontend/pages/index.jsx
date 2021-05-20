import Link from "next/link";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
