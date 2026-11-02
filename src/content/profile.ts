/**
 * All portfolio content lives here so it can be edited without touching layout code.
 * Keep entries factual — only add information that has been confirmed.
 */

export const profile = {
  name: "Rizqi Asy'ari Ramadhan",
  shortName: 'Rizqi A. R.',
  siteUrl: 'https://agricultural-portfolio.netlify.app',
  title: 'Agricultural Engineering Graduate | Smart Agriculture | Agricultural Operations',
  location: 'Indonesia',
  /** A value starting with "[" is treated as a placeholder and its button is disabled. */
  email: 'rizkiramadhan3864@gmail.com',
  linkedin: 'https://linkedin.com/in/rizqi-asy-ari-ramadhan',
  phone: '+62 896-8771-9187',
  whatsappUrl: 'https://wa.me/6289687719187',
  instagram: 'https://www.instagram.com/rizkiramadhan881?mdxt=eTBybHpqbndxY3Fj',
  /** Upload the PDF to public/cv/ with this exact file name. */
  cvPath: '/cv/Rizqi-Asyari-Ramadhan-CV.pdf',
  /** Portrait image: a file in /public, e.g. '/foto.png'. Set to null to show the placeholder. */
  portrait: '/foto.png' as string | null,
}

/** True while a contact value still holds its "[INSERT …]" placeholder. */
export const isPlaceholder = (value: string) => value.trim().startsWith('[')

export const careerInterests = [
  'Plantation operations and agronomy',
  'Palm oil plantation management',
  'Agricultural production',
  'Smart agriculture and precision farming',
  'Agricultural automation and IoT',
  'Field operations and technical monitoring',
  'Agricultural research and development',
  'Sustainable agriculture and resource efficiency',
]

export const aboutEmphasis = [
  'Practical field experience',
  'Agricultural systems understanding',
  'Technical monitoring',
  'Data collection and analysis',
  'Problem-solving',
  'Operational coordination',
  'Sustainable, efficient practices',
]

export const profilePanel = [
  { label: 'Degree', value: 'Agricultural Engineering' },
  { label: 'University', value: 'Universitas Gadjah Mada' },
  { label: 'Graduation', value: '2026' },
  { label: 'GPA', value: '3.21 / 4.00' },
  {
    label: 'Primary interests',
    value: 'Agricultural Operations, Smart Agriculture, and Plantation Management',
  },
]

export const education = {
  institution: 'Universitas Gadjah Mada',
  degree: 'Bachelor of Agricultural Engineering',
  department: 'Agricultural and Biosystems Engineering',
  period: 'August 2022 – July 2026',
  gpa: '3.21 / 4.00',
  thesisTitle:
    'Development of a Hysteresis-Based Automatic Sprinkler Irrigation System for Water Use Efficiency on Coastal Sandy Land',
  thesisSummary:
    'Research into automated sprinkler irrigation that uses soil moisture sensors and hysteresis-based control to support more efficient irrigation management on coastal sandy land.',
}

