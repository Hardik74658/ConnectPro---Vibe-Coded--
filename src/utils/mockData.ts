// Types
export interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  bio: string;
  email: string;
  location: string;
  experience: Experience[];
  skills: string[];
  education: Education[];
  socialLinks: SocialLink[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  remote: boolean;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
}

export interface Recruiter {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  avatar: string;
  postedJobs: string[];
}

// Mock Profiles
export const mockProfiles: Profile[] = [
  {
    id: "loggedInUser", // Unique ID for the logged-in user
    name: "Jane Doe",
    title: "Frontend Developer",
    company: "TechCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", // Replace with the actual avatar path or URL used in Navbar
    bio: "Frontend Developer", // Shortened bio
    email: "janedoe@example.com",
    location: "New York, NY",
    skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"],
    experience: [
      {
        id: "exp1",
        role: "Frontend Developer",
        company: "TechCorp",
        location: "New York, NY",
        startDate: "2020-06",
        endDate: null,
        description: "Developing and maintaining user interfaces for enterprise applications.",
      },
      {
        id: "exp2",
        role: "UI/UX Designer",
        company: "Designify",
        location: "San Francisco, CA",
        startDate: "2018-03",
        endDate: "2020-05",
        description: "Designed user-friendly interfaces and collaborated with developers to implement them.",
      },
    ],
    education: [
      {
        id: "edu1",
        institution: "New York University",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        startDate: "2014",
        endDate: "2018",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
      { platform: "GitHub", url: "https://github.com/janedoe" },
    ],
  },
  {
    id: "p1", // Ensure this matches the URL parameter
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    company: "TechCorp",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Experienced software engineer with expertise in React, Node.js, and cloud architecture.",
    email: "alex.johnson@example.com",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "AWS"],
    experience: [
      {
        id: "exp1",
        role: "Senior Software Engineer",
        company: "TechCorp",
        location: "San Francisco, CA",
        startDate: "2020-03",
        endDate: null,
        description: "Leading frontend development team.",
      },
    ],
    education: [
      {
        id: "edu1",
        institution: "Stanford University",
        degree: "Master's Degree",
        field: "Computer Science",
        startDate: "2015",
        endDate: "2017",
      },
    ],
    socialLinks: [],
  },
  {
    id: "p2",
    name: "Samantha Lee",
    title: "UX/UI Designer",
    company: "DesignHub",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Creative UX/UI designer with a focus on user-centered design. I blend aesthetics with functionality to create intuitive and beautiful digital experiences.",
    email: "samantha.lee@example.com",
    location: "Seattle, WA",
    experience: [
      {
        id: "exp1",
        role: "Senior UX/UI Designer",
        company: "DesignHub",
        location: "Seattle, WA",
        startDate: "2019-01",
        endDate: null,
        description: "Leading design team and creating user-centered design solutions for various clients.",
      },
      {
        id: "exp2",
        role: "UX Designer",
        company: "CreativeMinds",
        location: "Portland, OR",
        startDate: "2016-05",
        endDate: "2018-12",
        description: "Collaborated with developers to implement user-friendly interfaces for web and mobile applications.",
      },
    ],
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Sketch", "Prototyping"],
    education: [
      {
        id: "edu1",
        institution: "Rhode Island School of Design",
        degree: "Bachelor's Degree",
        field: "Graphic Design",
        startDate: "2012",
        endDate: "2016",
      },
    ],
    socialLinks: [],
  },
  {
    id: "p3",
    name: "David Kim",
    title: "Product Manager",
    company: "InnovateTech",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Strategic product manager with a background in software engineering. Skilled in identifying market opportunities and translating them into successful products that users love.",
    email: "david.kim@example.com",
    location: "Austin, TX",
    experience: [
      {
        id: "exp1",
        role: "Senior Product Manager",
        company: "InnovateTech",
        location: "Austin, TX",
        startDate: "2018-08",
        endDate: null,
        description: "Leading product strategy and roadmap for AI-powered analytics platform.",
      },
      {
        id: "exp2",
        role: "Product Manager",
        company: "DataInsights",
        location: "Chicago, IL",
        startDate: "2016-03",
        endDate: "2018-07",
        description: "Managed the development and launch of data visualization tools.",
      },
      {
        id: "exp3",
        role: "Software Engineer",
        company: "Tech Solutions",
        location: "Chicago, IL",
        startDate: "2014-01",
        endDate: "2016-02",
        description: "Developed backend services for enterprise applications.",
      },
    ],
    skills: ["Product Strategy", "Agile Methodologies", "User Research", "Analytics", "Wireframing", "SQL"],
    education: [
      {
        id: "edu1",
        institution: "University of Michigan",
        degree: "Master's Degree",
        field: "Business Administration",
        startDate: "2012",
        endDate: "2014",
      },
      {
        id: "edu2",
        institution: "Georgia Tech",
        degree: "Bachelor's Degree",
        field: "Computer Engineering",
        startDate: "2008",
        endDate: "2012",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/davidkim" },
      { platform: "Medium", url: "https://medium.com/@davidkim" },
    ],
  },
  {
    id: "p4",
    name: "Rachel Chen",
    title: "Data Scientist",
    company: "DataCorp",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Data scientist specializing in machine learning and predictive modeling. Passionate about turning complex data into actionable insights.",
    email: "rachel.chen@example.com",
    location: "Boston, MA",
    experience: [
      {
        id: "exp1",
        role: "Senior Data Scientist",
        company: "DataCorp",
        location: "Boston, MA",
        startDate: "2019-05",
        endDate: null,
        description: "Developing machine learning models to predict customer behavior and optimize business processes.",
      },
      {
        id: "exp2",
        role: "Data Analyst",
        company: "ConsultFirm",
        location: "New York, NY",
        startDate: "2017-02",
        endDate: "2019-04",
        description: "Conducted statistical analysis and created data visualizations for client reports.",
      },
    ],
    skills: ["Python", "R", "Machine Learning", "SQL", "TensorFlow", "Data Visualization"],
    education: [
      {
        id: "edu1",
        institution: "Massachusetts Institute of Technology",
        degree: "Master's Degree",
        field: "Data Science",
        startDate: "2015",
        endDate: "2017",
      },
      {
        id: "edu2",
        institution: "Cornell University",
        degree: "Bachelor's Degree",
        field: "Statistics",
        startDate: "2011",
        endDate: "2015",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/rachelchen" },
      { platform: "GitHub", url: "https://github.com/rachelchen" },
    ],
  },
  {
    id: "p5",
    name: "James Wilson",
    title: "DevOps Engineer",
    company: "CloudTech",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "DevOps engineer focused on automating infrastructure and streamlining deployment processes. Experienced in cloud technologies and containerization.",
    email: "james.wilson@example.com",
    location: "Denver, CO",
    experience: [
      {
        id: "exp1",
        role: "Lead DevOps Engineer",
        company: "CloudTech",
        location: "Denver, CO",
        startDate: "2020-01",
        endDate: null,
        description: "Leading infrastructure automation and CI/CD implementation.",
      },
      {
        id: "exp2",
        role: "Systems Administrator",
        company: "ServerSolutions",
        location: "Salt Lake City, UT",
        startDate: "2016-07",
        endDate: "2019-12",
        description: "Managed on-premise and cloud infrastructure for enterprise clients.",
      },
    ],
    skills: ["Kubernetes", "Docker", "AWS", "Jenkins", "Terraform", "Linux"],
    education: [
      {
        id: "edu1",
        institution: "University of Colorado",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        startDate: "2012",
        endDate: "2016",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/jameswilson" },
      { platform: "GitHub", url: "https://github.com/jameswilson" },
    ],
  },
  {
    id: "p6",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "BrandBoost",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Strategic marketing leader with expertise in digital marketing and brand development. Passionate about creating compelling campaigns that drive growth.",
    email: "emily.rodriguez@example.com",
    location: "Miami, FL",
    experience: [
      {
        id: "exp1",
        role: "Marketing Director",
        company: "BrandBoost",
        location: "Miami, FL",
        startDate: "2019-06",
        endDate: null,
        description: "Overseeing all marketing initiatives and developing comprehensive marketing strategies.",
      },
      {
        id: "exp2",
        role: "Marketing Manager",
        company: "AdAgency",
        location: "Atlanta, GA",
        startDate: "2016-03",
        endDate: "2019-05",
        description: "Managed digital marketing campaigns for multiple high-profile clients.",
      },
      {
        id: "exp3",
        role: "Social Media Specialist",
        company: "SocialBoost",
        location: "Atlanta, GA",
        startDate: "2014-01",
        endDate: "2016-02",
        description: "Created and implemented social media strategies for various brands.",
      },
    ],
    skills: ["Digital Marketing", "Content Strategy", "SEO", "Social Media Marketing", "Brand Development", "Analytics"],
    education: [
      {
        id: "edu1",
        institution: "University of Florida",
        degree: "Bachelor's Degree",
        field: "Marketing",
        startDate: "2010",
        endDate: "2014",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/emilyrodriguez" },
      { platform: "Twitter", url: "https://twitter.com/emilyrodriguez" },
    ],
  },
];

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: "j1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyLogo: "https://logo.clearbit.com/apple.com",
    location: "San Francisco, CA",
    remote: true,
    type: "Full-time",
    salary: "$120,000 - $150,000",
    postedDate: "2023-04-01",
    description: "We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining user interfaces for our web applications.",
    requirements: [
      "5+ years of experience with React.js",
      "Strong understanding of JavaScript, HTML, and CSS",
      "Experience with state management libraries (Redux, MobX, etc.)",
      "Experience with modern frontend build tools",
      "Solid understanding of responsive design principles",
    ],
    responsibilities: [
      "Develop and maintain high-quality user interfaces",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable, and efficient code",
      "Optimize applications for maximum performance",
      "Implement responsive designs that work across different devices",
    ],
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Redux"],
  },
  {
    id: "j2",
    title: "UX/UI Designer",
    company: "DesignHub",
    companyLogo: "https://logo.clearbit.com/google.com",
    location: "Seattle, WA",
    remote: true,
    type: "Full-time",
    salary: "$90,000 - $120,000",
    postedDate: "2023-04-02",
    description: "DesignHub is seeking a talented UX/UI Designer to create visually appealing and user-friendly interfaces for our clients' projects.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Portfolio showcasing your design work",
      "Understanding of user-centered design principles",
      "Ability to communicate design decisions effectively",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product managers and developers",
      "Create and maintain design systems",
      "Stay up-to-date with design trends and best practices",
    ],
    skills: ["UI Design", "UX Research", "Figma", "Sketch", "Prototyping", "Design Systems"],
  },
  {
    id: "j3",
    title: "Data Scientist",
    company: "DataCorp",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    location: "Boston, MA",
    remote: false,
    type: "Full-time",
    salary: "$110,000 - $140,000",
    postedDate: "2023-04-03",
    description: "DataCorp is looking for a Data Scientist to join our analytics team. You will help develop machine learning models and extract insights from complex datasets.",
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "Strong programming skills in Python or R",
      "Experience with machine learning libraries and frameworks",
      "Knowledge of SQL and database systems",
      "Excellent analytical and problem-solving skills",
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Analyze large datasets to extract actionable insights",
      "Collaborate with data engineers and business stakeholders",
      "Create data visualizations and reports",
      "Stay current with advances in data science and machine learning",
    ],
    skills: ["Python", "R", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
  },
  {
    id: "j4",
    title: "DevOps Engineer",
    company: "CloudTech",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    location: "Denver, CO",
    remote: true,
    type: "Full-time",
    salary: "$100,000 - $130,000",
    postedDate: "2023-04-04",
    description: "CloudTech is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization technologies",
      "Familiarity with infrastructure as code tools",
      "Understanding of CI/CD principles and tools",
    ],
    responsibilities: [
      "Design and implement cloud infrastructure",
      "Automate deployment processes and build CI/CD pipelines",
      "Monitor and optimize system performance",
      "Implement security best practices",
      "Troubleshoot and resolve infrastructure issues",
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"],
  },
  {
    id: "j5",
    title: "Product Manager",
    company: "InnovateTech",
    companyLogo: "https://logo.clearbit.com/facebook.com",
    location: "Austin, TX",
    remote: false,
    type: "Full-time",
    salary: "$115,000 - $145,000",
    postedDate: "2023-04-05",
    description: "InnovateTech is looking for a Product Manager to lead our product development efforts and drive the roadmap for our AI-powered analytics platform.",
    requirements: [
      "5+ years of experience in product management",
      "Strong understanding of agile methodologies",
      "Experience with data-driven decision making",
      "Excellent communication and leadership skills",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitive landscape",
      "Conduct user research and feedback analysis",
    ],
    skills: ["Product Strategy", "Agile", "User Research", "Market Analysis", "Wireframing", "Analytics"],
  },
  {
    id: "j6",
    title: "Marketing Specialist",
    company: "BrandBoost",
    companyLogo: "https://logo.clearbit.com/twitter.com",
    location: "Miami, FL",
    remote: true,
    type: "Full-time",
    salary: "$70,000 - $90,000",
    postedDate: "2023-04-06",
    description: "BrandBoost is seeking a Marketing Specialist to help develop and execute digital marketing campaigns for our clients.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with marketing analytics tools",
      "Strong written and verbal communication skills",
      "Creativity and attention to detail",
    ],
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Manage social media accounts and content",
      "Monitor and report on campaign performance",
      "Conduct keyword research and optimize content for SEO",
      "Collaborate with content creators and designers",
    ],
    skills: ["Digital Marketing", "Social Media", "SEO", "SEM", "Content Marketing", "Analytics"],
  },
];

