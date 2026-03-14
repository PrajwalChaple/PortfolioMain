import { Code2, Server, BrainCircuit, Layout, Database, Sparkles, TerminalSquare, GitMerge, Cpu } from 'lucide-react';

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code2,
    description: "I build breathtaking, highly interactive, and responsive user interfaces that captivate users. From modern landing pages to complex web applications, I ensure every pixel is perfect and every interaction feels natural.",
    deliverables: [
      {
        title: "Responsive Web Design",
        desc: "Websites that look and function flawlessly on desktops, tablets, and smartphones.",
        icon: Layout
      },
      {
        title: "Interactive UI/UX",
        desc: "Smooth animations and micro-interactions using Framer Motion and Tailwind CSS.",
        icon: Sparkles
      },
      {
        title: "Single Page Applications",
        desc: "Lightning-fast SPAs built with React JS and Vite for dynamic user experiences.",
        icon: TerminalSquare
      }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5/CSS3']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Apps',
    icon: Server,
    description: "I engineer robust, end-to-end web applications. By seamlessly integrating beautiful frontends with powerful, secure, and scalable backend architectures, I turn complex business requirements into reliable software.",
    deliverables: [
      {
        title: "Custom API Development",
        desc: "RESTful APIs built with Node.js and Express to power your applications.",
        icon: GitMerge
      },
      {
        title: "Database Architecture",
        desc: "Secure and scalable database design using MongoDB, PostgreSQL, or Firebase.",
        icon: Database
      },
      {
        title: "Authentication & Security",
        desc: "Implementing secure login flows (OAuth, JWT) and robust data protection.",
        icon: Server
      }
    ],
    techStack: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'PostgreSQL', 'Next.js API Routes']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    icon: BrainCircuit,
    description: "I bridge the gap between artificial intelligence and practical web usage. By integrating cutting-edge LLMs and AI services, I can add intelligent automation, smart assistants, and powerful data processing to your digital products.",
    deliverables: [
      {
        title: "Custom AI Chatbots",
        desc: "Intelligent conversational agents trained on your data using Gemini or OpenAI.",
        icon: BrainCircuit
      },
      {
        title: "Automated Workflows",
        desc: "Smart parsing and automation tools (like the resume parser in HireFilter).",
        icon: Cpu
      },
      {
        title: "Generative Features",
        desc: "Adding AI-driven content generation, summarization, and interactive experiences.",
        icon: Sparkles
      }
    ],
    techStack: ['Google Gemini API', 'OpenAI API', 'Groq API', 'Hugging Face', 'AI Prompt Engineering']
  }
];
