// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MardSilva', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/eymardsilva/',
    twitter: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'ei_mard',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'eym_silva',
    dev: 'eym_silva',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://eymardsilvadev.github.io',
    phone: '+351 931 959 360',
    email: 'eym_silva@outlook.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1EgqpNz-ZmOgA2XVCVWYN5qGwa6vIIoPO/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'NET/NET Core',
    'C#',
    'Blazor',
    'SQL/Oracle (PL-SQL)/T-SQL',
    'ASP.NET/ASP.NET Core',
    'MVC',
    'Azure, Azure Devops, GIT',
    'MySQL, PostgreSQL, MongoDB',
    'LINQ, EF Core, Dapper/Mapper',
    'Docker',
    'Hangfire/DataDog',
    'Unit Tests (xUnit, Builder NSubstitute)',
    'TDD, BDD, DDD',
    'Scrum/Kanban',
  ],
  experiences: [
    {
      company: 'NoAtum (Amaris Consulting)',
      position: 'Senior .NET Developer',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.noatumlogistics.com/',
    },
    {
      company: 'Nexer',
      position: 'NET Developer',
      from: 'February 2023',
      to: 'March 2024',
      companyLink: 'https://nexergroup.com/',
    },
     {
      company: 'Localiza&Co',
      position: '.NET Developer',
      from: 'March 2022',
      to: 'Februray 2023',
      companyLink: 'https://www.localizaco.com/',
    },
    {
      company: 'Ailos',
      position: 'Sytem Analyst/.NET Developer',
      from: 'March 2021',
      to: 'March 2022',
      companyLink: 'https://www.ailos.coop.br/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Instituto de Gestão e Tecnologia da Informação (IGTI)',
      degree: 'MBA in Software Architecture and Solutions',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Centro Universitário Internacional (UNINTER)',
      degree: 'Associate Degree in System Analysis and Development',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'eym_silva', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
