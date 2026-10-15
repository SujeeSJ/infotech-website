export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  industry: string;
  year: string;

  status?: "Completed" | "In Development";

  services: string[];
  challenge: string;
  solution: string;
  process: string[];
  technologies: string[];
  image: string;

  gallery?: {
    title: string;
    image: string;
  }[];

  features?: {
    title: string;
    description: string;
  }[];

  results?: string[];

  website?: string;
};

export const projects: Project[] = [
  {
    slug: "omg-arcade",

    title: "OMG Arcade",

    category: "Gaming & Entertainment",

    description:
      "A modern digital experience created for OMG Arcade, a gaming and entertainment destination.",

    client: "OMG Arcade",

    industry: "Entertainment & Gaming",

    year: "2026",

    services: [
      "UI/UX Design",
      "Website Development",
      "Digital Strategy",
      "Digital Experience",
    ],

    challenge:
      "OMG Arcade needed a stronger digital presence that could clearly present its entertainment experiences and make it easier for customers to understand what the venue offers.",

    solution:
      "Infinotech created a modern digital experience focused on visual presentation, clear navigation and a simple customer journey across the website.",

    process: [
      "Discovery & Research",
      "Content & UX Planning",
      "Interface Design",
      "Development",
      "Responsive Optimization",
      "Launch",
    ],

    /*
      IMPORTANT:
      Keep only technologies actually used
      on the OMG Arcade website.

      We can update this once confirmed.
    */
    technologies: [
      "Responsive Web Design",
    ],

    image: "/projects/omg-arcade-main.png",

    gallery: [
      {
        title: "Desktop Experience",
        image: "/projects/omg-desktop.png",
      },
      {
        title: "Mobile Experience",
        image: "/projects/omg-mobile.png",
      },
      {
        title: "Interface Details",
        image: "/projects/omg-ui-1.png",
      },
    ],

    features: [
      {
        title: "Gaming Experiences",
        description:
          "A clear digital presentation of the entertainment experiences available at OMG Arcade.",
      },
      {
        title: "Mobile Experience",
        description:
          "A responsive experience designed to work smoothly across desktop, tablet and mobile screens.",
      },
      {
        title: "Clear Navigation",
        description:
          "Content and navigation structured to help visitors quickly discover the venue and its experiences.",
      },
      {
        title: "Visual Storytelling",
        description:
          "A design direction focused on creating an energetic digital identity suited to the gaming and entertainment environment.",
      },
    ],

    website: "https://omgarcade.lk/",
  },
  {
    slug: "dream-event-management",
  
    title: "Dream Event Management",
  
    category: "Events & Wedding Planning",
  
    description:
      "A modern digital experience created for Dream Event Management, an event and wedding planning business in Trincomalee.",
  
    client: "Dream Event Management",
  
    industry: "Event Management",
  
    year: "2026",
  
    services: [
      "Website Development",
      "Responsive Web Design",
    ],
  
    challenge:
      "Dream Event Management needed a professional online presence that could present its event services clearly and make it easier for customers to explore what the business offers.",
  
    solution:
      "Infinotech created a modern responsive website that organizes the business services, event information and customer enquiry journey into a clear digital experience.",
  
    process: [
      "Discovery & Planning",
      "Content Structure",
      "Interface Planning",
      "Website Development",
      "Responsive Optimization",
      "Testing & Launch",
    ],
  
    technologies: [
      "Responsive Web Design",
    ],
  
    image:
      "/projects/dream-event-management.png",
  
    gallery: [
      {
        title: "Desktop Experience",
        image:
          "/projects/dream-event-desktop.png",
      },
      {
        title: "Mobile Experience",
        image:
          "/projects/dream-event-mobile.png",
      },
      {
        title: "Interface Details",
        image:
          "/projects/dream-event-ui-1.png",
      },
    ],
  
    features: [
      {
        title: "Service Presentation",
        description:
          "Event services are presented in a clear structure so visitors can understand the different experiences available.",
      },
      {
        title: "Responsive Experience",
        description:
          "The website is designed to work smoothly across desktop, tablet and mobile screens.",
      },
      {
        title: "Event-Focused Design",
        description:
          "The visual direction supports the wedding and event management identity of the business.",
      },
      {
        title: "Customer Enquiry Journey",
        description:
          "The website provides a clear path for visitors to explore the business and move toward making an enquiry.",
      },
    ],
  
    website:
      "https://dreameventmanagement.com",
  },
  {
    slug: "hale-nature",
  
    title: "Hale Nature",
  
    category: "Natural Products & E-Commerce",
  
    description:
      "A modern e-commerce experience created for Hale Nature, presenting natural food and wellness products through a clear, trustworthy and responsive digital storefront.",
  
    client: "Hale Nature",
  
    industry: "Natural Food & Wellness",
  
    year: "2025",
  
    services: [
      "Website Development",
      "E-Commerce Development",
      "Responsive Web Design",
      "UI/UX Design",
    ],
  
    challenge:
      "Hale Nature needed a professional online presence that could present a diverse range of natural products clearly, strengthen customer trust and make product discovery and purchasing easier.",
  
    solution:
      "Infinotech created a responsive e-commerce website with structured product categories, clear product presentation, brand information and a customer-focused shopping journey.",
  
    process: [
      "Discovery & Planning",
      "Content & Product Structure",
      "UI/UX Planning",
      "E-Commerce Development",
      "Responsive Optimization",
      "Testing & Launch",
    ],
  
    technologies: [
      "Responsive Web Design",
      "E-Commerce",
    ],
  
    image:
      "/projects/hale-nature.png",
  
    gallery: [
      {
        title: "Desktop Experience",
        image:
          "/projects/hale-nature-desktop.png",
      },
      {
        title: "Mobile Experience",
        image:
          "/projects/hale-nature-mobile.png",
      },
      {
        title: "Product Experience",
        image:
          "/projects/hale-nature-ui-1.png",
      },
    ],
  
    features: [
      {
        title: "Product Discovery",
        description:
          "Products are organized into clear categories to help customers explore the Hale Nature range more easily.",
      },
      {
        title: "E-Commerce Experience",
        description:
          "The website provides a structured online shopping journey focused on clear product presentation and usability.",
      },
      {
        title: "Responsive Design",
        description:
          "The shopping experience is designed to work smoothly across desktop, tablet and mobile devices.",
      },
      {
        title: "Brand & Trust Presentation",
        description:
          "Brand information and supporting content help communicate the natural product identity and build customer confidence.",
      },
    ],
  
    website:
      "https://halenature.com",
  },
  {
    slug: "trezzert",
  
    title: "Trezzert",
  
    category: "Travel & Tourism",
  
    description:
      "A travel and tourism website created for Trezzert, presenting travel packages and custom journey options through a clear and visually engaging digital experience.",
  
    client: "Trezzert",
  
    industry: "Travel & Tourism",
  
    year: "2025",
  
    services: [
      "Website Development",
      "Responsive Web Design",
      "UI/UX Design",
    ],
  
    challenge:
      "Trezzert needed a digital presence that could present travel packages clearly, communicate the brand's tourism offering and make it easier for customers to explore suitable travel options.",
  
    solution:
      "Infinotech created a responsive tourism website with strong destination-focused visuals, structured travel package information and clear paths for customers to explore standard or custom travel options.",
  
    process: [
      "Discovery & Planning",
      "Content Structure",
      "UI/UX Planning",
      "Website Development",
      "Responsive Optimization",
      "Testing & Launch",
    ],
  
    technologies: [
      "Responsive Web Design",
    ],
  
    image:
      "/projects/trezzert.png",
  
    gallery: [
      {
        title: "Desktop Experience",
        image:
          "/projects/trezzert-desktop.png",
      },
      {
        title: "Mobile Experience",
        image:
          "/projects/trezzert-mobile.png",
      },
      {
        title: "Travel Package Experience",
        image:
          "/projects/trezzert-ui-1.png",
      },
    ],
  
    features: [
      {
        title: "Travel Package Discovery",
        description:
          "Visitors can explore available travel packages through a clear and tourism-focused experience.",
      },
      {
        title: "Custom Package Journey",
        description:
          "The website provides a clear route for customers interested in creating a more personalized travel package.",
      },
      {
        title: "Destination-Focused Design",
        description:
          "Large travel imagery and visual storytelling help communicate the experience of travelling through Sri Lanka.",
      },
      {
        title: "Responsive Experience",
        description:
          "The website is designed to work smoothly across desktop, tablet and mobile devices.",
      },
    ],
  
    website:
      "https://trezzert.com",
  },
  {
    slug: "bizvocate",
  
    title: "Bizvocate Advisor & Co",
  
    category: "Business Consulting & Advisory",
  
    description:
      "A professional corporate website created for Bizvocate Advisor & Co, presenting its business consulting, legal advisory and professional service offerings through a clear and structured digital experience.",
  
    client: "Bizvocate Advisor & Co",
  
    industry: "Business Consulting & Professional Services",
  
    year: "2025",
  
    services: [
      "Website Development",
      "Responsive Web Design",
      "UI/UX Design",
    ],
  
    challenge:
      "Bizvocate needed a professional digital presence that could clearly communicate a broad range of consulting and advisory services while building trust with businesses and professionals.",
  
    solution:
      "Infinotech created a structured responsive website that organizes the firm's consulting, legal, compliance, start-up, technology and professional services into a clear customer journey.",
  
    process: [
      "Discovery & Planning",
      "Content Structure",
      "UI/UX Planning",
      "Website Development",
      "Responsive Optimization",
      "Testing & Launch",
    ],
  
    technologies: [
      "Responsive Web Design",
    ],
  
    image:
      "/projects/bizvocate.png",
  
    gallery: [
      {
        title: "Desktop Experience",
        image:
          "/projects/bizvocate-desktop.png",
      },
      {
        title: "Mobile Experience",
        image:
          "/projects/bizvocate-mobile.png",
      },
      {
        title: "Service Experience",
        image:
          "/projects/bizvocate-ui-1.png",
      },
    ],
  
    features: [
      {
        title: "Professional Service Structure",
        description:
          "A broad range of consulting and advisory services is organized clearly so visitors can quickly understand the firm's capabilities.",
      },
      {
        title: "Business-Focused Experience",
        description:
          "The website is designed around professional credibility, clear information and straightforward access to relevant services.",
      },
      {
        title: "Responsive Design",
        description:
          "The digital experience is designed to work consistently across desktop, tablet and mobile devices.",
      },
      {
        title: "Contact & Enquiry Journey",
        description:
          "Clear contact paths help businesses and individuals move from exploring services toward starting a conversation with the advisory team.",
      },
    ],
  
    website:
      "https://bizvocate.com",
  },
  {
    slug: "ds-air-control",
  
    title: "DS Air Control Inc",
  
    category: "Heating & Cooling",
  
    description:
      "A professional digital presence created for DS Air Control Inc, presenting its heating, cooling and HVAC services through a clear and customer-focused website.",
  
    client: "DS Air Control Inc",
  
    industry: "HVAC Services",
  
    year: "2024",
  
    services: [
      "Website Development",
      "Responsive Web Design",
      "UI/UX Design",
    ],
  
    challenge:
      "DS Air Control needed a professional website that could clearly present its heating and cooling services, build customer confidence and make it easier for visitors to contact the business.",
  
    solution:
      "Infinotech created a responsive service-focused website with clear navigation, structured HVAC service information and straightforward customer contact options.",
  
    process: [
      "Discovery & Planning",
      "Content Structure",
      "UI/UX Planning",
      "Website Development",
      "Responsive Optimization",
      "Testing & Launch",
    ],
  
    technologies: [
      "Responsive Web Design",
    ],
  
    image:
      "/projects/ds-air-control.png",
  
    gallery: [
      {
        title: "Desktop Experience",
        image:
          "/projects/ds-air-control-desktop.png",
      },
      {
        title: "Mobile Experience",
        image:
          "/projects/ds-air-control-mobile.png",
      },
      {
        title: "Interface Details",
        image:
          "/projects/ds-air-control-ui-1.png",
      },
    ],
  
    features: [
      {
        title: "HVAC Service Presentation",
        description:
          "Heating and cooling services are organized clearly so customers can quickly understand the solutions available.",
      },
      {
        title: "Responsive Experience",
        description:
          "The website is designed to provide a consistent experience across desktop, tablet and mobile devices.",
      },
      {
        title: "Customer-Focused Navigation",
        description:
          "The information architecture helps visitors move quickly between services, company information and contact options.",
      },
      {
        title: "Professional Business Presence",
        description:
          "The website provides DS Air Control with a polished digital presence suited to a professional HVAC service business.",
      },
    ],
  
    website:
      "https://dsaircontrols.com",
  },
  {
    slug: "womens-bodysuit-platform",
  
    title: "Women's Bodysuit Project",
  
    category: "Fashion & E-Commerce",
  
    description:
      "A fashion-focused digital commerce project currently being developed around women's bodysuits and a modern online shopping experience.",
  
    client: "Confidential",
  
    industry: "Fashion & E-Commerce",
  
    year: "2026",
  
    status: "In Development",
  
    services: [
      "UI/UX Design",
      "E-Commerce Development",
      "Responsive Web Design",
    ],
  
    challenge:
      "The project requires a modern fashion experience that presents products clearly while creating a simple and visually strong shopping journey.",
  
    solution:
      "Infinotech is currently developing the digital experience, product presentation and e-commerce journey for the project.",
  
    process: [
      "Discovery",
      "Brand & Product Planning",
      "UX Design",
      "Interface Design",
      "Development",
      "Testing",
    ],
  
    technologies: [
      "E-Commerce",
      "Responsive Web Design",
    ],
  
    image:
      "/projects/womens-bodysuit.png",
  },
];