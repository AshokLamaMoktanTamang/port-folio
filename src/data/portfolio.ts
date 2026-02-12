import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
    {
        id: 'aisa',
        title: 'AISA - Artificial Intelligence Subject Assistant',
        description: 'An intelligent AI-powered assistant designed to help students with their academic subjects using advanced machine learning.',
        longDescription: 'AISA is a cutting-edge AI assistant that leverages natural language processing and machine learning to provide personalized academic support. The system helps students understand complex topics, answers questions, and provides study recommendations tailored to individual learning styles.',
        technologies: ['Python', 'OpenAI', 'React', 'Node.js', 'MongoDB', 'Machine Learning'],
        image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
    },
    {
        id: 'kung-fu-quiz',
        title: 'Kung Fu Quiz Platform',
        description: 'A scalable quiz platform integrated with My Second Teacher (MST) featuring real-time audio-to-text highlighting and interactive learning.',
        longDescription: 'Led the development of an innovative quiz platform with accessibility features including real-time audio transcription using OpenAI Whisper. Built with microservices architecture for scalability and includes payment integration with Stripe and PayPal.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'OpenAI Whisper', 'Docker', 'Stripe', 'PayPal'],
        image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
    },
    {
        id: 'mst-v2',
        title: 'My Second Teacher V2 - Admin Panel',
        description: 'A comprehensive admin panel for managing an e-learning platform with custom video player featuring quiz annotations.',
        longDescription: 'Designed and developed the complete admin panel for My Second Teacher V2 with a custom video player package that includes interactive quiz annotations. Implemented microservices architecture and gRPC for efficient inter-service communication.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'ffmpeg', 'gRPC', 'AWS Lambda', 'MongoDB'],
        image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
    },
    {
        id: 'ing-hire',
        title: 'ING Hire - Internal Hiring Management System',
        description: 'A comprehensive hiring management platform with Single Sign-On (SSO) authentication and streamlined recruitment workflows.',
        longDescription: 'Developed a full-featured internal hiring system with SSO using Keycloak, candidate management, interview scheduling with automated notifications via Google OAuth 2.0, and optimized MongoDB schemas for enhanced performance.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Keycloak', 'AWS S3', 'Material UI', 'Redux Toolkit'],
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'hrm-app',
        title: 'HRM Web Application',
        description: 'A feature-rich Human Resource Management system with 20+ core features for employee and team management.',
        longDescription: 'Supervised the development of a comprehensive HRM application including employee management, leave requests, work-from-home approvals, event calendars, and profile maintenance. Built as part of the WRL program mentoring 4 front-end interns.',
        technologies: ['React', 'TypeScript', 'Bootstrap', 'SASS', 'Redux', 'RTK Query', 'Node.js'],
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'code-learner',
        title: 'Code Learner',
        description: 'An interactive e-learning platform with live video streaming, video calls for interviews, and comprehensive test management.',
        longDescription: 'Built a complete e-learning platform with 15+ features including live video server, WebSocket-based video calling for interview processes, test paper management, secure authentication, and session management.',
        technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'Express', 'WebSocket', 'MongoDB'],
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

export const experiences: Experience[] = [
    {
        id: 'se-innovate',
        company: 'Innovate Tech',
        position: 'Software Engineer',
        location: 'Baluwatar, Kathmandu',
        startDate: 'July 2024',
        endDate: 'Present',
        achievements: [
            'Supervised and contributed to the development of Kung Fu Quiz, a scalable quiz platform integrated with MST',
            'Engineered real-time audio-to-text highlighting using OpenAI Whisper, improving accessibility for diverse user groups',
            'Built real-time features using socket communication and implemented session services in MongoDB',
            'Integrated Stripe and PayPal payment gateways for secure transactions',
            'Collaborated with UI/UX designers using Figma to refine interfaces',
            'Utilized Docker for containerized deployments and Git for CI/CD workflows',
        ],
    },
    {
        id: 'ase-innovate',
        company: 'Innovate Tech',
        position: 'Associate Software Engineer',
        location: 'Baluwatar, Kathmandu',
        startDate: 'June 2023',
        endDate: 'July 2024',
        achievements: [
            'Designed and implemented microservices architecture enabling scalable and modular development',
            'Created PoC for generating thumbnail sprites using Python and ffmpeg',
            'Led development of My Second Teacher V2 admin panel',
            'Built custom video player package with quiz annotations using React',
            'Established internal communication using gRPC for high-performance interactions',
            'Developed scalable bulk parser AWS Lambda function for efficient data processing',
        ],
    },
    {
        id: 'trainee-innovate',
        company: 'Innovate Tech',
        position: 'Full-stack Developer Trainee',
        location: 'Baluwatar, Kathmandu',
        startDate: 'January 2023',
        endDate: 'June 2023',
        achievements: [
            'Developed multiple React page views for efficient candidate management',
            'Enhanced application control efficiency through frontend admin projects',
            'Led migration to Version 2 of back-office using React Query',
        ],
    },
    {
        id: 'intern-innovate',
        company: 'Innovate Tech',
        position: 'Full-stack Developer Intern',
        location: 'Baluwatar, Kathmandu',
        startDate: 'September 2022',
        endDate: 'January 2023',
        achievements: [
            'Developed internal hiring management system (ING Hire) with SSO using Keycloak',
            'Implemented file upload functionality using AWS S3 and Multer',
            'Integrated Google OAuth 2.0 for interview notifications',
            'Optimized MongoDB schemas to enhance query performance',
        ],
    },
];

export const skills: Skill[] = [
    {
        category: 'Frontend Technologies',
        items: ['React.js', 'TypeScript', 'Redux', 'RTK Query', 'React Query', 'Material UI', 'Tailwind CSS', 'SASS', 'Bootstrap', 'Shadcn/ui', 'WebSocket', 'WebRTC'],
    },
    {
        category: 'Backend Technologies',
        items: ['Node.js', 'Express.js', 'Nest.js', 'Fastify', 'Mongoose', 'FastAPI', 'Prisma', 'TypeORM', 'Redis', 'gRPC', 'GraphQL'],
    },
    {
        category: 'Databases',
        items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    },
    {
        category: 'AI/ML & Tools',
        items: ['LangChain', 'LangGraph', 'Langsmith', 'Ollama', 'OpenAI Whisper', 'Python', 'ffmpeg'],
    },
    {
        category: 'DevOps & Tools',
        items: ['Docker', 'Git', 'GitHub', 'GitLab', 'AWS (S3, Lambda)', 'Linux', 'Postman', 'Figma'],
    },
    {
        category: 'Testing & Quality',
        items: ['Jest', 'Cypress', 'K6', 'Lighthouse'],
    },
];

export const personalInfo = {
    name: 'Ashok Lama',
    title: 'Full-Stack Software Engineer',
    location: 'Boudha, Kathmandu, Nepal',
    email: 'moktashok@gmail.com',
    phone: '(+977) 9840708606',
    linkedin: 'https://linkedin.com/in/ashok-lama',
    github: 'https://github.com/ashok-lama',
    summary: 'Passionate software engineer with over three years of experience in full-stack development, dedicated to creating exceptional digital experiences. Skilled in maintaining web applications, architecting scalable systems, and ensuring code quality. Proven ability to deliver innovative solutions tailored to individual needs.',
};
