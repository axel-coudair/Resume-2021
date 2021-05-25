import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";

export default function Home() {
  return (
    <Layout title="Axel Coudair | Développeur Full stack">
      <Header className="fixed"></Header>
      <Description></Description>
    </Layout>
  );
}
