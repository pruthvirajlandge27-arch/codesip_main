/**
 * Scalable SEO Configuration for CodeSip
 * Add or modify metadata for pages here. This keeps the application highly scalable
 * and avoids hardcoding meta details in components.
 */

export const DEFAULT_SEO = {
  title: "CodeSip | Gaav se Global tak",
  description: "Learn coding from scratch and go global, no matter where you're from in India. Join thousands of rural coders building their future with industry-grade internships and tech services.",
  keywords: "CodeSip, Codesip Technology, learn coding India, rural tech internship, website development Navi Mumbai, software engineering Amravati, final year project help, tech recruitment Pune, Indian IT talent",
  canonicalUrl: "https://codesip.in",
  siteName: "CodeSip Technology",
  ogImage: "https://codesip.in/og-image.png",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  themeColor: "#050B14"
};

// Route-specific metadata mapping
export const ROUTE_SEO = {
  "/": {
    title: "CodeSip | Gaav se Global tak - Modern Tech Internships & Services",
    description: "CodeSip bridges rural talent with global tech opportunities. Join hand-picked internship programs, build real products, or build high-end software services with our engineering teams.",
    keywords: "coding school, rural India developer, software development services, tech internships, study coding, live projects, Indian developers, remote developers",
    schemaType: "Organization"
  },
  "/services": {
    title: "Our Tech Services | CodeSip Technology",
    description: "Industry-ready solutions including high-performance Web & App Development, Final Year CS/IT Project Mentorship, and reliable Manpower Supply for your enterprise.",
    keywords: "software agency, IT services Navi Mumbai, final year project guidance, hire developers, manforce vendor, outsource coding, web dev company",
    schemaType: "Services"
  },
  "/services/final-year-project": {
    title: "Final Year Project Mentorship (CS/IT) | CodeSip",
    description: "Excel in your university finals. Complete source code, professional synopsis & report preparation, expert mentoring, and viva preparation assistance.",
    keywords: "final year project help, computer science projects, IT project report, engineering projects, java python projects, code mentorship, viva preparation",
    schemaType: "ServiceDetail"
  },
  "/services/website-app-development": {
    title: "Custom Website & Mobile App Development | CodeSip",
    description: "Stunning, robust, and highly interactive applications designed to scale. Custom SaaS products, corporate portals, e-commerce, and high-fidelity UI/UX.",
    keywords: "nextjs react development, mobile app builder, business website, e-commerce store, custom software developer, responsive web design",
    schemaType: "ServiceDetail"
  },
  "/services/manpower-supply": {
    title: "Tech Manpower Supply & Vendor Services | CodeSip",
    description: "On-board pre-vetted, elite IT professionals, software engineers, and administrative teams. Scalable talent solutions with full legal and operational compliance.",
    keywords: "it staffing agency, hire contract developers, tech recruiters India, engineering manpower, contract staffing, outsourced developers",
    schemaType: "ServiceDetail"
  },
  "/internships": {
    title: "Industry-Ready Technical Internships | CodeSip",
    description: "Launch your career with CodeSip's hands-on internship programs. Work on live production-level projects in Web Development, AI/ML, Data Science, and MBA/Fintech.",
    keywords: "tech internship India, remote coding internship, software internship, web dev intern, learning coding with certificate, student projects",
    schemaType: "CoursePortal"
  },
  "/careers": {
    title: "CodeSip Careers | Job Openings & Opportunities",
    description: "Explore active job openings, developer vacancies, design roles, and internships at CodeSip Technology. Apply today and start your journey from Gaav se Global tak.",
    keywords: "codesip careers, careers at codesip, codesip jobs, codesip technology careers, work at codesip, remote job developer, software engineer vacancies, IT job india, startup careers",
    schemaType: "Careers"
  },
  "/mous-and-collabs": {
    title: "MOUs & Academic Collaborations | CodeSip",
    description: "Building strong partnerships with universities and institutes across India. Establishing centers of excellence, workshops, and direct placement pipelines.",
    keywords: "college partnership, university MOU, academic collaboration, campus recruitment, technical workshop, skill development india",
    schemaType: "Partnership"
  },
  "/contact": {
    title: "Contact Our Engineering & Support Teams | CodeSip",
    description: "Have a project or looking for talent? Connect with CodeSip HQ. Reach out via email at hr@codesip.in, register for updates, or visit our hubs.",
    keywords: "contact codesip, hire codesip, software development inquiry, internship registration, office location amravati",
    schemaType: "Contact"
  },
  "/privacy-policy": {
    title: "Privacy Policy | CodeSip Technology",
    description: "Your privacy is our priority. Read CodeSip's data practices, user rights, cookies declaration, and secure information processing policies.",
    keywords: "privacy policy, data collection, user rights, cookies, codesip privacy",
    schemaType: "Legal"
  },
  "/terms": {
    title: "Terms of Service & Conditions | CodeSip",
    description: "Standard terms and conditions governing the use of CodeSip platforms, course enrollments, internships, service agreements, and corporate use.",
    keywords: "terms of service, user agreement, legal terms, codesip rules",
    schemaType: "Legal"
  }
};

