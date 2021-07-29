import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";
import TitleBar from "../components/TitleBar";
import DatedEvent from "../components/DatedEvent";
import ListedPart from "../components/ListedPart";
import QrPart from "../components/QrPart";
import Footer from "../components/Footer";
import { withRouter } from "next/router";
import { query as q } from "faunadb";
import { serverClient } from "../utils/fauna-auth";

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
        <div className="flex py-6">
          <Description description={description}></Description>
          <QrPart className="hidden sm:block flex-1" path={this.props.router.asPath}></QrPart>
        </div>
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
    const res = await serverClient.query(
      q.Let(
        {
          languagesRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("languages_resume_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          languages: q.Select(["data"], q.Var("languagesRaw")),
          hobbiesRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("hobbies_resume_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          hobbies: q.Select(["data"], q.Var("hobbiesRaw")),
          skillsRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("resume_skills_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          skills: q.Select(["data"], q.Var("skillsRaw")),
          experiencesRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("experiences_resume_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          experiences: q.Select(["data"], q.Var("experiencesRaw")),
          projectsRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("projects_resume_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          projects: q.Select(["data"], q.Var("projectsRaw")),
          trainingsRaw: q.Map(
            q.Paginate(
              q.Match(
                q.Index("resume_trainings_by_resume"),
                q.Ref(q.Collection("Resume"), id)
              )
            ),
            q.Lambda("resumeRef", q.Select(["data"], q.Get(q.Var("resumeRef"))))
          ),
          trainings: q.Select(["data"], q.Var("trainingsRaw")),
          resume: q.Get(q.Ref(q.Collection("Resume"), id)),
          descriptionRef: q.Select(["data", "description"], q.Var("resume")),
          descriptionDoc: q.Get(q.Var("descriptionRef")),
          headerRef: q.Select(["data", "header"], q.Var("resume")),
          headerDoc: q.Get(q.Var("headerRef")),
        },
        {
          description: q.Select(["data"], q.Var("descriptionDoc")),
          header: q.Select(["data"], q.Var("headerDoc")),
          languages: q.Var("languages"),
          hobbies: q.Var("hobbies"),
          skills: q.Var("skills"),
          experiences: q.Var("experiences"),
          projects: q.Var("projects"),
          trainings: q.Var("trainings"),
        }
      )
    );

    const data = await JSON.parse(JSON.stringify(res));
    return {
      props: { data },
    };
  } catch (err) {
    return err;
  }
}
export default withRouter(Home);
