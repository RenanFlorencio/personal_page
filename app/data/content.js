/**
 * Single source of content for the portfolio. Edit this file to update the site.
 */

export const content = {
  hero: {
    name: 'Renan Florencio',
    headline: 'Computer Engineering Student & Researcher',
    valueStatement: 'On my way to become an expert in machine learning and artificial intelligence.',
    location: 'Campinas, SP',
    email: 'r244808@dac.unicamp.br',
    linkedin: 'https://linkedin.com/in/renan-florencio-29770a247',
    github: 'https://github.com/RenanFlorencio',
    /** Profile photo: set to '/profile.jpg' and add public/profile.jpg to show your photo. Set to null to hide. */
    imageUrl: '/profile.jpeg',
    /** Cover/banner image for hero: set to '/cover.jpg' and add public/cover.jpg, or null for gradient. */
    coverImageUrl: '/cover.jpg',
    /** Cover crop focus. Presets: 'top' | 'center' | 'bottom' | 'left' | 'right'. Or set your own, e.g. '50% 25%' (horizontal% vertical%). */
    coverImagePosition: '50% 40%',
  },

  about: [
    'B.S. in Computer Engineering at Universidade Estadual de Campinas (Unicamp), expected July 2027.',
    'Research at Unicamp on synthesis of inertial data for driver behavior classification (CNPq / H.IAAC), and at Purdue University on LLM-based agents for optimization and formal reasoning (PONTES Mobility Program).',
    'Interests: machine learning, large language models, formal reasoning, and applied research.',
  ],

  experience: [
    {
      company: 'Purdue University: PONTES Mobility Program',
      role: 'Visiting Scholar',
      location: 'West Lafayette, IN',
      dates: 'Jan 2026 – July 2026',
      bullets: [
        'Investigating LLM-based agents for formal reasoning about optimization problems.',
        'Applying multi-agent workflows for equivalence between optimization problems.',
        'Developing Lean 4 code to prove equivalence between LP and MILP formulations.',
      ],
    },
    {
      company: 'Hub of Artificial Intelligence and Cognitive Architectures (H.IAAC)',
      role: 'Undergraduate Student Researcher',
      location: 'Campinas, SP',
      dates: 'Aug 2024 – Dec 2025',
      bullets: [
        'Researching synthesis of inertial data for classifying drivers with multiple behavior patterns (CNPq, H.IAAC).',
        'Designed and evaluated inertial sensor data synthesis techniques.',
        'Developed Python scripts to automatically generate driver routines and behaviors using LLMs.',
        'Used Random Forest, SVM, and XGBoost to classify behavior, and t-SNE to visualize data.',
        'Contributed to a standard baseline for the Driver Behavior Recognition field.',
      ],
    },
  ],

  projects: [
    {
      title: 'Simulated Driving Behavior',
      bullets: [
        'Researching synthesis of inertial data for classifying drivers with multiple behavior patterns (CNPq, H.IAAC).',
        'Designed and evaluated inertial sensor data synthesis techniques.',
        'Developed Python scripts to automatically generate driver routines and behaviors using LLMs.',
      ],
      tech: ['Pandas', 'scikit-learn', 'LLMs', 't-SNE'],
      link: 'https://github.com/H-IAAC/simulated_driving_behavior',
    },
    {
      title: 'Language Learning Agent',
      bullets: [
        'Used Langgraph to create an Agent to help search for content in a required language.',
        'Designed the data schema and the information storage and retrieval.',
        'Implemented a multi-agent framework with an orchestrator.',
        'Created an UI to interact with the user'
      ],
      tech: ['LangChain', 'LangGraph', 'LangSmith'],
      link: 'https://github.com/RenanFlorencio/language-learning-agent',
    },
    {
      title: 'Credit Card Fraud Detection',
      bullets: [
        'Preprocessed data and applied machine learning methods to classify an unbalanced dataset.',
        'Handled class imbalance and evaluated model performance for fraud detection.',
      ],
      tech: ['scikit-learn', 'Pandas'],
      link: 'https://github.com/RenanFlorencio/credit_card_fraud_detection',
    },
    {
      title: 'House Pricing Prediction',
      bullets: [
        'Predicting the price of a house based on its features.',
        'Used Models, SVR and Ensembles.',
        'Evaluated the best model using metrics like RMSE, MAE, and R².',
        'Analyzed feature importance and compared the models.'
      ],
      tech: ['Pandas', 'Scikit-learn'],
      link: 'https://github.com/RenanFlorencio/house_pricing_prediction',
    },
    {
      title: 'Computer Vision',
      bullets: [
        'Stitching a panorama using feature detection, matching, and image blending.',
        '3D reconstruction of a scene using several images.',
        'Live warning system for blind people using object detection.',
        'Analysis of generative AI models, LoRA and Stable Diffusion.'
      ],
      tech: ['OpenCV', 'LoRA', 'Stable Diffusion'],
      link: 'https://github.com/RenanFlorencio/computer_vision',
    },
    {
      title: 'Oportuni Application',
      bullets: [
        'Application to help students find internships and jobs.',
        'Implemented a web application using Django to help students find internships and jobs.',
        'Used MongoDB, HTML, CSS, and JavaScript to create the frontend and backend of the application.',
      ],
      tech: ['MongoDB', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/RenanFlorencio/oportuni_application',
    },
    {
      title: 'Titanic Survival Prediction',
      bullets: [
        'Creating a machine learning model to predict whether or not a passanger on Titanic survived,',
        'The project goes from cleaning the data to training different models and evaluating the best one.',
        'Used Random Forest, Logistic Regression, and Support Vector Machines.',
      ],
      tech: ['Pandas', 'Scikit-learn'],
      link: 'https://github.com/RenanFlorencio/titanic-survival-prediction',
    },
    {
      title: 'Numerical Calculus Methods',
      bullets: [
        'Standard methods implemented by me to get zero of functions, least squares and interpolation.'
      ],
      tech: ['Pandas', 'Scikit-learn'],
      link: 'https://github.com/RenanFlorencio/numerical_calculus',
    },
    {
      title: 'Data Structure Problems',
      bullets: [
        'Solved problems in C involving pointers, heaps, queues, graphs, linked lists, matrices, and more.',
        'Focused on correctness and clean implementation of classic data structures.',
      ],
      tech: ['C'],
      link: 'https://github.com/RenanFlorencio/data_structures',
    },  
    {
      title: 'Parallel Programming',
      bullets: [
        'Code develop for the Parallel Programming course, using OpenMP and CUDA .',
        'Used OpenMP to parallelize the code and CUDA to use the GPU.'
      ],
      tech: ['C', 'OpenMP', 'CUDA'],
      link: 'https://github.com/RenanFlorencio/parallel_computing',
    },
    {
      title: 'RISC-V Assembly Language',
      bullets: [
        'Repo for most of the code I wrote for the Assembly Programming course at university.', 
        'All of the code is written for the RISC-V architecture.'
      ],
      tech: ['Assembly'],
      link: 'https://github.com/RenanFlorencio/Assembly-Language',
    },
  ],

  publications: [
    {
      title: 'Fooling the Model, Failing the Road: Benchmarking Inertial Sensor Fidelity in Driving Simulators',
      where: '2025 National Meeting on Artificial and Computational Intelligence (BRACIS/ENIAC)',
      link: 'https://sol.sbc.org.br/index.php/eniac/article/view/38827',
    },
    {
      title: 'Driver Behavior Classification based on Inertial Data',
      where: 'XXXIII Scientific Initiation Meeting of Unicamp',
      link: 'https://github.com/H-IAAC/sumo_carla_comparison',
    },  
    {
      title: 'XVI Department of Computing and Automation Meeting',
      where: 'Faculty of Electrical and Computer Engineering – Unicamp',
      link: null,
    },
  ],

  skills: {
    languages: ['Python', 'C', 'C++'],
    frameworks: ['Pandas', 'LangChain & LangGraph', 'Pytorch', 'TensorFlow', 'Matplotlib', 'SciPy', 'Lean 4'],
    tools: ['Jupyter', 'Wandb', 'LangSmith', 'Git', 'GitHub'],
    cloud: [],
    databases: [],
    humanLanguages: [
      { lang: 'Portuguese', level: 'Native' },
      { lang: 'English', level: 'Fluent' },
      { lang: 'French', level: 'Intermediate' },
      { lang: 'Spanish', level: 'Intermediate' },
    ],
  },

  education: {
    degree: 'B.S. in Computer Engineering',
    school: 'Universidade Estadual de Campinas (Unicamp)',
    location: 'Campinas, SP',
    dates: 'Feb 2022 – July 2027',
    gpa: '9.0 / 10',
  },

  contact: {
    email: 'r244808@dac.unicamp.br',
    linkedin: 'https://linkedin.com/in/renan-florencio-29770a247',
    github: 'https://github.com/RenanFlorencio',
  },

  resumePdfUrl: '/resume.pdf',
}