// Dynamic internship domain overrides mapping
export const INTERNSHIP_DOMAINS = {
  "frontend": {
    title: "Frontend Development Internship with Live Projects | CodeSip",
    description: "Master React, Vite, TailwindCSS, and GSAP animations. Build 5+ modern web projects including SaaS dashboards and highly interactive UIs.",
    keywords: "react js internship, frontend engineer intern, html css javascript, tailwind css training, portfolio project"
  },
  "backend": {
    title: "Backend Development & API Engineering Internship | CodeSip",
    description: "Deep dive into Node.js, Express, databases, caching, and server architecture. Build scalable RESTful APIs, auth systems, and streaming servers.",
    keywords: "nodejs backend internship, database architect training, express js course, api development, postgresql mongodb"
  },
  "full-stack": {
    title: "Full Stack Software Developer Internship | CodeSip",
    description: "The complete package. Build production-grade end-to-end applications (MERN/PERN stack). E-commerce, LMS systems, and social media platforms.",
    keywords: "fullstack developer internship, mern stack project, learn full stack, react node mongodb, software engineer intern"
  },
  "ai-ml": {
    title: "AI & Machine Learning Engineering Internship | CodeSip",
    description: "Learn Python, predictive analytics, natural language processing, and deep learning. Deploy chatbot systems, sentiment scrapers, and neural models.",
    keywords: "machine learning internship, AI developer intern, python data science, predictive model training, NLP chatbot"
  },
  "data-science": {
    title: "Data Science & Business Intelligence Internship | CodeSip",
    description: "Master data wrangling, visualization, and big data pipelines. Build real-time analytics engines, predictive trend bots, and financial models.",
    keywords: "data analyst intern, data science training, data visualization, business intelligence python, big data"
  },
  "marketing": {
    title: "Digital Marketing & Brand Growth Internship | CodeSip",
    description: "Understand professional SEO, campaign automation, organic growth engines, ad funnels, and performance marketing in a scaling startup environment.",
    keywords: "digital marketing internship, SEO specialist intern, growth hacker training, content marketing, ad campaign manager"
  },
  "finance": {
    title: "Finance & Fintech Analyst Internship | CodeSip",
    description: "Explore the modern financial landscape. Build calculators, learn bookkeeping, crypto tracking APIs, invoicing systems, and budget models.",
    keywords: "finance internship, fintech analyst, financial model template, crypto tracker api, bookkeeping training"
  },
  "mba": {
    title: "MBA, Business Strategy & HR Management Internship | CodeSip",
    description: "Develop corporate strategy, direct client management systems, recruitment cycles, sales funnel operations, and administrative leadership.",
    keywords: "mba internship, hr management training, business operations intern, corporate strategy, sales analytics"
  }
};

/**
 * Generate highly optimized JSON-LD Schema.org object dynamically for maximum search engine fidelity.
 */
