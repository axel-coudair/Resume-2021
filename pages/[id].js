import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";
import TitleBar from "../components/TitleBar";
import DatedEvent from "../components/DatedEvent";
import ListedPart from "../components/ListedPart";
import Footer from "../components/Footer";
import { withRouter } from "next/router";

class Home extends React.Component {
  render() {
    const {
      header,
      description,
      skills,
      hobbies,
      languages,
      trainings,
      experiences,
      projects,
    } = this.props.data;

    return (
      <Layout title={header.name + " | " + header.jobTitle}>
        <Header className="fixed" printable={this} data={header}></Header>
        <Description data={description}></Description>
        <TitleBar title="Expérience" />
        {experiences.map((experience, index) => (
          <DatedEvent key={index} datedEvent={experience} />
        ))}
        <TitleBar title="Formation" />
        {trainings.map((training, index) => (
          <DatedEvent key={index} datedEvent={training} />
        ))}
        <TitleBar title="Projets" />
        {projects.map((project, index) => (
          <DatedEvent key={index} datedEvent={project} />
        ))}
        <TitleBar title="Compétences" />
        <ListedPart lists={skills} />
        <TitleBar title="Langues" />
        <ListedPart lists={languages} />
        <TitleBar title="Loisirs" />
        <ListedPart lists={hobbies} />
        <TitleBar />
        <Footer />
      </Layout>
    );
  }
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`${process.env.API_LINK}cvstandard/${id}`);
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    return err;
  }
}
export default withRouter(Home);
