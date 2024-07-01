export const NAME = 'Alfrethanov Christian Wijaya';

export const DESIGNATION = `Data | Web2 | Web3 Enthusiast`;

function calculateAge(date) {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const birthDate = '2001-11-23';
export const age = calculateAge(birthDate);

export const DETAILS = {
  Residence: 'Indonesia',
  City: 'Bekasi',
  Age: age,
};

export const SKILLS = [
  {
    title: 'Data Science',
    level: '84%',
  },
  {
    title: 'Machine Learning Engineer',
    level: '80%',
  },
  {
    title: 'Artificial Intelligence (AI) Engineer',
    level: '76%',
  },
  {
    title: 'Data Analyst',
    level: '74%',
  },
  {
    title: 'Data Engineer',
    level: '68%',
  },
  {
    title: 'Software Engineer',
    level: '68%',
  },
];

export const TECH_STACK = [
  "Python",
  "R",
  "SQL",
  "Stan",
  "MS Excel",
  "Google Sheets)",
  "JavaScript",
  "Jupyter",
  "NoSQL",
  "MySQL",
  "Firebase",
  "JSON",
  "TensorFlow",
  "TFLite",
  "Keras",
  "PyTorch",
  "Flask",
  "Spark",
  "Hadoop",
  "Tableau",
  "Machine Learning",
  "Deep Learning",
  "Prophet",
  "SVM",
  "SVR",
  "KNN",
  "Neural Networks",
  "MobileNet",
  "YOLO",
  "CNN",
  "LSTM",
  "Backpropagation",
  "Statistical Algorithms",
  "L-BFGS",
  "MCMC Sampling",
  "HMC",
  "NUTS",
  "Holt-Winters",
  "Optimization Algorithms",
  "PSO",
  "Grey Wolf",
  "Bayesian Optimization",
  "ISOA",
  "Laravel",
  "NextJS",
  "NodeJS",
  "ReactJS",
  "ThingSpeak",
  "PHP",
  "HTML",
  "CSS",
  "GitHub",
  "Git",
  "Powershell",
  "Ubuntu",
  "NPM",
  "PIP",
  "Figma",
  "UML",
  "Trello",
  "Oracle Primavera P6",
  "Selenium",
  "Data Sciences",
  "Data Analytics",
  "Data Engineering",
  "ETL",
  "Data Mining",
  "Data Visualization",
  "Data Cleaning / Processing",
  "Data Structures",
  "Dashboard Creation",
  "Database",
  "Database Management",
  "Statistics",
  "Linear Algebra",
  "Forecasting / Prediction",
  "Segmentation / Classification / Clustering",
  "Segmentation / Cluster Analysis",
  "Time Series Analysis",
  "Sentiment Analysis",
  "Object Detection",
  "Image Segmentation",
  "Data Scraping",
  "Statistical Inference",
  "Statistical Sampling",
  "Bayesian Inference",
  "Model Development & Deployment",
  "Model Validation",
  "Software Engineering",
  "Software Testing",
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "UI/UX",
  "CRUD",
  "Geolocation",
  "Responsive Web Design",
  "Waterfall Project Management",
  "Agile Project Management",
  "Object-Oriented Programming",
  "Black-box Testing",
  "White-box Testing",
];

export const CONTACTS = {
  EMAIL: 'alfrethanovcwjy@gmail.com',
  PHONE: '+6287877099501',
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/Arckitechttt/',
  LINKEDIN: 'https://www.linkedin.com/in/alfrethanovchristianwijaya/',
  TWITTER: 'https://twitter.com/iosamajavaid',
  FACEBOOK: 'https://www.facebook.com/iosamajavaid',
  INSTAGRAM: 'https://www.instagram.com/alfrethanovcwjy/',
};