export type Experience = {
  role: string
  organization: string
  period: string
  current: boolean
  points: string[]
  /** 6-7 skills gained from this experience */
  skills: string[]
  /** Documentation photos (files in /public/experience) */
  photos: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Plant Factory Operations Coordinator',
    organization: 'Plant Factory, Faculty of Agricultural Technology, Universitas Gadjah Mada',
    period: 'July 2026 – Present',
    current: true,
    points: [
      'Coordinated daily operations for a 7-member operational team.',
      'Organize work schedules and delegate operational tasks.',
      'Monitor crop production and facility conditions.',
      'Managed a plant factory facility with a 480-plant capacity.',
      'Support consistent cultivation and operational performance.',
    ],
    skills: [
      'Team Coordination',
      'Work Scheduling',
      'Task Delegation',
      'Production Monitoring',
      'Workflow Improvement',
      'Facility Monitoring',
      'Operational Planning',
    ],
    photos: [
      '/experience/assistant-manager-1.jpg',
      '/experience/assistant-manager-2.jpg',
      '/experience/assistant-manager-3.jpg',
    ],
  },
  {
    role: 'Research Assistant',
    organization: 'Smart Agriculture UGM',
    period: 'August 2026 – Present',
    current: true,
    points: [
      'Monitor field implementation of the AURORA fertigation project at KWT Teratai Mekar.',
      'Document project progress, installation activities, and field conditions.',
      'Identify technical issues and provide observations for evaluation and troubleshooting.',
      'Support field monitoring and coordination during project implementation.',
    ],
    skills: [
      'Field Monitoring',
      'Technical Documentation',
      'Troubleshooting',
      'IoT System Observation',
      'Progress Reporting',
      'Project Coordination',
      'Fertigation Systems',
    ],
    photos: [
      '/experience/research-assistant-1.jpg',
      '/experience/research-assistant-2.jpg',
      '/experience/research-assistant-3.jpg',
    ],
  },
  {
    role: 'Researcher',
    organization: 'Smart Agriculture UGM',
    period: 'August 2025 – July 2026',
    current: false,
    points: [
      'Developed an IoT-based automatic sprinkler irrigation system for coastal land.',
      'Applied soil moisture sensors and hysteresis control for automated operation.',
      'Calibrated sensors effectively, achieving a high average R² of 0.9437.',
      'Achieved 16.91% potential water savings compared to conventional irrigation.',
    ],
    skills: [
      'IoT System Development',
      'Sensor Calibration',
      'Hysteresis-Based Control',
      'Experimental Design',
      'Data Analysis',
      'Water Use Efficiency Analysis',
      'Scientific Presentation',
    ],
    photos: [
      '/experience/researcher-1.jpg',
      '/experience/researcher-2.jpg',
      '/experience/researcher-3.jpg',
    ],
  },
  {
    role: 'Plant Factory Grower',
    organization: 'Plant Factory, Faculty of Agricultural Technology, Universitas Gadjah Mada',
    period: 'August 2025 – June 2026',
    current: false,
    points: [
      'Managed crop cultivation from seedling and transplanting through maintenance and harvesting.',
      'Monitored crop growth, plant health, and environmental conditions.',
      'Supported production activities within a controlled-environment cultivation facility.',
    ],
    skills: [
      'Crop Cultivation',
      'Seedling & Transplanting',
      'Plant Health Monitoring',
      'Harvest Management',
      'Environmental Monitoring',
      'Controlled-Environment Agriculture',
      'Production Support',
    ],
    photos: [
      '/experience/agronomist-1.jpg',
      '/experience/agronomist-2.jpg',
      '/experience/agronomist-3.jpg',
    ],
  },
  {
    role: 'Plantation Smart Greenhouse',
    organization: 'PT Mitra Sejahtera Membangun Bangsa (MSMB)',
    period: 'December 2024 – February 2025',
    current: false,
    points: [
      'Monitored smart greenhouse environmental and cultivation parameters.',
      'Observed temperature, relative humidity, pH, and electrical conductivity (EC).',
      'Supported cultivation monitoring in a 400 m² smart greenhouse with approximately 1,200 premium melon plants.',
    ],
    skills: [
      'Crop Management',
      'Environmental Parameter Analysis',
      'Nutrient Solution Monitoring',
      'Crop Data Recording & Analysis',
      'Cultivation',
      'Crop Growth Assessment',
      'Technical Observation',
    ],
    photos: [
      '/experience/greenhouse-intern-1.jpg',
      '/experience/greenhouse-intern-2.jpg',
      '/experience/greenhouse-intern-3.jpg',
    ],
  },
]

/** Keep these ids: the education link (#project-irrigation) depends on them. */
export type ProjectId = 'irrigation' | 'fertigation' | 'liquid-fertilizer-mixer' | 'organizational-experience'

export type ProjectImage = {
  /** File in /public, e.g. '/projects/irrigation-1.jpg' */
  src: string
  caption: string
}

export type Partner = {
  name: string
  role?: string
  logo?: string
}

export type ProjectActivity = {
  title: string
  /** e.g. "Presenter, 2026" */
  role: string
  description: string
  /** Up to 4 photos for the activity collage */
  images: ProjectImage[]
}

