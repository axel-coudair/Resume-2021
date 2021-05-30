export default (req, res) => {
  res.status(200).json({
    header: {
      name: "AXEL COUDAIR",
      jobTitle: "DÉVELOPPEUR FULL STACK",
    },
    description: {
      texte:
        "5 ans d’expérience dont 3 ans dans le développement web. Mais également des expériences produit, design et marketing",
      age: 24,
      localisation: "Paris, France",
      mail: "axel.coudair@gmail.com",
      phone: "+33 6 48 18 06 06",
    },
    experiences: [
      {
        dates: "2019 - 2020",
        title: "Assistant Product Owner",
        place: "Oui.sncf",
        description:
          "Au sein des équipes d’information voyageur et de M-Commerce",
        lists: [
          [
            "Analyse de sujets métiers (Transport urbains, funnel de conversion et VTC)",
            "Priorisation des demandes des pôles marketing, juridiques et produits.",
            "Conception de fonctionnalitées avec l’équipe design et l’équipe de développement.",
            "Suivi de KPIs",
            "Rédaction de documentation fonctionnelles",
            "Définition de besoin",
            "Rédaction d'Users Stories",
            "Facilitation d’atelier d’équipes",
            "Rituels Agiles SCRUM",
          ],
        ],
        finalDescrition: "Méthode : SCRUM \nOutil : JIRA, Confluence, G Suite ",
      },
      {
        dates: "Juin - Août 2019",
        title: "Designer - Design Thinking",
        place: "Infotel",
        description: "",
        lists: [
          [
            "Mise en place d’un processus de Design Thinking",
            "Réalisation d’un parcours utilisateur (Customer Journey Map)",
            "Réalisation d’une carte d'empathie",
            "Réalisation d’interview utilisateur",
            "Organisation d’un atelier de génération d’idées",
            "Réalisation de maquettes animées",
            "Présentation à l’utilisateur",
            "Rituels Agiles SCRUM",
          ],
        ],
        finalDescrition:
          "Outils : TargetProcess, Powerpoint, Excel, G suite, SCRUM, Gravit Design, Invision",
      },
    ],
    trainings: [
      {
        dates: "Janvier 2021 - Actuel",
        title: "Formation d'UX design",
        place: "Oui.sncf",
        description:
          "Au sein des équipes d’information voyageur et de M-Commerce",
        lists: [
          [
            "Recherche Utilisateur",
            "Architecture de l'information",
            "Réalisation d'interviews utilisateurs",
            "Test utilisateurs",
            "Animation d'ateliers d'idéations",
            "Wireframes",
            "Maquettes",
          ],
        ],
        finalDescrition: "",
      },
      {
        dates: "2019 - 2020",
        title:
          "Master 2 : Expert en Strategie digital - Titre obtenu RNCP Niveau 1",
        place: "ESD Paris",
        description: "",
        lists: [
          [
            "Data Analyse",
            "Product management",
            "Inbound marketing",
            "Test utilisateurs",
          ],
          ["UI Design", "Marketing Mobile", "Design de service"],
        ],
        finalDescrition: "",
      },
    ],
    projects: [
      {
        dates: "2019",
        title:
          "Développeur IoT, Node, Designer, Architecte Logiciel & Chef de projet",
        place: "Smartbutler",
        description:
          "SmartBulter est un concept de bar futuriste, il permet de réaliser des cocktails de façon autonome et à distance via le réseau wifi.",
        lists: [
          [
            "Conception de l’architecture",
            "Design de l’interface web",
            "Rédaction des tâches",
            "Mise en place de l’environnement d’intégration continue",
            "Organisation des points d’équipes",
            "Développement en C sur la carte WIFI",
            "Développement du serveur Node",
          ],
        ],
        finalDescrition:
          "Outils : TargetProcess, Powerpoint, Excel, G suite, SCRUM, Gravit Design, Invision",
      },
    ],
    skills: [
      {
        title: "Langages",
        data: ["JS", "PHP", "Swift", "Kotlin"],
      },
      {
        title: "Outils",
        data: [
          "Jenkins",
          "Gitlab",
          "Jira",
          "Confluence",
          "CI",
          "Scrum",
          "GitFlow",
          "Docker",
        ],
      },
      {
        title: "Frameworks",
        data: ["Node", "React", "Angular", "Express", "Redux", "PWA"],
      },
      {
        title: "Produit & Design",
        data: [
          "Animation d’ateliers",
          "Gestion de projets",
          "Google Analytics",
          "Communication",
          "Data studio",
          "Figma",
          "Suite Adobe",
        ],
      },
    ],
    languages: [
      {
        title: "Anglais",
        data: ["Pratique régulière", "2 passages / an en angleterre"],
      },
      {
        title: "Espagnol",
        data: ["Pratique régulière", "7 mois vécus en Espagne"],
      },
    ],
    hobbies: [
      {
        title: "Activités",
        data: ["Pratique régulière", "2 passages / an en angleterre"],
      },
      {
        title: "Intérets",
        data: [
          "High tech",
          "Challenge",
          "Développement personnel",
          "Minimalisme",
          "Digital Nomade",
        ],
      },
    ],
  });
};