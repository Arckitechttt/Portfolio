const expertise = [
    {
        id: 0,
        title: 'Data Science',
        desc: 'I am a skilled Data Scientist with extensive experiences in performing Data Analysis, Data Engineering, Machine Learning (ML) Engineering, and Artificial Intelligence (AI) Engineering using Python, R, SQL, NoSQL, Spreadsheets, Jupyter, JavaScript, etc. I possess a strong understanding of data collection (Extract), data processing (Transform), database management (Load), developing machine learning or deep learning models, data visualization, etc. With my expertise, I can deliver dynamic and efficient data solutions tailored to meet the unique requirements of stakeholders.',
    },
    {
        id: 1,
        title: 'Machine Learning (ML) Engineer',
        desc: "As a Data Scientist, I'm proficient in developing machine learning or deep learning models using Python, TensorFlow, Keras, PyTorch, Neural Networks, and other Python Libraries. I use Python to use its comprehensive libraries, TensorFlow, Keras, PyTorch, Neural Networks, etc. to develop the machine learning or deep learning models with high quality. I have experiences in combining machine / deep learning models to improve its accuracy, such as Prophet + PSO + HMC + NUTS, Backpropagation + Holt-Winter, etc. My expertise ensures high-accuracy machine learning or deep learning models are delivered promptly.",
    },
    {
        id: 1,
        title: 'Artificial Intelligence (AI) Engineer',
        desc: "As an ML Engineer, I'm proficient in developing and deploying artificial intelligence (AI) models using Python, Flask, TensorFlow, PyTorch, JavaScript, etc. I use TensorFlow and PyTorch to save the trained model while ensuring its accuracy is maintained after the model is saved. I use Flask, a Python microframework, to deploy saved models to the backend side of a website. Python, TensorFlow, and PyTorch are vital to my success as a Data Science, ML Engineer, and AI Engineer. My expertise ensures high-accuracy AI models are delivered and deployed promptly.",
    },
    {
        id: 2,
        title: 'Data Analyst',
        desc: "I am proficient in using Python, SQL, NoSQL, and spreadsheet software to conduct Data Analysis. Before analyzing the data, I perform data transformation, a step of the ETL (Extract, Transform, Load) process, by combining multiple data variables using mathematical formulas, especially by leveraging Excel formulas, SQL queries, or the NumPy and Pandas libraries in Python. To generate data visualizations (in a chart format) and uncover unique trends or patterns, I utilize tools such as Excel or Python's data visualization libraries. Additionally, I sometimes use SQL to present the data in a tabular format for better understanding.",
    },
    {
        id: 3,
        title: 'Data Engineer',
        desc: "As a Data Scientist and Data Analyst, I'm proficient in conducting Data Engineering using Python, SQL, NoSQL, MySQL, Firebase, JSON, Spreadsheets, etc. I have executed numerous ETL processes using Python, SQL, R, Excel, Flask, TensorFlow, PyTorch, Spark, and Python Libraries in my projects as a Data Scientist and Data Analyst. My expertise ensures datasets are gathered, cleaned (transformed), and delivered promptly.",
    },
    {
        id: 4,
        title: 'Software Engineer',
        desc: "I am a skilled Software Engineer / Web Developer with some experiences in developing web applications using NextJS, Laravel, Firebase, MySQL, JSON, JavaScript, SQL, CSS, HTML, etc. I have numerous experiences in developing web applications using those programming languages and RDBMS. With my expertise, I can deliver web apps solutions tailored to meet the unique requirements of stakeholders.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
