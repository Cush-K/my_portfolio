//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx
// const backgroundImageUrl = 'src/assets/images/Title.png';


// Enter here your first and last name
const name = {
  firstname: 'KALVINE',
  lastname: 'NDEI',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://docs.google.com/document/d/1mA_Rv5I4SINFNATCXBy79IAId9wQLN409RPORzWehSw/edit?tab=t.0',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Front-End Developer...',
  'UI/UX Designer...',
  'Back-End Developer...',
  'Database Manager...' 
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/Cush-K',
  },
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/kalvine-ndei/',
  },   
  {
    name: 'Twitter',
    icon: 'lni lni-twitter',
    url: 'https://twitter.com/your-username',
  },
  {
    name: 'Facebook',
    icon: 'lni lni-instagram',
    url: 'https://facebook.com/your-username',
  },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Design',
    icon: 'lni lni-code',
    title: 'UI/UX Design',
    description:
      "I design UI/UX using various technologies, including Figma for prototyping and design, and HTML5 and CSS3 for front-end design. My focus is on creating intuitive, visually appealing interfaces that provide seamless user experiences.",
    skills: [
      {
        icon: 'lni lni-html5',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-figma',
        title: 'Figma',
      },
      {
        icon: 'lni lni-css3',
        title: 'CSS3',
      }
    ],
  },
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Front-End Development',
    description:
    "I put extra focus on front-end development, using technologies like vanilla JavaScript, ReactJS, and NodeJs to create dynamic, responsive web apps. I aim to build seamless and user-friendly interfaces that provide engaging experiences.",
    skills: [
      {
        icon: 'lni lni-javascript',
        title: 'Vanila JavaScript',
      },
      {
        icon: 'lni lni-react',
        title: 'ReactJs',
      },
      {
        icon: 'lni lni-nodejs',
        title: 'NodeJs',
      }     
    ],
  },
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Back-End Development',
    description:
    "I work on back-end development using technologies like Python, Flask, and NodeJs to build and maintain server-side applications. My focus is on creating efficient APIs and ensuring smooth interactions between the front-end and back-end systems.",
    skills: [
      {
        icon: 'lni lni-python',
        title: 'Python',
      },
      {
        icon: 'lni lni-python',
        title: 'Flask-Python',
      },
      {
        icon: 'lni lni-nodejs',
        title: 'NodeJs',
      }
      
    ],
  },
  {
    name: 'DB management',
    icon: 'lni lni-code',
    title: 'Database Management',
    description:
    "I manage databases using PostgreSQL, Django, and SQLite, focusing on structuring, optimizing, and maintaining data for smooth performance. This involves designing efficient schemas, writing queries, and ensuring reliable data storage and retrieval.",
    skills: [
      {
        icon: 'lni lni-database',
        title: 'PostgreSQL',
      },
      {
        icon: 'lni lni-database',
        title: 'sqlite',
      },     
    ],
  },
  
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'Efficiency', value: 100, unit: '%' },
  { word: 'Finished Projects', value: 163, unit: '' },
  { word: 'Experience', value: 2, unit: ' years' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Votive Laundry',
    description: 'A laundry and Dry cleaning website built with ReactJs, Flask-Python, and PostgreSQL',
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg',
    githubUrl: 'https://github.com/Cush-K/votive'
  },
  {
    title: 'Google Drive Clone',
    description: 'A project involving ReactJs, Flask-Python, Material Ui and PostgreSQL',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg',
    githubUrl: 'https://github.com/Cush-K/Google-Drive-Clone'
  },
  {
    title: 'TibaCare',
    description: 'A hospital management system built with ReactJs and Flask',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg',
    githubUrl: 'https://github.com/Cush-K/Hospital-Mgmt'
  },
  {
    title: 'FreshMart',
    description: 'An admin site for managing grocery items built with ReactJs, and Flask-Python.',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif',
    githubUrl: 'https://github.com/Cush-K/GroceryOwner'
  },
  {
    title: 'Electronics Store',
    description: 'An inventory management site built with ReactJs, and Flask-Python.',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif',
    githubUrl: 'https://github.com/Cush-K/electronics-store'
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////

const aboutMeText = {
  infotext: `Hi there, I'm Kalvine of Glowtech. With 2 years of experience as a fullstack developer, I specialize in both front-end and back-end development using technologies like ReactJS, vanilla JavaScript, Python, Flask, PostgreSQL, and SQLite. I focus on creating dynamic, user-friendly interfaces and building efficient, scalable server-side applications.`,
  power_slogan: `Soft Solutions for Hard Problems`,
};

export {
  // backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
};
