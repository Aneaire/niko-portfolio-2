interface JobDescription {
  title: string;
  des: string;
  list: string[];
}

interface Experience {
  id: string;
  title: string;
  titledes: string;
  des1: string;
  des2?: string;
  list?: string[];
  jobDes?: JobDescription;
}

const Experience: Experience[] = [
  {
    id: "hk23g4jqasd",
    title: "Director of Marketing and Sales/Senior Operations Manager",
    titledes:
      "At Expert Solutions Outsourcing line of Business in Digital Marketing, handled Marketing Experts ,Web Developer, SEO, Customer Service OM, Amazon FBA Expert  (December 2015- 2023  September 1 )",
    des1: "Lead the marketing team in planning and executing marketing activities such as but not limited to Market Research and Analytics, Market Scanning, Forecasting and Budgeting, Marketing program execution, Sales support activities and Business Development etc.",
    des2: "As Director of Marketing in Digital Marketing Agency, I oversee the daily performance Marketing team and Sales team,This includes the analysis and review of the day-to-day operations, Marketing Ads, budget management, team development, Business development and client satisfaction ",
    list: [
      "I am responsible for Brand Awareness of the company globally by running SEM, PPC,and ads on across all  Social media Platforms",
      "Strategic Marketing",
      "Brand / Product Management",
      "Digital Marketing",
      "Events Management",
      "Market Research",
      "Content Writing",
      "Marketing Communications",
      "I have Experience in Management, Operations, and Leadership",
      "Proficiency with technology, especially computers, software applications, and phone systems",
      "Exceptional verbal and written communication skills",
      "Highly developed interpersonal and people management skills, including ability to interact with and influence people at all levels",
      "Strong Knowledge of performance evaluation and customer service metrics",
      "Excellent coaching, engagement and development of people skills",
      "Excellent problem solving and analytical skills",
      "Excellent Organizational and time-management skill",
    ],
    jobDes: {
      title: "Job Description",
      des: "Contribute, Manage operations and recommendations to strategic plans and reviews; prepare and complete action plans; implement production, productivity, quality and customer-service standards; resolve problems; complete audits; identify trends. And the Chief of Business Development.",
      list: [
        "Develop, implement, and review operational policies and procedures.",
        "Assist HR with recruiting when necessary.",
        "Help promote a company culture that encourages top performance and high morale.",
        "Oversee budgeting, reporting, planning, and auditing.",
        "Work with senior stakeholders.",
        "Ensure all legal and regulatory documents are filed and monitor compliance with laws and regulations.",
        "Work with the board of directors to determine values and mission, and plan for short and long-term goals.",
        "Identify and address problems and opportunities for the company.",
        "Build alliances and partnerships with other organizations. Support worker ",
        "communication with the management team",
      ],
    },
  },
  {
    id: "aksdjhoasd",
    title: "Arvato BertelsMann (January 2012- 2015 March 6th  ) ",
    titledes:
      "Project Manager/ Marketing Manager for the Line of Business, Horizon also known as Facebook Inc.",
    des1: "I oversee planning, implementing, and monitoring our digital marketing campaigns across all digital networks. Experience in marketing, art direction, and social media management. In addition to being an outstanding communicator, I also demonstrate excellent interpersonal and analytical skills.",
    des2: "As Director of Marketing in Digital Marketing Agency, I oversee the daily performance Marketing team and Sales team,This includes the analysis and review of the day-to-day operations, Marketing Ads, budget management, team development, Business development and client satisfaction ",
    jobDes: {
      title: "Job Description",
      des: "I Approved Facebook Ads Run Ads PPC/ SEM ",
      list: [
        "Interpreting data, analyzing results using statistical techniques for Facebook",
        "Developing and implementing data analyses, data collection systems and other strategies that optimize statistical efficiency and quality of Facebook Ads ",
        "Acquiring data from primary or secondary data sources and maintaining databases",
        "We Protect sensitive Information for Facebook users            ",
        "Design and oversee all aspects of our digital marketing department including our ",
        "marketing database, email, and display advertising campaigns.",
        "Develop and monitor campaign budgets.",
        "Plan and manage our social media platforms.",
        "•	Prepare accurate reports on our marketing campaign's overall performance.",
        "Coordinate with advertising and media experts to improve marketing results.",
        "Identify the latest trends and technologies affecting our industry.",
        "Evaluate important metrics that affect our website traffic, service quotas, and target audience.",
        "Work with your team to brainstorm new and innovative growth strategies.",
      ],
    },
  },
];

export { Experience };
export type { Experience as ExperienceType, JobDescription };
