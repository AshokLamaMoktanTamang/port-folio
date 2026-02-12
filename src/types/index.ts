export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    githubUrl?: string;
    npmUrl?: string;
    liveUrl?: string;
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

export interface Education {
    id: string;
    institution: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    details?: string;
}

export interface Skill {
    category: string;
    items: string[];
}
