import { Project, Experience, Skill, Education } from '../types';

export const workProjects: Project[] = [
    {
        id: "wp0",
        title: "AISA (Artificial Intilligence School Assistant)",
        description: "An AI-powered intelligent subject assistant that allows teachers to select from multiple personas, each tailored to specific subjects. Teachers can generate lesson plans, group work, or quiz topic summaries, with content retrieved from embedded vectors and enhanced by AI tools that connect to the database. Users can interact with the system to query “MySecondTeacher” data, including assignments and other academic information, providing a smart, dynamic, and personalized teaching assistant experience.",
        technologies: ["Langgraph",
            "Langchain",
            "Langsmith",
            "Fastapi",
            "Ollama",
            "Mongodb"],
        liveUrl: "https://aisa.jelajahilmu.com",
    },
    {
        id: "wp1",
        title: "Kung Fu Quiz",
        description: "An advanced quiz platform with real-time interaction features that provides real-time scoring and instant feedback, secure payment integration, dedicated rooms for quizzes, and support for multiple quiz modes to deliver a dynamic and engaging user experience.",
        technologies: ["React",
            "Socket.io",
            "Stripe API",
            "Bootstrap",
            "Paypal",
            "Nodejs",
            "Nestjs",],
        liveUrl: "https://sifu.kungfuquiz.com/",
    },
    {
        id: "wp2",
        title: "My Second Teacher",
        description: "An award-winning e-learning platform offering interactive video lessons, eBooks, and academic support to students across 51 countries, serving as a comprehensive digital classroom that enhances learning through technology with interactive videos, integrated eBooks, classroom and test paper management, chat features, and dedicated portals for teachers, students, parents, and leaders.",
        technologies: ["React", "Bootstrap", "Nodejs", "Express", "MongoDB"],
        liveUrl: "https://www.mysecondteacher.com/"
    },
    {
        id: "wp3",
        title: "Home School Asia",
        description: "A scalable e-learning platform with comprehensive course management that includes interactive video classroom functionality, an interactive test and assessment system, secure session management, and detailed progress tracking and reporting to ensure an efficient and engaging learning experience.",
        technologies: ["React", "Bootstrap", "Nodejs", "Express", "MongoDB"],
        liveUrl: "https://www.homeschool.asia/"
    },
    {
        id: "wp4",
        title: "IVY Backoffice",
        description: "An advanced administration system for managing interactive video content that supports multi-language subtitle management, audio track configuration, an interactive element editor for quizzes, buttons, and annotations, content version control, and robust user permission management to streamline content operations efficiently.",
        technologies: ["React",
            "Material UI",
            "Node",
            "Express",
            "MongoDb",
            "AWS"],
        liveUrl: "https://ivy.advancedpedagogy.com/logi"
    },
    {
        id: "wp5",
        title: "IVY Player",
        description: "An enterprise-grade interactive video player solution for educational platforms featuring a frame-accurate quiz and annotation system, multi-format video support with adaptive streaming, customizable player skin and branding options, and detailed analytics with advanced engagement tracking to deliver a powerful and flexible learning experience.",
        technologies: ["React", "React Player", "Http Live Streaming", "Mux"],
    }
];

export const personalProjects: Project[] = [
    {
        id: "p1",
        title: "@ashoklama/statepilot",
        description: "A modern state management solution for React applications that is type-safe by design, offers zero-boilerplate implementation, supports a modular state architecture, and provides scoped selectors and dispatchers for scalable and maintainable application development.",
        technologies: ["React", "Typescript"],
        npmUrl: "https://www.npmjs.com/package/@ashoklama/statepilot"
    },
    {
        id: "p2",
        title: "async-worker-queue-runner",
        description: "A high-performance asynchronous task processing library that offers configurable concurrency control, automatic retry with exponential backoff, worker thread support for CPU-intensive tasks, and a clean promise-based API for building scalable and resilient systems.",
        technologies: ["Node.js", "TypeScript", "Worker Threads"],
        npmUrl: "https://www.npmjs.com/package/async-worker-queue-runner"
    },
    {
        id: "p3",
        title: "ashoklama-custom-video-player",
        description: "An extensible video player with enhanced capabilities that features customizable UI controls, a flexible plugin architecture, built-in accessibility support, and seamless cross-browser compatibility to ensure a powerful and inclusive viewing experience.",
        technologies: ["JavaScript", "HTML5 Video API"],
        npmUrl: "https://www.npmjs.com/package/ashoklama-custom-video-player",
    },
    {
        id: "p4",
        title: "Scribble",
        description: "An interactive drawing application with rich features, including canvas-based rendering, multiple shape tools, layer support, and export functionality, providing a versatile and creative digital drawing experience.",
        technologies: ["TypeScript", "HTML5 Canvas"],
        githubUrl: "https://github.com/AshokLamaMoktanTamang/scribble",
    }
];

