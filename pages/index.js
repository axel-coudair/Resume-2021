import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";
import TitleBar from "../components/TitleBar";
import DatedEvent from "../components/DatedEvent";
import ListedPart from "../components/ListedPart";

export default function Home() {
  return (
    <Layout title="Axel Coudair | Développeur Full stack">
      <Header className="fixed"></Header>
      <Description></Description>
      <TitleBar />
      <DatedEvent />
      <DatedEvent />
      <TitleBar />
      <ListedPart />
    </Layout>
  );
}