export const mockRecruiters: Recruiter[] = [
  {
    id: 'rec1',
    name: 'Sarah Thompson',
    email: 'sarah@techcorp.com',
    company: 'TechCorp',
    title: 'Senior Technical Recruiter',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    postedJobs: ['j1', 'j2', 'j3']
  },
  {
    id: 'rec2',
    name: 'Michael Chen',
    email: 'michael@innovatetech.com',
    company: 'InnovateTech',
    title: 'Talent Acquisition Manager',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    postedJobs: ['j4', 'j5']
  }
];

// Helper function to get profile by ID
export const getProfileById = (id: string): Profile | undefined => {
  return mockProfiles.find(profile => profile.id === id);
};

// Helper function to get job by ID
export const getJobById = (id: string): Job | undefined => {
  return mockJobs.find(job => job.id === id);
};

// Helper function to get similar jobs based on skills
export const getSimilarJobs = (jobId: string, limit: number = 3): Job[] => {
  const job = getJobById(jobId);
  if (!job) return [];
  
  return mockJobs
    .filter(j => j.id !== jobId)
    .sort((a, b) => {
      const aMatchCount = a.skills.filter(skill => job.skills.includes(skill)).length;
      const bMatchCount = b.skills.filter(skill => job.skills.includes(skill)).length;
      return bMatchCount - aMatchCount;
    })
    .slice(0, limit);
};

// Helper function to get similar profiles based on skills
export const getSimilarProfiles = (profileId: string, limit: number = 3): Profile[] => {
  const profile = getProfileById(profileId);
  if (!profile) return [];
  
  return mockProfiles
    .filter(p => p.id !== profileId)
    .sort((a, b) => {
      const aMatchCount = a.skills.filter(skill => profile.skills.includes(skill)).length;
      const bMatchCount = b.skills.filter(skill => profile.skills.includes(skill)).length;
      return bMatchCount - aMatchCount;
    })
    .slice(0, limit);
};

// Add helper functions for recruiters
export const getRecruiterById = (id: string): Recruiter | undefined => {
  return mockRecruiters.find(recruiter => recruiter.id === id);
};

export const getRecruiterJobs = (recruiterId: string): Job[] => {
  const recruiter = getRecruiterById(recruiterId);
  if (!recruiter) return [];
  return mockJobs.filter(job => recruiter.postedJobs.includes(job.id));
};