export const experiences: Experience[] = [
    {
        id: 'se-innovate',
        company: 'INNOVATE TECH',
        position: 'Software Engineer',
        location: 'Baluwatar, Kathmandu',
        startDate: '07/2024',
        endDate: 'Ongoing',
        achievements: [
            'Supervised and contributed to the development of a scalable Quiz platform, Kung Fu Quiz, integrated with MST.',
            'Engineered a real-time audio-to-text highlighting feature using OpenAI Whisper, improving accessibility for diverse user groups.',
            'Built real-time features for an app using socket communication and implemented session services to track user sessions in MongoDB.',
            'Worked closely with UI/UX designers using Figma to refine interfaces and enhance usability.',
            'Utilized Docker for containerized deployments and Git for version control and CI/CD workflows.',
            'Integrated Stripe and PayPal payment gateways into the application, handling both backend (Node.js, Express) and frontend (React) for secure and seamless transactions.',
            'Implemented subscription management and webhook handling, ensuring reliability and fraud prevention.'
        ],
    },
    {
        id: 'ase-innovate',
        company: 'INNOVATE TECH',
        position: 'Associate Software Engineer',
        location: 'Baluwatar, Kathmandu',
        startDate: '06/2023',
        endDate: '07/2024',
        achievements: [
            'Designed and implemented a microservices architecture for the application, enabling scalable and modular development.',
            'Designed a Proof of Concept (PoC) for generating thumbnail sprites using Python and ffmpeg, optimizing video preview generation.',
            'Led the development of the admin panel of My Second Teacher V2, enhancing user experience and system efficiency.',
            'Built a custom video player package with quiz annotations using React, improving interactive learning experiences.',
            'Established internal communication using gRPC, ensuring high-performance, low-latency interactions between services.',
            'Ensured mobile responsiveness for seamless user experience across devices.',
            'Contributed to the development of a scalable bulk parser AWS Lambda function to process and upload multiple records efficiently using CSV files, streamlining data handling and enhancing system performance.'
        ],
    },
    {
        id: 'trainee-innovate',
        company: 'INNOVATE TECH',
        position: 'Full-stack Developer Trainee',
        location: 'Baluwatar, Kathmandu',
        startDate: '01/2023',
        endDate: '06/2023',
        achievements: [
            'Worked on multiple React page views to facilitate efficient candidate management and streamline recruitment workflows.',
            'Enhanced application control efficiency by developing multiple frontend admin projects.',
            'Led the migration to Version 2 of the back-office(admin panel) using React Query, improving functionality and usability.'
        ],
    },
    {
        id: 'intern-innovate',
        company: 'INNOVATE TECH',
        position: 'Full-stack Developer Intern',
        location: 'Baluwatar, Kathmandu',
        startDate: '09/2022',
        endDate: '01/2023',
        achievements: [
            'ING Hire, pdf viewer, key clock for authentication SSO, organization, department, level, interview, management joi schema validation',
            'Express node react redux toolkit material ui ts',
            'Using AWS s3 and multer (file upload)',
            'Google Oauth 2.0 for Interview date assign garda notification, Oauth 2 ko SMTP for mail send receive',
            'Queue for notification, react-helmet-async for search engine optimization.',
            'Developed an internal hiring management system, implementing Single Sign-On (SSO) using Keycloak for seamless authentication across both frontend (React) and backend (Express, Node.js).',
            'Optimized MongoDB schemas to enhance query performance and streamline workflows.'
        ],
    },
];

export const education: Education[] = [
    {
        id: 'bsc-computing',
        institution: 'Islington College',
        degree: 'BSc (Hons) Computing',
        location: 'Kamalpokhari, Kathmandu',
        startDate: '2021',
        endDate: '2023',
        details: 'London Metropolitan University'
    },
];

export const skills: Skill[] = [
    {
        category: "FRONTEND",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebRTC"]
    },
    {
        category: "BACKEND",
        items: ["Node.js", "NestJS", "FastAPI", "Microservices", "Express", "Fastify"]
    },
    {
        category: "DATABASES",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
        category: "APIS",
        items: ["REST", "GraphQL", "gRPC", "Socket.IO", "WebSocket"]
    },
    {
        category: "DEVOPS",
        items: ["Docker", "CI/CD", "Nx", "Git", "Bash", "AWS", "Load Testing (k6)"]
    },
    {
        category: "AI/ML",
        items: ["LangChain", "LangGraph", "LangSmith", "n8n", "RAG Systems", "TTS"]
    },
    {
        category: "OTHER",
        items: ["Stripe", "PayPal", "Kafka"]
    }
];

export const professionalDevelopment = [
    {
        title: 'WRL SUPERVISOR',
        company: 'Innovate Tech',
        location: 'Baluwatar, Kathmandu',
        startDate: '07/2024',
        endDate: '11/2024',
        achievements: [
            'Selected as the supervisor for the Work-Related Learning (WRL) module, overseen by Islington College.',
            'Led and mentored 4 front-end interns, guiding them in modern web technologies such as React, TypeScript, Bootstrap, SASS, Redux, and RTK Query.',
            'Supervised the development of an HRM web application for Innovate Tech with 20+ core features, including employee and team management, leave, work from home, and add about requests and approval, event and holiday calendars, profile maintenance, and others.',
            'Assisted 18 interns, collaborating with other WRL supervisors to support career growth and professional adaptability.'
        ]
    }
];

export const personalInfo = {
    name: 'Ashok Lama',
    title: 'Full-Stack Software Engineer',
    location: 'Boudha, Kathmandu',
    email: 'moktashok@gmail.com',
    phone: '(+977) 9840708606',
    linkedin: 'https://www.linkedin.com/in/ashok-lama-620547282/',
    github: 'https://github.com/AshokLamaMoktanTamang',
    npm: 'https://www.npmjs.com/~ashoklama',
    summary: 'Passionate software engineer with over three years of experience in full-stack development, dedicated to creating exceptional digital experiences. Skilled in maintaining web applications, architecting scalable systems, and ensuring code quality. Proven ability to deliver innovative solutions tailored to individual needs.',
};
