const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Diponegoro University',
                degree: "Bachelor of Computer Science (B.C.S. / S.Kom.)",
                major: "Informatics",
                detail: "Studying Informatics / Computer Science at Diponegoro University for 3 years, 8 months, 1 week, and 5 days (1350 days in total) with GPA of 3.63/4.00 (Cum Laude). Studies: Data Science, Data Mining, Big Data, Machine Learning, Programming & Algorithms, Algorithmic Strategies & Analysis, Pattern Recognition, Object-Oriented Programming, Intelligent System, Modeling & Simulation, Computer Vision, Evolutionary Algorithm, Data Structures, Logic in Informatics, Project Management, Statistics, Mathematics, Numerical Methods, Linear Algebra, Databases, Database Management, Information Assurance & Security. Software Engineering, Software Project, Software Testing, Platform-Based Development, Operating System, Information System, Computer Graphics & Visualization, Programming Fundamentals, English.",
                year: '2020 - 2024'
            },
            {
                id: 1,
                title: 'Bangkit Academy (Kampus Merdeka)',
                degree: 'Student of Machine Learning',
                major: "Machine Learning",
                detail: "Studying Machine Learning (and Deep Learning) at Bangkit Academy that was organized by Google, GoTo, and Traveloka. Studies: Advanced Deployment Scenarios with TensorFlow, Browser-based Models with TensorFlow.js, Convolutional Neural Networks in TensorFlow, Data Pipelines with TensorFlow Data Services, DeepLearning.AI TensorFlow Developer Specialization, Device-based Models with TensorFlow Lite, TensorFlow for AI, Machine Learning, and Deep Learning, Natural Language Processing in TensorFlow, Sequences, Time Series and Prediction, Structuring Machine Learning Projects, TensorFlow: Data and Deployment Specialization, Advanced Learning Algorithms, Machine Learning Specialization, Supervised Machine Learning: Regression and Classification, Unsupervised Learning, Recommenders, Reinforcement Learning, Mathematics, Calculus, Statistics, Probability, and Linear Algebra for Machine Learning and Data Science, Prepare Data for Exploration, Process Data from Dirty to Clean, Share Data Through the Art of Visualization, Git and GitHub.",
                year: '2023 - 2024'
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Self-Employed Freelance',
                role: 'Data Science & Software Engineer',
                url: 'https://github.com/Arckitechttt/',
                desc: "Developed an image segmentation model using MobileNetv3 which detects rice plant diseases in pictures.;Developed a time-series forecasting model using Support Vector Regression (SVR) to forecast rainfall.;Developed a time-series forecasting model using Backpropagation and Holt-Winter to forecast stock prices.;Developed a time-series forecasting model using Prophet, Particle Swarm Optimization (PSO), and Improved Seagull Optimization Algorithm (ISOA) to forecast stock prices.;Developed a segmentation model using K-Nearest Neighbor (KNN) and Principal Component Analysis (PCA) to segment football clubs' based on their performance characteristics.;Developed a website (for demonstration purposes only) capable of identifying the closest branch of an X Company (the company didn't permiss its name to be displayed here) to a specific inputted location (latitude & longitude) data.",
                year: '12/2022 - 05/2024',
                location: 'Remote'
            },
            {
                id: 2,
                title: 'Diponegoro University',
                role: 'Research Assistant',
                url: 'https://penelitianlppm.online/',
                desc: 'Developed an automated monitoring system (SiMAPeDI) with my lecturers in Diponegoro University that is developed to help shrimp / fish farmers on monitoring the water quality of their farm. The automated monitoring system is a website that is connected to microcontrollers where those microcontrollers will send the water quality data every 10 seconds to the database of the website in real-time. The website was developed using Laravel, SQL, JavaScript, HTML, and CSS.;Received Patent Rights on SiMAPeDI (Patent: EC002023110389, Registration Number: 000543344).',
                year: '10/2022 - 10/2023',
                location: 'Central Java, Indonesia'
            },
            {
                id: 3,
                title: 'Human Initiative Headquarter',
                role: 'Web Developer Internship',
                url: 'Not Hosted',
                desc: "Developed a website for library management system that will be used in all of Human Initiative office branches using PHP, SQL, MySQL, JavaScript, CSS, HTML, and DataTables.;Created a Dashboard for the Admin user-level to monitor the website's traffic.;Created CRUD features to fulfill all of the users' and stakeholders' unique requirements.",
                year: '01/2023 - 03/2023',
                location: 'West Java, Indonesia'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