export type Project = {
  id: ProjectId
  title: string
  subtitle: string
  /** Theme / type shown above the title */
  category: string
  year: string
  /** Short summary shown on the card */
  summary: string
  tags: string[]
  /** UN Sustainable Development Goal numbers (legacy/optional) */
  sdgs?: number[]
  /** Partners & collaborating institutions */
  partners?: Partner[]
  /** Up to 4 photos are shown; 1, 2, 3 or 4 photos lay out automatically with equal sizes */
  images: ProjectImage[]
  overview: string
  challenge: string
  approach: string
  results: string[]
  /** Optional structured sub-activities — renders instead of the default 3-block layout */
  activities?: ProjectActivity[]
  /** Set to false to hide the second collage grid in the modal (default: true) */
  showSecondCollage?: boolean
  fields: string[]
  tools: string[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'irrigation',
    title: 'Automated Sprinkler Irrigation System',
    subtitle:
      'Downstreaming Social Innovation: Smart and Precision Irrigation for the Revitalization of Coastal Lands Based on Soil Moisture',
    category: 'Researcher',
    year: '2025',
    summary:
      'An automatic sprinkler system that switches irrigation on and off from soil moisture readings, tested on coastal sandy land to support more efficient water use.',
    tags: ['IoT', 'Automation', 'Soil Moisture Sensor', 'Precision Irrigation'],
    sdgs: [2, 6, 12],
    partners: [
      { name: 'Universitas Gadjah Mada'},
      { name: 'Smart Agriculture UGM',},
    ],
    images: [
      { src: '/projects/irrigation-1.png', caption: 'Sprinkler irrigation system setup' },
      { src: '/projects/irrigation-2.png', caption: 'Soil moisture sensor installation' },
      { src: '/projects/irrigation-3.png', caption: 'Sensor calibration and testing' },
      { src: '/projects/irrigation-4.png', caption: 'Agrotropikal National Seminar presentation' },
      { src: '/projects/irrigation-5.png', caption: 'Field monitoring and experimental plot' },
      { src: '/projects/irrigation-6.png', caption: 'Automated water distribution in field' },
      { src: '/projects/irrigation-7.png', caption: 'Data acquisition unit and logger' },
      { src: '/projects/irrigation-8.png', caption: 'Field validation and sensor evaluation' },
    ],
    overview:
      'This project focused on the development and field evaluation of an Internet of Things (IoT)-based automatic sprinkler irrigation system designed to improve water management on coastal sandy land. The system integrates soil moisture sensors, a microcontroller, and an automated sprinkler mechanism to regulate irrigation based on real-time soil moisture conditions. Implemented in coastal agricultural fields in Karangwuni, Kulon Progo, Yogyakarta, the project aimed to reduce dependence on manual irrigation practices and support more efficient water application through sensor-based automation.',
    challenge:
      'Coastal sandy soils have low water-holding capacity, high infiltration rates, and limited ability to retain moisture, making irrigation management particularly challenging. Conventional irrigation practices often rely on manual operation and visual observation, which can result in inconsistent watering and inefficient water use. These conditions highlight the need for an automated irrigation approach that can continuously monitor soil moisture and respond to changing field conditions without requiring constant operator intervention.',
    approach:
      'The project involved the integration and field testing of an IoT-based sprinkler irrigation prototype using three RS485 soil moisture sensors connected to an ESP32-based control system. A hysteresis-based control mechanism was implemented to regulate sprinkler activation according to predefined soil moisture thresholds, helping prevent frequent switching of the irrigation system. The system also incorporated data acquisition and monitoring capabilities to record soil moisture conditions and irrigation activities. Sensor calibration and validation were conducted to evaluate measurement accuracy, followed by field implementation to assess system performance and irrigation water consumption under actual agricultural conditions.',
    results: [
      'Calibrated 3 soil moisture sensors with an average R² of 0.9437, RMSE of 0.40, and MAPE of 1.33%',
      'Automatic irrigation used 790.16 L compared with an estimated 951.00 L for conventional irrigation, a potential saving of 16.91%',
      'Presented at the Agrotropikal National Seminar 2026 and published in the proceedings',
    ],
    fields: [
      'Internet of Things (IoT)',
      'Automation',
      'Field Monitoring',
      'Data Analysis',
      'System Development',
    ],
    tools: [
      'Visual Studio Code',
      'PlatformIO',
      'Microsoft Excel',
    ],
    note: 'Conventional irrigation water use was estimated rather than directly measured with a flowmeter. The 16.91% figure is therefore a potential saving based on comparison with the estimate, not a definitive measured result.',
  },
  {
    id: 'fertigation',
    title: 'IoT-Based Smart Fertigation',
    subtitle: 'AURORA fertigation project with KWT Teratai Mekar',
    category: 'Field Research',
    year: '2026',
    summary:
      "Conducted field research, system monitoring, and farmer training for an IoT-based smart fertigation project, engaging with a women farmers' group to assess cultivation needs, evaluate system implementation, and support technology adoption through hands-on assistance.",
    tags: ['IoT', 'Fertigation', 'Field Research', 'Community'],
    sdgs: [2, 12],
    partners: [
      { name: 'Smart Agriculture UGM', role: 'Research Team' },
      { name: 'KWT Teratai Mekar', role: 'Community Partner' },
      { name: 'Universitas Gadjah Mada', role: 'Academic Institution' },
    ],
    images: [
      { src: '/projects/fertigation-1.png', caption: 'Field survey and interview with KWT Teratai Mekar' },
      { src: '/projects/fertigation-2.png', caption: 'System installation in the field' },
      { src: '/projects/fertigation-3.png', caption: 'Monitoring system performance' },
      { src: '/projects/fertigation-4.png', caption: 'Location map & field layout' },
      { src: '/projects/fertigation-5.png', caption: 'Automated fertigation bed setup' },
      { src: '/projects/fertigation-6.png', caption: 'Nutrient solution distribution' },
      { src: '/projects/fertigation-7.png', caption: 'Farmer training and community engagement' },
      { src: '/projects/fertigation-8.png', caption: 'Innovation competition presentation' },
    ],
    overview:
      "AURORA is an IoT-based smart fertigation initiative designed to improve resource efficiency, agricultural productivity, and operational independence at KWT Teratai Mekar, a women farmers' group in Condongcatur, Sleman, Yogyakarta. The project integrates field monitoring, automated water and nutrient distribution, and digital monitoring to support more efficient crop management. Implemented in a community-managed agricultural area, the initiative aims to strengthen sustainable farming practices while enhancing the technical capabilities of local farmers through technology adoption and hands-on training.",
    challenge:
      'Agricultural activities at KWT Teratai Mekar face challenges related to water and nutrient management, operational efficiency, and the consistency of cultivation practices. Conventional irrigation and nutrient distribution require considerable manual involvement, while limited monitoring and operational guidelines make it difficult to evaluate resource consumption and system performance. These challenges highlight the need for an integrated fertigation system that not only improves irrigation management but also enables farmers to independently operate, monitor, and maintain agricultural technology.',
    approach:
      'Conducted field surveys and interviews with KWT Teratai Mekar members to identify existing cultivation challenges, irrigation practices, and fertigation requirements. Evaluated field conditions and monitored the implementation and performance of the AURORA smart fertigation system to assess its application in supporting agricultural productivity. Additionally, facilitated hands-on training and provided technical assistance to KWT members, focusing on system operation, basic monitoring procedures, and practical technology adoption to strengthen their capacity for independent system management.',
    results: [
      'Field Assessment: Identified cultivation challenges and fertigation requirements through direct field surveys and interviews with KWT members.',
      'System Monitoring: Conducted field monitoring and evaluation of AURORA implementation across six automated fertigation beds.',
      'Farmer Training: Facilitated practical training and technical assistance to improve members\' understanding of smart fertigation system operation.',
      'Community Engagement: Contributed to technology adoption and capacity building among 37 women farmers at KWT Teratai Mekar.',
      'Innovation Recognition: KWT Teratai Mekar achieved First Place in the 2026 Yogyakarta Special Region Limited Land Utilization Innovation Competition, scoring 883.62.',
    ],
    showSecondCollage: false,
    fields: [
      'Internet of Things (IoT)',
      'Smart Agriculture',
      'Precision Agriculture',
      'Field Monitoring',
      'Agricultural Project Management',
      'Community Development',
    ],
    tools: [
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Word',
    ],
  },
  {
    id: 'liquid-fertilizer-mixer',
    title: 'Agricultural Mechanization',
    subtitle: 'Liquid Fertilizer Mixing Machine Design',
    category: 'Agricultural Engineering',
    year: '2025',
    summary:
      'Designed a liquid fertilizer mixing machine for potato cultivation, focusing on improving mixing efficiency, solution homogeneity, and operational performance through mechanical design and engineering analysis.',
    tags: ['Mechanical Design', 'Agricultural Engineering', 'Machinery Design', 'Fertilizer Mixing'],
    images: [
      { src: '/projects/mixer-1.png', caption: 'Liquid fertilizer mixing machine design' },
      { src: '/projects/mixer-2.png', caption: 'Mechanical components and assembly' },
      { src: '/projects/mixer-3.png', caption: 'Propeller impeller and tank design' },
      { src: '/projects/mixer-4.png', caption: 'Engineering drawing and specification' },
      { src: '/projects/mixer-5.png', caption: 'Motor and gearbox transmission mechanism' },
      { src: '/projects/mixer-6.png', caption: 'Turbidity sensor monitoring concept' },
      { src: '/projects/mixer-7.png', caption: 'Structural frame and material selection' },
      { src: '/projects/mixer-8.png', caption: 'Economic analysis and feasibility' },
    ],
    overview:
      'This project focused on designing a liquid fertilizer mixing machine to improve the efficiency and effectiveness of fertilizer preparation for potato cultivation. The proposed machine was developed to address the limitations of manual mixing, which can require considerable time and labor while producing inconsistent fertilizer solutions. The design incorporated a mechanical stirring system with a 240-liter working capacity, intended to support more consistent fertilizer preparation and improve operational efficiency for horticultural applications.',
    challenge:
      'Manual liquid fertilizer mixing presents several challenges, particularly in maintaining solution homogeneity and ensuring consistent nutrient distribution. The process can be labor-intensive and time-consuming, especially when preparing large volumes of fertilizer for agricultural applications. In potato cultivation, inconsistent mixing may affect the uniformity of fertilizer application. Therefore, a mechanical mixing solution was needed to improve mixing consistency, reduce manual workload, and provide a practical design suitable for agricultural operations.',
    approach:
      "The project involved conceptualizing and designing a mechanical liquid fertilizer mixer based on agricultural application requirements. The design process included determining the tank capacity, selecting suitable structural materials, calculating motor power and torque, and establishing the appropriate rotational speed through a pulley and gearbox transmission system. A propeller-type impeller was selected as the mixing mechanism, while a turbidity sensor-based approach was proposed to evaluate solution homogeneity. Engineering and economic analyses, including production costs, Benefit-Cost Ratio (BCR), and Break-Even Point (BEP), were also incorporated to assess the design's technical and economic feasibility.",
    results: [
      'Mixing Capacity: Established a design capacity of 240 liters per mixing cycle using a 250-liter HDPE tank.',
      'Motor Specifications: Incorporated a 125 W electric motor as the proposed driving unit.',
      'Mixing Mechanism: Developed a propeller-type impeller concept using stainless steel to support corrosion resistance.',
      'Rotational Speed: Determined a target output speed of 36 RPM through a pulley and gearbox transmission system.',
      'Torque Calculation: Estimated a mixing shaft torque of 24.5 N·m based on the proposed mechanical configuration.',
      'Homogeneity Assessment: Proposed a turbidity sensor-based monitoring mechanism to identify the target mixing condition and automate the stopping process.',
    ],
    fields: [
      'Mechanical Design',
      'Engineering Analysis',
      'Agricultural Mechanization',
      'Technical Problem Solving',
      'Economic Feasibility Analysis',
      'Teamwork',
    ],
    tools: [
      'Microsoft Excel',
      'Microsoft Word',
      'SolidWorks',
      'Arduino IDE',
      'Canva',
      'CapCut',
    ],
  },
  {
    id: 'organizational-experience',
    title: 'Organizational & Volunteer Experience',
    subtitle: 'Research Dissemination · National Seminar Committees · Student Organizational Communication',
    category: 'Academic & Organizational',
    year: '2023 – 2026',
    summary:
      'Actively involved in academic, professional, and student organizational activities through research dissemination, national seminar committees, and organizational communication. These experiences provided opportunities to develop practical skills in public speaking, event coordination, digital communication, and teamwork.',
    tags: ['Public Speaking', 'Event Coordination', 'Social Media', 'Teamwork'],
    sdgs: [4, 17],
    images: [
      { src: '/projects/org-agrotropikal-1.png', caption: 'Agrotropikal National Seminar — presentation' },
      { src: '/projects/org-agrotropikal-2.png', caption: 'Seminar audience and academic forum' },
      { src: '/projects/org-agrotropikal-3.png', caption: 'Research poster and materials' },
      { src: '/projects/org-agrotropikal-4.png', caption: 'Post-presentation Q&A session' },
    ],
    overview:
      'Participated in various academic and organizational activities at different levels, taking on responsibilities that required adaptability, effective communication, and collaboration. The experiences ranged from presenting research findings to an academic audience at a national seminar, supporting the operational and logistical requirements of a large-scale academic event, to managing digital communication for a student organization.',
    challenge:
      'Each role involved different challenges, including communicating technical information clearly, coordinating event resources and activities under time constraints, and maintaining consistent and engaging communication with a wider audience. Through these activities, I developed the ability to work collaboratively, manage responsibilities, and contribute to the successful execution of academic and organizational initiatives.',
    approach:
      'Engaged in three distinct roles across academic and organizational settings: presenting research at a national seminar, coordinating logistics for a large-scale academic event, and managing digital communication for a student organization.',
    results: [
      'Presented IoT-based irrigation research at the Agrotropikal National Seminar 2026, contributing to academic knowledge dissemination.',
      'Supported logistics for the PERTETA National Seminar with 300+ participants, coordinating resources and event preparations.',
      'Managed the PERMATETA UGM Instagram account (2,000+ followers), publishing approximately 10 content pieces per month over two years.',
    ],
    activities: [
      {
        title: 'Agrotropikal National Seminar',
        role: 'Presenter · 2026',
        description:
          'Presented research findings on the development of an IoT-based automatic sprinkler irrigation system at a national academic seminar. The presentation focused on explaining the system architecture, implementation process, and performance evaluation, particularly the application of soil moisture sensors for automated irrigation control. The research findings were communicated to an academic audience through a structured presentation, highlighting the relevance of IoT-based technologies in addressing irrigation management challenges in agricultural environments. This experience also involved explaining technical concepts and research results in a clear and accessible manner, responding to the expectations of an academic forum, and contributing to the dissemination of research in agricultural engineering and smart agriculture.',
        images: [
          { src: '/projects/org-agrotropikal-1.png', caption: 'Seminar presentation' },
          { src: '/projects/org-agrotropikal-2.png', caption: 'Academic audience and forum' },
          { src: '/projects/org-agrotropikal-3.png', caption: 'Research poster and materials' },
          { src: '/projects/org-agrotropikal-4.png', caption: 'Post-presentation Q&A session' },
        ],
      },
      {
        title: 'PERTETA National Seminar',
        role: 'Logistics Division · 2024',
        description:
          'Contributed to the organizing committee of the PERTETA National Seminar as part of the logistics division, supporting the preparation and execution of an academic event attended by more than 300 participants. Responsibilities included coordinating logistical requirements, preparing event facilities and supporting equipment, managing resource distribution, and ensuring that the necessary materials were available throughout the event. The role required close coordination with other committee divisions to align logistical preparations with the event schedule and operational needs. By supporting both pre-event preparation and on-site activities, I helped maintain an organized event environment and ensure that logistical arrangements supported the smooth execution of the seminar.',
        images: [
          { src: '/projects/org-perteta-1.png', caption: 'PERTETA Seminar logistics preparation' },
        ],
      },
      {
        title: 'PERMATETA UGM',
        role: 'Staff of Communication and Information · 2023 – 2025',
        description:
          'Served as a member of the Communication and Information division of PERMATETA UGM, responsible for managing the organization\'s digital communication and social media presence. Managed the organization\'s Instagram account, which had more than 2,000 followers, by planning and publishing approximately 10 content pieces per month. Activities included brainstorming content ideas, preparing publication schedules, organizing information for digital posts, and maintaining consistency in the delivery of organizational updates. The role involved translating organizational activities and information into accessible digital content to maintain audience awareness and engagement. Through regular content planning and account management, I contributed to strengthening the organization\'s online presence and supporting communication between the organization and its members and broader audience.',
        images: [
          { src: '/projects/org-permateta-1.png', caption: 'PERMATETA UGM organizational activities' },
        ],
      },
    ],
    fields: [
      'Public Speaking & Research Dissemination',
      'Event Planning & Coordination',
      'Organizational Communication',
      'Digital Content Strategy',
      'Social Media Management',
      'Teamwork & Cross-functional Collaboration',
      'Time Management',
    ],
    tools: [
      'Microsoft PowerPoint',
      'Microsoft Excel',
      'Microsoft Word',
      'Canva',
      'Instagram',
    ],
  },
]

