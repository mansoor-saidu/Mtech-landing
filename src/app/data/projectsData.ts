export interface ProjectData {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  heroImage: string;
  mobileImage?: string;
  problem?: string;
  solution?: string;
  features: string[];
  howItWasAchieved: string;
  link?: string;
  ctaText?: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: 'boomlord-expert',
    title: 'Boomlord Expert',
    shortDescription: 'Expert Betting Predictions & Premium Packages Platform',
    category: 'E-commerce & Sports',
    heroImage: '/projects/boomlordexpert.webp',
    mobileImage: '/projects/boomlordexpert-mobile.webp',
    link: 'https://boomlordexpert.com',
    problem: 'The client previously relied on WhatsApp to distribute premium betting predictions and manage subscribers. However, as the user base rapidly expanded, WhatsApp began severely limiting message broadcasts and frequently suspended his business account, threatening the entire revenue stream and severing communication with paying clients.',
    solution: 'We migrated the core operation off WhatsApp by building a robust, independent web platform for acquiring and managing subscribers. By integrating automated payment gateways and migrating the community delivery to Telegram (which does not restrict broadcast sizes), we future-proofed the business against third-party platform suspensions while fully automating the subscription funnel.',
    features: [
      'Premium prediction subscriptions with automated payment gateways',
      'Dynamic WooCommerce integration for cart and checkout',
      'Telegram channel automation and deep linking',
      'Mobile-first responsive interface for on-the-go users'
    ],
    howItWasAchieved: 'To support the high traffic associated with live betting predictions, we architected a robust WordPress/WooCommerce stack tailored for digital subscriptions. We focused heavily on the user flow from free prediction viewing to premium checkout, optimizing the cart abandonment rate. Custom post types were used to manage the daily rollover and premium game updates securely, while caching mechanisms were implemented to handle sudden traffic spikes around major sporting events.',
    ctaText: 'Do you run a subscription-based community and need a robust, automated web platform?'
  },
  {
    slug: 'demo-finance-dashboard',
    title: 'Mini Bank & Investment Platform',
    shortDescription: 'A sleek, modern finance dashboard for tracking investments and banking.',
    category: 'Fintech Dashboard',
    heroImage: '/projects/demo-finance dashboard.webp',
    mobileImage: '/projects/demo-finance0dashmobile.webp',
    problem: 'Users felt overwhelmed by the sheer volume of unstructured financial data presented in legacy banking dashboards, leading to poor engagement and difficulty in tracking investment growth over time.',
    solution: 'Designed a dark-themed, highly scannable dashboard that prioritizes visual hierarchy. We transformed raw numbers into interactive charts and clear, color-coded status indicators, reducing cognitive load and making portfolio tracking intuitive.',
    features: [
      'Real-time transaction tracking and account balance overview',
      'Interactive investment charts and portfolio distribution analytics',
      'Secure data handling and encrypted state management',
      'Responsive data tables with sorting and filtering',
      'Dark mode support for optimal viewing'
    ],
    howItWasAchieved: 'This platform required a highly reactive interface to reflect financial state changes instantly. We utilized React alongside modern charting libraries like Recharts to build the analytics views. The architecture emphasizes component reusability and strict state management using modern React hooks. A dark-themed, data-dense layout was crafted using Tailwind CSS, ensuring that complex financial data remains legible and scannable without overwhelming the user.',
    ctaText: 'Are you building a fintech product and need a world-class, data-dense dashboard?'
  },
  {
    slug: 'dystyles',
    title: 'DY STYLES',
    shortDescription: 'Premium Urban Wear E-commerce Experience',
    category: 'E-commerce',
    heroImage: '/projects/dy-home.webp',
    mobileImage: '/projects/dy-product-mobile.webp',
    link: 'https://dystyles.com',
    problem: 'The brand\'s previous storefront suffered from slow load times and a generic aesthetic that failed to convey the premium nature of their urban wear, leading to high bounce rates on high-resolution product imagery.',
    solution: 'Built a headless, decoupled storefront focused heavily on performance and a bespoke, minimalist aesthetic. By implementing aggressive lazy loading and an optimistic shopping cart UI, the shopping experience became instantaneous.',
    features: [
      'High-performance React single-page application',
      'Fluid product galleries and dynamic cart management',
      'Optimized asset loading for high-resolution imagery',
      'Seamless checkout flow and inventory syncing',
      'Modern typography and minimalist, brand-focused UI'
    ],
    howItWasAchieved: 'Built as a Vite + React application, DY STYLES focuses on performance and visual fidelity. We implemented lazy loading for product images and an optimistic UI for the shopping cart to ensure the interface feels instantaneous. The design system leans heavily into minimalist, urban aesthetics, utilizing the "Outfit" typography to give the brand a premium, contemporary feel. The entire frontend was decoupled from the backend to ensure maximum rendering speed.',
    ctaText: 'Does your e-commerce brand need a premium, high-performance storefront to drive sales?'
  },
  {
    slug: 'kwasaa',
    title: 'KWASAA',
    shortDescription: 'Kwara State Signage and Advertisement Agency Portal',
    category: 'Government & Regulatory',
    heroImage: '/projects/kwasaa.webp',
    mobileImage: '/projects/kwasaa-mobile.webp',
    link: 'https://kwasaa.ng',
    problem: 'The agency\'s manual billboard permit application process was slow, prone to errors, and lacked transparency for advertisers submitting documents.',
    solution: 'Digitized the entire workflow by creating a secure, step-by-step application portal with built-in validation, allowing advertisers to submit, track, and pay for permits entirely online.',
    features: [
      'Digital billboard permit registration and processing',
      'Secure user authentication and document upload portals',
      'Administrative dashboard for application review',
      'Fast, accessible interface compliant with government standards',
      'Progressive web app (PWA) capabilities'
    ],
    howItWasAchieved: 'Digitizing a regulatory body required a heavy focus on accessibility, clear user flows, and secure data transmission. We built a React-based frontend that guides advertisers through the complex permit application process step-by-step. Form validation and immediate user feedback were prioritized to reduce application errors. The UI was designed to be clean, authoritative, and trustworthy, utilizing the agency\'s official color palette and modern web standards.',
    ctaText: 'Do you need to digitize manual workflows or build a secure portal for your organization?'
  },
  {
    slug: 'melbourne-menu',
    title: 'Melbourne Restaurant',
    shortDescription: 'An interactive online menu and ordering system for a modern restaurant.',
    category: 'Hospitality',
    heroImage: '/projects/melbourne-menu.webp',
    mobileImage: '/projects/melbourne-menu-mobile.webp',
    problem: 'Physical menus are a hassle to update - you will need to reprint them every time an item changes or goes out of stock, making it costly and difficult to showcase high-quality imagery of dishes.',
    solution: 'Developed a dynamic, QR-code accessible digital menu tailored for table-side mobile browsing, featuring fluid animations and large, appetizing photography that drives higher order values and can be updated instantly.',
    features: [
      'Dynamic, category-based menu filtering',
      'High-resolution culinary imagery integration',
      'Responsive design optimized for table-side mobile browsing',
      'Fluid animations for item selection and cart addition',
      'QR code integration for seamless access'
    ],
    howItWasAchieved: 'The goal was to replicate the tactile, visual experience of a physical menu in a digital format. We focused on a mobile-first design, as the primary use case is patrons scanning a QR code at their table. Large, appetizing imagery was paired with a fluid, swipeable interface. We minimized the steps needed to view dietary information and add items to the order, relying on CSS transitions to make the experience feel app-like and delightful.',
    ctaText: 'Do you have a restaurant and want it to use the latest digital menu ordering system?'
  },
  {
    slug: 'mtech-ai',
    title: 'MTech AI Chatbot',
    shortDescription: 'An intelligent, conversational AI interface for technical support.',
    category: 'Artificial Intelligence',
    heroImage: '/projects/mtech-ai.webp',
    mobileImage: '/projects/mtech-ai2.webp',
    problem: 'Users required immediate technical assistance, but the existing support channels were asynchronous and slow, resulting in low customer satisfaction.',
    solution: 'Deployed a real-time, context-aware AI chatbot interface featuring streaming responses, reducing perceived latency to zero and handling tier-1 technical queries automatically.',
    features: [
      'Real-time WebSocket communication for instant replies',
      'Context-aware conversational interface',
      'Markdown and code-snippet rendering support',
      'Typing indicators and fluid message list auto-scrolling',
      'Customizable theme and avatar integration'
    ],
    howItWasAchieved: 'Building a chatbot requires absolute precision in state management and DOM manipulation to ensure the chat window behaves naturally. We integrated a streaming response architecture so users see the AI typing in real-time, reducing perceived latency. The UI was crafted to feel native and unobtrusive, allowing the conversation to take center stage. Care was taken to handle complex text outputs, such as code blocks and lists, rendering them beautifully within the chat bubbles.',
    ctaText: 'Are you looking to integrate custom AI solutions or chatbots into your business?'
  },
  {
    slug: 'mubarak-saidu',
    title: 'Mubarak Saidu Portfolio',
    shortDescription: 'A personal blog and portfolio showcasing technical writing and projects.',
    category: 'Personal Branding',
    heroImage: '/projects/mubarak-saidu.webp',
    mobileImage: '/projects/mubarak-saidu-mobile.webp',
    problem: 'The client needed a digital identity that served both as a technical blog and a portfolio, but generic CMS solutions were too slow and bloated for optimal SEO performance.',
    solution: 'Constructed a minimalist, statically generated portfolio using markdown. This ensured blazingly fast load times, perfect SEO scores, and a frictionless writing experience.',
    features: [
      'Markdown-based blog engine for easy content creation',
      'SEO-optimized article pages with dynamic meta tags',
      'Project showcase grid with filtering',
      'Dark/Light mode toggle with persistent preferences',
      'Performance-optimized syntax highlighting for code blocks'
    ],
    howItWasAchieved: 'This project serves as a digital identity. We utilized a static site generation approach to ensure blazingly fast load times and maximum SEO benefits for blog posts. The typography was meticulously selected to provide an excellent reading experience on all devices. A custom CMS layer was added to allow for frictionless publishing, and the design leans heavily on modern, minimalist principles to let the content shine.',
    ctaText: 'Do you need a lightning-fast, bespoke portfolio or blog to elevate your personal brand?'
  },
  {
    slug: 'tymly',
    title: 'Tymly',
    shortDescription: 'A comprehensive attendance and workforce management dashboard.',
    category: 'Enterprise SaaS',
    heroImage: '/projects/usetymly.webp',
    mobileImage: '/projects/usetymly-mobile.webp',
    problem: 'HR managers struggled to track employee attendance accurately across remote and on-site locations, relying on fragmented, manual spreadsheets.',
    solution: 'Engineered a unified workforce dashboard with geo-fenced clock-ins and role-based access control, allowing administrators to visualize historical attendance data instantly.',
    features: [
      'Geo-fenced attendance tracking and logging',
      'Real-time employee status dashboard',
      'Historical data visualization and export capabilities',
      'Role-based access control (RBAC)',
      'Responsive interface for both administrators and employees'
    ],
    howItWasAchieved: 'Tymly was designed to handle complex relational data without overwhelming the user. We built a robust dashboard architecture featuring collapsible sidebars, dense data tables, and high-level summary widgets. The application utilizes optimistic UI updates for clock-ins to make the software feel instantaneous. Strict attention was paid to the visual hierarchy, ensuring that critical alerts (like missed shifts) immediately draw the eye against the calmer data visualization elements.',
    ctaText: 'Do you have an idea for a powerful SaaS product or internal tool to build?'
  }
];
