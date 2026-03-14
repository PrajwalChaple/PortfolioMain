export const projects = [
  { 
    id: 'learngrid',
    title: 'LearnGrid', 
    category: 'Educational Platform', 
    thumbnail: '/learngrid.png', 
    link: 'https://www.learngrid.online/',
    github: 'https://github.com/PrajwalChaple/LearnGrid',
    description: 'A full-stack academic management app for students — track assignments, upload notes, sync with Google Calendar, and chat with an AI-powered 3D buddy. Built to solve real student problems like missed deadlines and scattered resources.',
    features: [
      'Interactive 3D AI buddy powered by Gemini & Spline',
      'Assignment tracking with automatic Google Calendar sync',
      'Class-isolated PDF notes management via Cloudinary',
      'Real-time class announcements and email notifications'
    ],
    technologies: ['React', 'Firebase', 'Cloudinary', 'Gemini AI', 'Google Calendar API', 'Tailwind CSS'],
    challenges: 'One of the main challenges was implementing a real-time progress tracking system that could handle thousands of concurrent users without performance degradation. We solved this by utilizing WebSockets and a Redis caching layer to optimize database queries.'
  },
  { 
    id: 'hirefilter',
    title: 'HireFilter', 
    category: 'AI-Powered Hiring Platform', 
    thumbnail: '/hirefilter.png', 
    link: 'https://hirefilter.vercel.app/',
    github: 'https://github.com/PrajwalChaple/HireFilter',
    description: 'An advanced AI-powered Applicant Tracking System that uses LLMs for semantic resume analysis. Provides explainable insights including skill matching, gap analysis, and evidence extraction — helping recruiters find the right candidates faster.',
    features: [
      'Explainable AI Resume Analysis (Match, missing skills, gap insights)',
      'Dynamic Job Criteria Weighting for recruiters',
      'Multi-Engine AI Parsing (Google Gemini, Groq, NLP)',
      'Role-based dashboards for candidates and recruiters'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Gemini AI', 'Groq API'],
    challenges: 'Integrating the AI model to accurately parse diverse resume formats (PDFs, Word docs, plain text) was highly complex. We had to build a robust preprocessing pipeline to normalize the text data before feeding it into the AI engine, ensuring high accuracy in candidate matching.'
  },
];