export const generateSchema = (route, domainParam = "") => {
  const baseSchema = {
    "@context": "https://schema.org"
  };

  switch (route) {
    case "/":
      return {
        ...baseSchema,
        "@type": "Organization",
        "name": "CodeSip Technology",
        "alternateName": "Codesip",
        "url": "https://codesip.in",
        "logo": "https://codesip.in/src/assets/logo.jpg",
        "email": "hr@codesip.in",
        "description": "Learn coding from scratch and go global. Bridging rural talent with global tech opportunities.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.linkedin.com/company/codesip-technology-llp/?viewAsMember=true",
          "https://www.instagram.com/codesip?igsh=Y3F2ZnUxN2I4bHM2"
        ]
      };

    case "/services":
      return {
        ...baseSchema,
        "@type": "Service",
        "name": "CodeSip Tech and Engineering Services",
        "provider": {
          "@type": "Organization",
          "name": "CodeSip Technology"
        },
        "serviceType": "Software Development, Recruitment, Education",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core IT & HR services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web and Application Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CS/IT Final Year Project Guidance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Tech Manpower Supply"
              }
            }
          ]
        }
      };

    case "/services/final-year-project":
      return {
        ...baseSchema,
        "@type": "EducationalProgram",
        "name": "CS & IT Final Year Project Mentorship",
        "description": "Expert mentorship and complete resource kits for final year computer science and information technology students.",
        "provider": {
          "@type": "Organization",
          "name": "CodeSip Technology"
        },
        "programPrerequisites": "Basic understanding of programming (Java, Python, Javascript, etc.)",
        "offers": {
          "@type": "Offer",
          "category": "Education Services",
          "priceCurrency": "INR",
          "price": "Contact for Details"
        }
      };

    case "/services/website-app-development":
      return {
        ...baseSchema,
        "@type": "Service",
        "name": "Custom Website & Mobile App Development",
        "description": "Custom enterprise websites, progressive web applications (PWAs), SaaS, e-commerce, and high fidelity mobile apps (iOS & Android).",
        "provider": {
          "@type": "Organization",
          "name": "CodeSip Technology"
        },
        "serviceType": "Full Stack Software Engineering"
      };

    case "/services/manpower-supply":
      return {
        ...baseSchema,
        "@type": "Service",
        "name": "Corporate Tech Manpower Supply",
        "description": "On-board compliant, skilled contract developers and technical resources at scale.",
        "provider": {
          "@type": "Organization",
          "name": "CodeSip Technology"
        },
        "serviceType": "IT Staffing & Recruitment Vendor Services"
      };

    case "/careers":
      return {
        ...baseSchema,
        "@type": "AboutPage",
        "name": "CodeSip Careers & Open Positions",
        "description": "Explore exciting career opportunities, developer jobs, design roles, and internships at CodeSip Technology. Join our mission to build the future of tech.",
        "url": "https://codesip.in/careers",
        "publisher": {
          "@type": "Organization",
          "name": "CodeSip Technology",
          "url": "https://codesip.in",
          "logo": "https://codesip.in/src/assets/logo.jpg"
        }
      };

    case "/internships":
      return {
        ...baseSchema,
        "@type": "EducationalOccupationalProgram",
        "name": "CodeSip Professional Tech Internship Programs",
        "description": "Hands-on virtual and hybrid internship programs for Indian tech students to get career ready.",
        "provider": {
          "@type": "Organization",
          "name": "CodeSip Technology"
        },
        "educationalCredentialAwarded": "Professional Internship Domain Certificate",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR"
        }
      };

    default:
      if (route.startsWith("/internships/") && domainParam) {
        const key = domainParam.toLowerCase();
        const details = INTERNSHIP_DOMAINS[key] || { title: domainParam + " Internship" };
        return {
          ...baseSchema,
          "@type": "Course",
          "name": details.title,
          "description": details.description,
          "provider": {
            "@type": "Organization",
            "name": "CodeSip Technology",
            "sameAs": "https://codesip.in"
          },
          "educationalCredentialAwarded": "Industry Verified Certificate of Internship"
        };
      }
      return null;
  }
};