export const technicalSkills = [
  'Agricultural Production and Crop Management',
  'Agricultural Operations Monitoring',
  'Agronomy Fundamentals',
  'Smart Agriculture',
  'IoT-Based Agricultural Systems',
  'Agricultural Automation',
  'Soil Moisture Sensor Calibration',
  'Data Collection and Analysis',
  'Greenhouse Environmental Monitoring',
  'Research and Experimental Testing',
]

export const professionalSkills = [
  'Analytical Thinking',
  'Problem-Solving',
  'Team Coordination',
  'Operational Monitoring',
  'Adaptability',
]

export type SkillCategory = {
  id: string
  label: string
  /** Short description shown below the category icon label */
  description: string
  /** SVG path string for the category icon (24×24 viewBox) */
  iconPath: string
  competencies: string[]
  tools: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'agricultural-crop-management',
    label: 'Agricultural & Crop Management',
    description: 'Agronomy, crop management, plantation operations, and cultivation systems',
    iconPath: 'M12 22V12 M12 12C12 7 7 4 2 4c0 6 3 11 10 11 M12 12c0-5 5-8 10-8 0 6-3 11-10 11',
    competencies: [
      'Agronomy',
      'Plantation Operations',
      'Crop Management',
      'Plant Cultivation',
      'Crop Growth Monitoring',
      'Nutrient Management',
      'Irrigation Management',
      'Plant Factory Operations',
      'Environmental Monitoring',
    ],
    tools: [
      'Microsoft Excel',
      'Microsoft Word',
    ],
  },
  {
    id: 'engineering-technology',
    label: 'Engineering & Technology',
    description: 'IoT systems, agricultural automation, machinery design, and sensor calibration',
    iconPath: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 12v10 M12 12L3 7 M12 12l9-5',
    competencies: [
      'Internet of Things (IoT)',
      'Agricultural Automation',
      'Smart Irrigation Systems',
      'Sensor Calibration',
      'Agricultural Machinery Design',
      'System Development',
    ],
    tools: [
      'Visual Studio Code',
      'PlatformIO',
      'Arduino IDE',
    ],
  },
  {
    id: 'data-technical-analysis',
    label: 'Data & Technical Analysis',
    description: 'Environmental monitoring, water estimation, statistical evaluation, and reporting',
    iconPath: 'M3 12h4l3-8 4 16 3-8h4',
    competencies: [
      'Agricultural Data Analysis',
      'Environmental Data Monitoring',
      'Water Requirement Estimation',
      'Sensor Performance Evaluation',
      'Statistical Analysis',
      'Technical Documentation',
      'Research & Technical Reporting',
    ],
    tools: [
      'Microsoft Excel',
      'Microsoft Word',
      'Microsoft PowerPoint',
    ],
  },
  {
    id: 'management-communication',
    label: 'Management & Communication',
    description: 'Project coordination, team leadership, research presentation, and digital content',
    iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    competencies: [
      'Project Coordination',
      'Team Leadership',
      'Public Speaking',
      'Research Presentation',
      'Event Management',
      'Digital Content Management',
      'Social Media Management',
      'Team Collaboration',
    ],
    tools: [
      'Canva',
      'Instagram',
      'Microsoft PowerPoint',
      'Microsoft Word',
    ],
  },
]

