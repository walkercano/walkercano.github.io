// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tvanlaar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['tvanlaar/MBAProjects', 'tvanlaar/Bioinformatics'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
    title: 'Portfolio of Tricia Van Laar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'triciavanlaar',
    twitter: 'tvanlaarmicro',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://tvanlaar.github.io',
    phone: '',
    email: 'tvanlaar@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://tvanlaar.github.io/pdfs/VanLaarCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR', 'Bioinformatics', 'Teaching'
  ],
  experiences: [
    {
      company: 'CSU Stanislaus',
      position: 'Assistant Professor',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu',
    },
    {
      company: 'CSU Fresno',
      position: 'Assistant/Associate Professor',
      from: 'August 2015',
      to: 'August 2022',
      companyLink: 'https://www.fresnostate.edu',
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
      institution: 'CSU Fresno',
      degree: 'MBA',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'University of Texas at San Antonio',
      degree: 'PhD',
      from: '2007',
      to: '2012',
    },
  ],
  publications: [
    {
      title: 'Effects of short-term experimental manipulation of captive social environment on uropygial gland microbiome and preen oil volatile composition',
      conferenceName: '',
      journalName: 'Frontiers in Ecology and Evolution',
      authors: 'Danielle J. Whittaker, Amruth Atyam, Nathan A. Burroughs, Jonathan M. Greenberg, Travis J. Hagey, Milos V. Novotny, Helena A. Soini, Kevin R. Theis, Tricia A. Van Laar, and Joel W. G. Slade',
      link: 'https://www.frontiersin.org/articles/10.3389/fevo.2022.1027399/full',
      description:
        'Avian preen oil, secreted by the uropygial gland, is an important source of volatile compounds that convey information about the sender’s identity and quality, making preen oil useful for the recognition and assessment of potential mates and rivals. Although intrinsic factors such as hormone levels, genetic background, and diet can affect preen oil volatile compound composition, many of these compounds are not the products of the animal’s own metabolic processes, but rather those of odor-producing symbiotic microbes. Social behavior affects the composition of uropygial microbial communities, as physical contact results in microbe sharing. We experimentally manipulated social interactions in captive dark-eyed juncos (Junco hyemalis) to assess the relative influence of social interactions, subspecies, and sex on uropygial gland microbial composition and the resulting preen oil odor profiles',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
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
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
