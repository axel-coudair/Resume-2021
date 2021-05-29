import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";
import TitleBar from "../components/TitleBar";
import DatedEvent from "../components/DatedEvent";
import ListedPart from "../components/ListedPart";

export default class Home extends React.Component {
  render() {
    const {
      header,
      description,
      skills,
      hobbies,
      courses,
      languages,
      trainings,
      experiences,
      projects,
    } = this.props.data;

    return (
      <Layout title="Axel Coudair | Développeur Full stack">
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
        <TitleBar title="Langues" />
        <TitleBar title="Loisirs" />
        <TitleBar />
        <ListedPart />
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch("http://localhost:3000/api/cvstandard");
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    return err;
  }
}
