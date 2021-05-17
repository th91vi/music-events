import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About Music Events">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, eveniet
        ut? Esse, reprehenderit amet nisi reiciendis consequuntur qui voluptatum
        autem id illo earum voluptatem quaerat. Nemo aliquam vel suscipit quam.
      </p>
      <p>Version 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default About;
