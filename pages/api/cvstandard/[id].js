import { query as q } from "faunadb";
import { serverClient } from "../../../utils/fauna-auth";

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  try {
    const resume = await serverClient.query(
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
    res.status(200).json(resume);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
