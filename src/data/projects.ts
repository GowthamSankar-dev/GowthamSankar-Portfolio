export interface Project {
  id: string;
  title: string;
  description: string;
  projectType?: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  screenshots?: string[];
  caseStudy?: {
    overview: string;
    problem: string;
    motivation: string;
    objectives: string[];
    architecture: string;
    implementation: string;
    contribution: string;
    challenges: string;
    results: string;
    futureImprovements: string;
  };
}

export const projects: Project[] = [
  {
    id: 'order-iq',
    title: 'Order-IQ',
    description: 'An AI-powered system that automates purchase order processing from emails using LLMs, OCR, NLP, and Odoo ERP integration.',
    projectType: 'Final Year Project',
    category: 'AI / Automation',
    technologies: ['Python', 'Flask', 'React', 'Ollama', 'Qwen2.5', 'spaCy', 'Tesseract OCR', 'SQLAlchemy', 'SQLite', 'Odoo 17', 'XML-RPC', 'Gmail IMAP', 'Tailwind CSS'],
    github: 'https://github.com/GowthamSankar-dev/Order-IQ',
    
    screenshots: [
      '/assets/orderiq1.png', 
      '/assets/orderiq2.png',
      '/assets/orderiq3.png',
      '/assets/orderiq4.png',
      '/assets/orderiq5.png',
      '/assets/orderiq6.png'
    ],
    caseStudy: {
      overview: 'Order-IQ is a comprehensive automation system designed to streamline the processing of purchase orders received via email. It leverages advanced AI techniques to accurately extract information and integrate it directly into the Odoo ERP system.',
      problem: 'Manual entry of purchase orders from emails is time-consuming, prone to human error, and delays the fulfillment process.',
      motivation: 'To create an intelligent system that reduces manual workload, minimizes errors, and accelerates the order processing pipeline.',
      objectives: [
        'Automate extraction of PO details from emails and attachments',
        'Handle multi-product orders with high accuracy',
        'Provide confidence scoring for extracted data',
        'Seamlessly integrate with Odoo ERP via XML-RPC'
      ],
      architecture: '[PLACEHOLDER_ARCHITECTURE_DESCRIPTION]',
      implementation: 'The system uses an LLM-based approach (Qwen via Ollama) combined with OCR for robust data extraction. It handles multi-product scenarios and provides confidence scoring before automating the email workflows and updating the ERP.',
      contribution: '[PLACEHOLDER_YOUR_CONTRIBUTION]',
      challenges: '[PLACEHOLDER_CHALLENGES_FACED]',
      results: '[PLACEHOLDER_RESULTS_ACHIEVED]',
      futureImprovements: '[PLACEHOLDER_FUTURE_IMPROVEMENTS]'
    }
  },
  {
    id: 'showmyfleet',
    title: 'ShowMyFleet',
    description: 'ShowMyFleet is a real-time fleet tracking backend that receives GPS data and manages vehicle information and location history.',
    category: 'Real-Time Tracking',
    technologies: ['Python','FastAPI','PostgreSQL','SQLAlchemy','Pydantic','WebSockets','Alembic','REST APIs'
    ],
    github: 'https://github.com/GowthamSankar-dev/ShowMyFleet',
    demo: 'https://showmyfleet.vercel.app/',
    image: '/assets/image.png',
    screenshots: [
      '/assets/screenshot1.png',
      '/assets/screenshot2.png'
    ],
    caseStudy: {
      overview: 'OceanEmbed is a deep learning framework designed to reconstruct subsurface ocean temperatures using surface satellite observations, presenting a novel approach to oceanographic data analysis.',
      problem: '[PLACEHOLDER_PROBLEM_STATEMENT]',
      motivation: '[PLACEHOLDER_MOTIVATION]',
      objectives: ['[PLACEHOLDER_OBJECTIVE_1]', '[PLACEHOLDER_OBJECTIVE_2]'],
      architecture: '[PLACEHOLDER_ARCHITECTURE]',
      implementation: 'Proposed approach involves AI/ML methodology applied to [PLACEHOLDER_DATASET] dataset to predict subsurface temperatures accurately.',
      contribution: '[PLACEHOLDER_YOUR_CONTRIBUTION]',
      challenges: '[PLACEHOLDER_CHALLENGES_FACED]',
      results: '[PLACEHOLDER_RESEARCH_RESULTS_AND_SIGNIFICANCE]',
      futureImprovements: '[PLACEHOLDER_FUTURE_IMPROVEMENTS]'
    }
  },
  {
    id: 'AI-Image-Colorization',
    title: 'AI Image Colorization',
    description: 'A deep-learning web application that automatically colorizes grayscale images using a pre-trained CNN model, OpenCV, and LAB color-space processing.',
    projectType: 'Mini Project I',
    category: 'Computer Vision',
    technologies: ['Python', 'Flask', 'OpenCV', 'Deep Learning', 'CNN', 'Caffe', 'LAB Color Space', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/GowthamSankar-dev/ai-image-colorization',
    
      screenshots: [
      '/assets/imgcol1.png', 
      '/assets/imgcol2.png', 
      '/assets/imgcol3.png', 
    ],
    caseStudy: {
      overview: 'An automated attendance system that uses facial recognition to identify individuals and log their attendance without manual intervention.',
      problem: '[PLACEHOLDER_PROBLEM_STATEMENT]',
      motivation: '[PLACEHOLDER_MOTIVATION]',
      objectives: ['[PLACEHOLDER_OBJECTIVE_1]'],
      architecture: '[PLACEHOLDER_ARCHITECTURE]',
      implementation: '[PLACEHOLDER_IMPLEMENTATION_DETAILS]',
      contribution: '[PLACEHOLDER_YOUR_CONTRIBUTION]',
      challenges: '[PLACEHOLDER_CHALLENGES_FACED]',
      results: '[PLACEHOLDER_RESULTS_ACHIEVED]',
      futureImprovements: '[PLACEHOLDER_FUTURE_IMPROVEMENTS]'
    }
  },
  {
    id: 'Stable-Diffusion-Image-Generator',
    title: 'AI Image Generator',
    description: 'A full-stack web application that generates high-quality images from text prompts using Stable Diffusion, PyTorch, and Hugging Face Diffusers.',
    projectType: 'Mini Project II',
    category: 'Generative AI',
    technologies: ['Python', 'Django', 'PyTorch', 'Hugging Face Diffusers', 'Stable Diffusion', 'CUDA', 'Pillow', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/GowthamSankar-dev/Stable-Diffusion-Image-Generator',
    
    screenshots: [
      '/assets/img-gen1.png', 
      '/assets/img-gen2.png', 
      '/assets/img-gen3.png', 
      '/assets/img-gen4.png', 
    ],
    caseStudy: {
      overview: 'A web application providing live tracking of buses, showing animations of moving buses from source to destination stops.',
      problem: '[PLACEHOLDER_PROBLEM_STATEMENT]',
      motivation: '[PLACEHOLDER_MOTIVATION]',
      objectives: ['[PLACEHOLDER_OBJECTIVE_1]'],
      architecture: '[PLACEHOLDER_ARCHITECTURE]',
      implementation: 'Built with a Flask backend and dynamic frontend implementation for real-time visualization.',
      contribution: '[PLACEHOLDER_YOUR_CONTRIBUTION]',
      challenges: '[PLACEHOLDER_CHALLENGES_FACED]',
      results: '[PLACEHOLDER_RESULTS_ACHIEVED]',
      futureImprovements: '[PLACEHOLDER_FUTURE_IMPROVEMENTS]'
    }
  }
];
