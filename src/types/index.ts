export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    achievements: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
