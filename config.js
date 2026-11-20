// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Aris D'Silva",
    program: "Automation Engineering / Engineering",
    university: "McMaster University, Canada",
    email: "dsilva3@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

 theme: {
    heroBg: "#263238",
    heroText: "#ffffff",
    pageBg: "#f3f6f8",
    accent: "#607d8b"
  },

  dividers: {
    dividerBg: "#455a64",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Development of Digital Twin of a Railway Corridor Using Unity Game Engine and SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Blender → Unity → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Traffic congestion is a major challenge in modern urban transportation systems.",
    		"Human-driven vehicles are influenced by individual driving behaviour and reaction times.",
    		"Autonomous vehicles have the potential to improve traffic flow through coordinated driving behaviour.",
    		"SUMO provides a simulation environment to evaluate traffic performance under different vehicle scenarios."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Traffic congestion reduces roadway efficiency and increases travel delays.",
    		"Human-driven vehicles can produce inconsistent traffic behaviour.",
    		"The impact of fully autonomous vehicles on traffic flow needs further evaluation.",
    		"A simulation-based comparison is needed to understand differences in traffic performance."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Select a roadway study area and identify the roadway edge for analysis.",
   			"Develop a baseline SUMO simulation using 100% human-driven vehicles.",
    		"Develop a Scenario 1 simulation using 100% autonomous vehicles and compare traffic performance.",
    		"Present the project methodology and findings through a web showcase."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
      title: "Step 1: Study Area Selection",
      text: "Select the roadway intersection and identify the SUMO roadway edge for traffic analysis.",
      image: "assets/img/image2.jpg"
    },
    {
      title: "Step 2: Baseline Traffic Simulation",
      text: "Simulate roadway traffic using 100% human-driven vehicles in SUMO.",
      image: "assets/img/image3.jpg"
    },
    {
      title: "Step 3: Autonomous Vehicle Simulation",
      text: "Simulate the same roadway using 100% autonomous vehicles.",
      image: "assets/img/image4.jpg"
    },
    {
      title: "Step 4: Results and Comparison",
      text: "Compare speed-density diagrams to evaluate differences in traffic behaviour.",
      image: "assets/img/image5.jpg"
    }
  ]
},

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
      title: "Module 1: Study Area Selection",
      bullets: [
        { text: "Select the roadway intersection for the traffic simulation study." },
        { text: "Identify the roadway edge used for traffic performance analysis." },
        { text: "Establish the study area and simulation requirements in SUMO." }
      ],
      image: "assets/img/image2.jpg"
    },
    {
      title: "Module 2: Baseline Scenario (100% HDV)",
      bullets: [
        { text: "Configure the SUMO simulation with 100% human-driven vehicles." },
        { text: "Run the baseline traffic simulation and collect traffic data." },
        { text: "Generate the speed-density fundamental diagram for the selected roadway edge." }
      ],
      image: "assets/img/image3.jpg"
    },
    {
      title: "Module 3: Autonomous Vehicle Scenario (100% AV)",
      bullets: [
        { text: "Configure Scenario 1 with 100% autonomous vehicles." },
        { text: "Run the autonomous vehicle simulation under the same roadway conditions." },
        { text: "Generate the speed-density diagram for comparison with the baseline scenario." }
      ],
      image: "assets/img/image4.jpg"
    },
    {
      title: "Module 4: Results and Comparative Analysis",
      bullets: [
        { text: "Compare the speed-density diagrams from both simulation scenarios." },
        { text: "Evaluate differences in vehicle speeds, density and traffic behaviour." },
        { text: "Discuss the findings, limitations and potential improvements." }
      ],
      image: "assets/img/image5.jpg"
    }
  ]
},

	results: {
  title: "Results & Potential Improvements",
  subtitle:
    "Comparison of SUMO traffic simulation results for 100% human-driven vehicles and 100% autonomous vehicles using speed-density fundamental diagrams for the same roadway edge.",

  charts: {
    left: {
      title: "Base Scenario — 100% Human-Driven Vehicles",
      src: "assets/img/image6.jpg",
      alt: "Speed-density diagram for the baseline scenario with 100% human-driven vehicles"
    },
    right: {
      title: "Scenario 1 — 100% Autonomous Vehicles",
      src: "assets/img/image7.jpg",
      alt: "Speed-density diagram for Scenario 1 with 100% autonomous vehicles"
    }
  },

  discussionTitle: "Discussion",
  discussionBullets: [
    "The autonomous vehicle scenario shows a higher estimated free-flow speed compared with the human-driven vehicle baseline.",
    "The estimated free-flow speed is approximately 13.5 m/s for autonomous vehicles and 12.5 m/s for human-driven vehicles.",
    "The estimated jam density is approximately 1,007 vehicles/km for autonomous vehicles compared with 1,300 vehicles/km for human-driven vehicles.",
    "The speed-density relationships have relatively weak Greenshields model fits, with R-squared values of approximately 0.139 and 0.218.",
    "The results suggest differences in traffic behaviour, but the model fits are insufficient to establish a conclusive improvement in roadway capacity or congestion."
  ]
},
  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Aris D'Silva", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://adsilva3.github.io/smartcity-projecta.github.io/"
  }
};