export type CareerPathway = {
  id: string
  number: string
  title: string
  image: string
  imageAlt: string
  description: string
  areasOfInterest: string[]
}

export const careerPathways: CareerPathway[] = [
  {
    id: 'plantation-agronomy',
    number: '01',
    title: 'Plantation & Agronomy',
    image: '/pathways/pathway-1.jpg',
    imageAlt: 'Oil palm plantation and estate agronomy',
    description:
      'I aspire to build a career in the plantation industry, particularly in oil palm agronomy and estate operations. I am interested in developing expertise in crop management, field operations, soil and water management, and sustainable plantation practices.',
    areasOfInterest: [
      'Oil Palm Agronomy',
      'Estate Operations',
      'Crop Nutrition',
      'Field Management',
      'Sustainable Plantation',
    ],
  },
  {
    id: 'agricultural-engineering',
    number: '02',
    title: 'Agricultural Engineering & Smart Agriculture',
    image: '/pathways/pathway-2.jpg',
    imageAlt: 'Automatic sensor-based sprinkler irrigation and smart agriculture',
    description:
      'With a background in Agricultural and Biosystems Engineering, I am interested in applying engineering principles and digital technologies to improve agricultural systems. My interests include agricultural automation, IoT-based monitoring, irrigation systems, and precision agriculture.',
    areasOfInterest: [
      'Agricultural Engineering',
      'Smart Farming',
      'IoT & Automation',
      'Irrigation Systems',
      'Precision Agriculture',
    ],
  },
  {
    id: 'crop-production-greenhouse',
    number: '03',
    title: 'Crop Production & Greenhouse Management',
    image: '/pathways/pathway-3.jpg',
    imageAlt: 'Modern greenhouse cultivation and controlled-environment crop production',
    description:
      'I am also interested in crop production systems, particularly greenhouse cultivation and controlled-environment agriculture. I aim to strengthen my capabilities in crop monitoring, cultivation management, nutrient management, and production operations to support efficient and consistent agricultural production.',
    areasOfInterest: [
      'Agronomy',
      'Greenhouse Management',
      'Crop Production',
      'Plant Nutrition',
      'Plant Factory Operations',
    ],
  },
]

export const careerClosingNote =
  'My goal is to continuously develop as an agricultural professional by combining practical field experience, technical knowledge, and a willingness to learn. I am open to opportunities across the agricultural industry where I can contribute, grow, and create meaningful impact.'

export const presentation = {
  event: 'Agrotropikal National Seminar',
  year: '2026',
  role: 'Presenter',
  subject:
    'Hysteresis-Based Automatic Sprinkler Irrigation System for Water Use Efficiency on Coastal Sandy Land',
  outcome:
    'Published in the seminar proceedings. Reported sensor calibration results: average R² 0.9437, RMSE 0.40, and MAPE 1.33%.',
}

export const organizations = [
  {
    role: 'Logistics Division',
    name: 'PERTETA National Seminar',
    period: 'September 2024',
    points: [
      'Coordinated logistics operations for a seminar with 300+ participants.',
      'Managed event logistics and resource distribution for timely setup.',
    ],
  },
  {
    role: 'Staff of Communication and Information',
    name: 'PERMATETA UGM',
    period: 'February 2023 – February 2025',
    points: [
      'Managed an Instagram account with 2,000+ followers.',
      'Planned and published about 10 posts per month.',
    ],
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const
