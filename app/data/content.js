/**
 * Single source of content for the portfolio. Edit this file to update the site.
 */

export const content = {
  hero: {
    name: 'Renan Florencio',
    headline: 'Computer Engineering Student & Researcher',
    valueStatement: 'Bridging formal reasoning and applied ML through research and engineering.',
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
      company: 'Purdue University',
      role: 'Undergraduate Student Researcher',
      location: 'West Lafayette, IN',
      dates: 'Jan 2026 – May 2026',
      bullets: [
        'Researching large language model agents for equivalence between optimization problems through the PONTES Mobility Program.',
        'Investigating LLM-based agents for formal reasoning about optimization problems.',
        'Developed Lean 4 templates to analyze equivalence between LP and MILP formulations.',
        'Applied agent-assisted theorem proving to support structured mathematical reasoning.',
      ],
    },
    {
      company: 'Universidade Estadual de Campinas (Unicamp)',
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
      title: 'Data Structure Problems',
      bullets: [
        'Solved problems in C involving pointers, heaps, queues, graphs, linked lists, matrices, and more.',
        'Focused on correctness and clean implementation of classic data structures.',
      ],
      tech: ['C'],
    },
    {
      title: 'Credit Card Fraud Detection',
      bullets: [
        'Preprocessed data and applied machine learning methods to classify an unbalanced dataset.',
        'Handled class imbalance and evaluated model performance for fraud detection.',
      ],
      tech: ['Python', 'scikit-learn', 'Pandas'],
    },
    {
      title: 'Computer Vision Panorama',
      bullets: [
        'Applied computer vision techniques using Python and OpenCV to stitch a panorama.',
        'Explored feature detection, matching, and image blending.',
      ],
      tech: ['Python', 'OpenCV'],
    },
  ],

  publications: [
    {
      title: 'Fooling the Model, Failing the Road: Benchmarking Inertial Sensor Fidelity in Driving Simulators',
      where: '2025 National Meeting on Artificial and Computational Intelligence (BRACIS/ENIAC)',
      link: 'https://github.com/RenanFlorencio',
    },
    {
      title: 'Driver Behavior Classification based on Inertial Data',
      where: 'XXXIII Scientific Initiation Meeting of Unicamp',
      link: 'https://github.com/RenanFlorencio',
    },
    {
      title: 'XVI Department of Computing and Automation Meeting',
      where: 'Faculty of Electrical and Computer Engineering – Unicamp',
      link: null,
    },
  ],

  skills: {
    languages: ['C', 'C++', 'Python'],
    frameworks: ['TensorFlow', 'SciPy', 'Pandas', 'NumPy'],
    tools: ['Jupyter', 'Matplotlib', 'Wandb', 'Git', 'GitHub'],
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
    gpa: '3.5 / 4',
  },

  contact: {
    email: 'r244808@dac.unicamp.br',
    linkedin: 'https://linkedin.com/in/renan-florencio-29770a247',
    github: 'https://github.com/RenanFlorencio',
  },

  resumePdfUrl: '/resume.pdf',
}
