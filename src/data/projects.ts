export interface Project {
  id: string;
  title: string;
  description: string;
  projectType?: string;
  year?: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  screenshots?: string[];
  caseStudy?: {
    overview: string;
    keyFeatures?: { title: string; description: string }[];
    architecture?: { title: string; description: string }[];
    dataFlow?: string;
    impact?: string[];
    techStack?: { category: string; technologies: string }[];
    researchFoundation?: string;
    background?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'order-iq',
    title: 'Order-IQ',
    year: '2025-2026',
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
      overview: 'Order-IQ is a comprehensive, AI-driven purchase order automation system designed to automate the complete workflow of processing purchase orders received through email. It combines Large Language Models, OCR, Natural Language Processing, intelligent validation, confidence scoring, and Odoo 17 ERP integration to transform unstructured emails and document attachments into structured purchase orders. The system supports multi-product orders, automated approval and rejection workflows, duplicate detection, rejected-order reprocessing, analytics, and automated email communication, significantly reducing the need for manual order processing.',
      keyFeatures: [
        { title: 'Automated Email Processing', description: 'Connects to Gmail through IMAP to continuously scan unread order-related emails using configurable keyword filtering and scan intervals.' },
        { title: 'Intelligent Data Extraction', description: 'Extracts structured purchase-order information from both plain-text emails and PDF/image attachments using Qwen2.5 through Ollama, with spaCy NER and regex-based extraction as a fallback.' },
        { title: 'OCR-Based Document Processing', description: 'Uses Tesseract OCR with image preprocessing techniques such as contrast enhancement and binarization to extract information from scanned documents and images.' },
        { title: 'Multi-Product Order Handling', description: 'Processes tabular purchase orders containing multiple products and groups their line items into structured order entries.' },
        { title: 'Confidence Scoring', description: 'Uses a weighted 14-field confidence engine with four validation tiers to evaluate extracted information and support automated approval or rejection decisions.' },
        { title: 'Smart Order Reprocessing', description: 'Detects replies to rejected orders, merges newly provided information with existing order data, and re-evaluates the order for possible approval.' },
        { title: 'Duplicate Detection', description: 'Uses hash-based and content-based deduplication to prevent duplicate purchase orders from entering the system.' },
        { title: 'ERP Synchronization', description: 'Integrates directly with Odoo 17 through XML-RPC to create vendors, products, and multi-product purchase orders with financial details.' },
        { title: 'Automated Notifications', description: 'Sends HTML-based approval, rejection, and acknowledgement emails with email open-tracking.' },
        { title: 'Analytics & Reporting', description: 'Provides interactive dashboards for order trends, status distribution, priorities, retailer statistics, confidence distribution, and downloadable PDF reports.' },
        { title: 'Role-Based Access Control', description: 'Supports Admin, Manager, and Viewer roles with permission-based access and multi-tenant data isolation.' }
      ],
      architecture: [
        { title: 'Email Ingestion Pipeline', description: 'The Python backend connects to Gmail using IMAP, identifies relevant unread emails, filters order-related messages, and retrieves their content and attachments.' },
        { title: 'Document Processing Layer', description: 'PDF and image attachments are converted and processed using Tesseract OCR, pdf2image, and Pillow with image preprocessing for improved text extraction.' },
        { title: 'AI Processing Engine', description: 'Qwen2.5-3B, deployed locally through Ollama, serves as the primary extraction engine, while spaCy NER and regex provide a fallback mechanism when the LLM is unavailable.' },
        { title: 'Validation & Decision Engine', description: 'Extracted fields pass through post-processing and four-tier validation before entering the weighted 14-field confidence-scoring system for automated classification.' },
        { title: 'Data & Integration Layer', description: 'Validated orders are stored in SQLite and approved orders are synchronized with Odoo 17 through XML-RPC, including vendor, product, purchase-order, and financial information.' },
        { title: 'Web Application', description: 'The backend is built with Python, Flask, and SQLAlchemy, while the frontend uses React 19, Vite, Tailwind CSS, and Recharts to provide an interactive management and analytics interface.' },
        { title: 'Security Layer', description: 'Implements Fernet encryption for stored IMAP credentials, password hashing, session-based authentication, CSRF protection, and role-based permissions.' }
      ],
      impact: [
        'Automates the complete workflow from incoming email to ERP purchase-order synchronization.',
        'Reduces manual processing by automatically extracting, validating, scoring, and classifying purchase-order information.',
        'Supports complex multi-product purchase orders from both emails and document attachments.',
        'Provides an intelligent fallback extraction mechanism to maintain processing continuity when the primary LLM is unavailable.',
        'Enables rejected orders to be automatically reprocessed when customers provide corrected information through email replies.',
        'Connects AI-powered document understanding directly with an enterprise ERP system through Odoo XML-RPC integration.',
        'Provides administrators with real-time order monitoring, analytics, activity logs, notifications, and user-access management.'
      ],
      techStack: [
        { category: 'Backend', technologies: 'Python • Flask • SQLAlchemy' },
        { category: 'Frontend', technologies: 'React 19 • Vite • Tailwind CSS • Recharts' },
        { category: 'AI / NLP', technologies: 'Qwen2.5 • Ollama • spaCy • dateparser' },
        { category: 'OCR', technologies: 'Tesseract OCR • pdf2image • Pillow' },
        { category: 'Database', technologies: 'SQLite' },
        { category: 'ERP', technologies: 'Odoo 17 • XML-RPC' },
        { category: 'Email', technologies: 'Gmail IMAP • SMTP' },
        { category: 'Security', technologies: 'Fernet • Werkzeug • Session Authentication • CSRF Protection' }
      ]
    }
  },
  {
    id: 'showmyfleet',
    title: 'ShowMyFleet',
    year: '2026',
    description: 'ShowMyFleet is a real-time fleet tracking backend that receives GPS data and manages vehicle information and location history.',
    category: 'Real-Time Tracking',
    technologies: ['Python','FastAPI','PostgreSQL','SQLAlchemy','Pydantic','WebSockets','Alembic','REST APIs'
    ],
    github: 'https://github.com/GowthamSankar-dev/ShowMyFleet',
    demo: 'https://showmyfleet.vercel.app/',
    image: '/assets/image.png',
    screenshots: [
      '/assets/ishowfleet (1).png',
      '/assets/ishowfleet (2).png',
      '/assets/ishowfleet (3).png',
      '/assets/ishowfleet (4).png'
    ],
    caseStudy: {
      overview: 'Fleet Tracking System is a real-time vehicle tracking backend designed to receive, store, retrieve, and broadcast vehicle location data. It provides APIs for receiving GPS coordinates from mobile devices, managing tracked vehicles, accessing their latest locations and historical tracking data, and delivering live location updates to connected monitoring dashboards through WebSockets. The backend is structured using a modular service-based architecture, making it suitable for building scalable real-time fleet monitoring applications.',
      keyFeatures: [
        { title: 'Real-Time Location Tracking', description: 'Receives GPS location pings from mobile devices through a dedicated REST API endpoint.' },
        { title: 'Vehicle Management', description: 'Provides APIs to retrieve all tracked vehicles and detailed information for individual vehicles.' },
        { title: 'Latest Location Access', description: 'Allows applications to retrieve the most recent location associated with a specific vehicle.' },
        { title: 'Location History', description: 'Maintains vehicle location history and provides access to the latest 100 location pings for each vehicle.' },
        { title: 'Live Dashboard Updates', description: 'Uses WebSockets to broadcast real-time vehicle location updates to connected monitoring dashboards.' },
        { title: 'Asynchronous Database Operations', description: 'Uses Async SQLAlchemy for efficient asynchronous database interaction.' },
        { title: 'Data Validation', description: 'Uses Pydantic v2 schemas to validate and structure API request and response data.' },
        { title: 'Database Migrations', description: 'Uses Alembic to manage database schema changes and migrations.' },
        { title: 'Health Monitoring', description: 'Provides a dedicated health-check endpoint for monitoring backend availability.' }
      ],
      architecture: [
        { title: 'API Layer', description: 'Built with FastAPI, providing REST endpoints for receiving GPS data and retrieving vehicle and location information.' },
        { title: 'Location Processing', description: 'The /location endpoint receives GPS pings from mobile devices and passes the data through the application\'s business-logic layer.' },
        { title: 'Service Layer', description: 'A dedicated services module separates business logic from API routes, providing a cleaner and maintainable application architecture.' },
        { title: 'Database Layer', description: 'Uses PostgreSQL with an asynchronous SQLAlchemy engine and session management for storing vehicle and location information.' },
        { title: 'Real-Time Communication', description: 'A WebSocket connection manager maintains active dashboard connections and broadcasts new location updates to connected clients.' },
        { title: 'Data Models', description: 'SQLAlchemy ORM models represent vehicles and their associated locations, while Pydantic schemas define structured data-transfer objects.' },
        { title: 'Migration System', description: 'Alembic manages database migrations, allowing the database schema to evolve safely as the application develops.' }
      ],
      dataFlow: `Mobile Device
     ↓
GPS Location Ping
     ↓
FastAPI /location
     ↓
Validation
     ↓
Business Logic
     ↓
PostgreSQL
     ↓
WebSocket Manager
     ↓
Connected Dashboard
     ↓
Live Vehicle Update`,
      impact: [
        'Real-time vehicle location communication using WebSockets.',
        'RESTful API architecture for vehicle and location management.',
        'Asynchronous backend and database operations.',
        'Structured separation of routes, services, models, schemas, and WebSocket management.',
        'Historical location tracking with vehicle-specific data retrieval.',
        'Automatic interactive API documentation through FastAPI\'s Swagger UI and ReDoc support.'
      ],
      techStack: [
        { category: 'Backend', technologies: 'Python • FastAPI • Uvicorn' },
        { category: 'Database', technologies: 'PostgreSQL • SQLAlchemy' },
        { category: 'Data Validation', technologies: 'Pydantic v2' },
        { category: 'Real-Time Communication', technologies: 'WebSockets' },
        { category: 'Database Migration', technologies: 'Alembic' },
        { category: 'API Documentation', technologies: 'Swagger UI • ReDoc' }
      ]
    }
  },
  {
    id: 'AI-Image-Colorization',
    title: 'AI Image Colorization',
    year: '2023',
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
      overview: 'AI Image Colorization is a deep-learning-based web application that automatically transforms grayscale images into colorized images using the pre-trained Colorful Image Colorization model developed by Richard Zhang, Phillip Isola, and Alexei A. Efros. The application combines a CNN-based color prediction model with OpenCV, LAB color-space processing, and a Flask backend to predict missing color information from grayscale images. Users can upload grayscale photographs through a modern web interface, process them automatically, compare the original and colorized results, and download the generated image.',
      keyFeatures: [
        { title: 'Automatic Image Colorization', description: 'Converts grayscale photographs into colorized images using a pre-trained deep learning model.' },
        { title: 'CNN-Based Color Prediction', description: 'Uses a pre-trained Convolutional Neural Network to predict the missing color information from the input image.' },
        { title: 'LAB Color-Space Processing', description: 'Separates image lightness from color information by processing the L channel and predicting the corresponding a and b channels.' },
        { title: 'Image Upload', description: 'Supports uploading grayscale images through a web-based interface with drag-and-drop functionality.' },
        { title: 'Original vs. Colorized Comparison', description: 'Allows users to visually compare the input grayscale image with the generated colorized result.' },
        { title: 'Image Download', description: 'Provides the ability to download the resulting colorized image.' },
        { title: 'Web-Based AI Application', description: 'Integrates the deep learning inference pipeline into an accessible browser-based application.' },
        { title: 'REST API', description: 'Uses Flask to provide the backend endpoint responsible for processing and colorizing uploaded images.' }
      ],
      architecture: [
        { title: 'Frontend Layer', description: 'A web interface built with HTML, CSS, and JavaScript provides image upload, interaction, comparison, and result presentation.' },
        { title: 'Backend Layer', description: 'A Python Flask server receives uploaded images and manages communication between the web interface and the image-processing pipeline.' },
        { title: 'Image Processing Layer', description: 'OpenCV handles image preprocessing, LAB color-space conversion, and deep learning inference through its DNN module.' },
        { title: 'Deep Learning Layer', description: 'The application uses the Colorful Image Colorization CNN model in Caffe format to predict the a and b color channels from the L lightness channel.' },
        { title: 'Color Reconstruction', description: 'The predicted a and b channels are combined with the original L channel and converted from LAB back into RGB to generate the final colorized image.' }
      ],
      dataFlow: `Grayscale Image
       ↓
LAB Color Space Conversion
       ↓
Extract L (Lightness) Channel
       ↓
Pre-trained CNN
       ↓
Predict a + b Color Channels
       ↓
Combine L + a + b
       ↓
Convert LAB → RGB
       ↓
Colorized Image`,
      impact: [
        'Integrated a pre-trained deep learning model into a functional web application.',
        'Implemented CNN-based grayscale-to-color image transformation.',
        'Applied LAB color-space processing for separating luminance and chrominance information.',
        'Connected an AI inference pipeline with a Flask REST API and browser-based frontend.',
        'Built an interactive workflow supporting image upload, colorization, visual comparison, and result download.',
        'Gained practical experience in deep learning model integration, OpenCV-based image processing, Flask API development, and frontend-backend integration.'
      ],
      techStack: [
        { category: 'Programming', technologies: 'Python' },
        { category: 'Backend', technologies: 'Flask' },
        { category: 'Computer Vision', technologies: 'OpenCV' },
        { category: 'Deep Learning', technologies: 'CNN • Caffe' },
        { category: 'Image Processing', technologies: 'LAB Color Space' },
        { category: 'Frontend', technologies: 'HTML • CSS • JavaScript' }
      ],
      researchFoundation: 'The project is based on the Colorful Image Colorization approach presented by Richard Zhang, Phillip Isola, and Alexei A. Efros at ECCV 2016. The underlying approach uses deep neural networks to learn how to predict plausible color information from grayscale images.'
    }
  },
  {
    id: 'Stable-Diffusion-Image-Generator',
    title: 'AI Image Generator',
    year: '2024',
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
      overview: 'AI Image Generator is a full-stack Generative AI web application that transforms natural-language text prompts into AI-generated images using the Stable Diffusion v1.4 model. Built with Django, PyTorch, and Hugging Face Diffusers, the application integrates an end-to-end text-to-image generation pipeline directly into a web interface, allowing users to create, manage, and download their generated artwork. The system supports GPU acceleration with NVIDIA CUDA and FP16 precision for faster inference, while automatically falling back to CPU-based generation when a compatible GPU is unavailable.',
      keyFeatures: [
        { title: 'Text-to-Image Generation', description: 'Converts descriptive natural-language prompts into unique AI-generated images using Stable Diffusion v1.4.' },
        { title: 'Generative AI Pipeline', description: 'Integrates Hugging Face Diffusers with PyTorch to load and execute the pre-trained diffusion model.' },
        { title: 'GPU Acceleration', description: 'Automatically detects NVIDIA CUDA-compatible GPUs and uses FP16 precision to improve image-generation performance, with CPU fallback support.' },
        { title: 'User Authentication', description: 'Provides Django-based user registration and login functionality, allowing users to maintain their own accounts.' },
        { title: 'Personal Image Library', description: 'Automatically stores generated images in user-specific libraries, enabling users to view, manage, and delete previous creations.' },
        { title: 'Prompt Management', description: 'Allows users to copy the exact prompt associated with a generated image for reuse or experimentation.' },
        { title: 'High-Quality Downloads', description: 'Generated images can be downloaded directly in PNG format.' },
        { title: 'Interactive Web Interface', description: 'Provides a responsive interface with drag-free prompt interaction, loading indicators, hover animations, and a customized dark-mode visual experience.' },
        { title: 'Persistent Data Management', description: 'Uses Django models and SQLite to associate generated images with user accounts and maintain image-generation history.' }
      ],
      architecture: [
        { title: 'Frontend Layer', description: 'HTML5, CSS, and JavaScript provide the interactive interface through which users authenticate, enter prompts, initiate generation, browse their image library, and manage generated content.' },
        { title: 'Web Application Layer', description: 'Django handles routing, authentication, request processing, database operations, and integration between the frontend and AI generation pipeline.' },
        { title: 'Generative AI Layer', description: 'PyTorch executes the Stable Diffusion v1.4 model through Hugging Face\'s Diffusers library to perform text-to-image generation.' },
        { title: 'Hardware Acceleration', description: 'The application detects available NVIDIA CUDA hardware and uses GPU inference with FP16 precision when available, while supporting CPU-based float32 inference as a fallback.' },
        { title: 'Image Processing Layer', description: 'Pillow is used for image handling and management of generated image files.' },
        { title: 'Data Layer', description: 'SQLite stores application data by default, with the architecture allowing migration to PostgreSQL if required.' },
        { title: 'Security Layer', description: 'Environment variables managed through python-dotenv keep the Hugging Face authentication token outside the source code and prevent sensitive credentials from being committed to the repository.' }
      ],
      dataFlow: `User Prompt
     ↓
Django Web Application
     ↓
Stable Diffusion Pipeline
     ↓
PyTorch + Diffusers
     ↓
Text Conditioning
     ↓
GPU / CPU Inference
     ↓
Generated Image
     ↓
Save to User Library
     ↓
Preview / Download`,
      impact: [
        'Integrated a state-of-the-art text-to-image diffusion model into a complete web application.',
        'Implemented GPU-aware inference using CUDA and FP16 precision with CPU fallback support.',
        'Built user authentication and personalized image libraries around the AI generation workflow.',
        'Connected the AI inference pipeline with Django\'s backend architecture and database models.',
        'Implemented image persistence, prompt retrieval, downloading, and deletion functionality.',
        'Developed a complete Generative AI application rather than a standalone model inference script.',
        'Gained practical experience integrating Generative AI, deep learning inference, GPU acceleration, backend development, database management, authentication, and frontend development into a single application.'
      ],
      techStack: [
        { category: 'Programming', technologies: 'Python' },
        { category: 'Backend', technologies: 'Django' },
        { category: 'Generative AI', technologies: 'Stable Diffusion v1.4 • Hugging Face Diffusers' },
        { category: 'Deep Learning', technologies: 'PyTorch' },
        { category: 'GPU Computing', technologies: 'NVIDIA CUDA • FP16' },
        { category: 'Image Processing', technologies: 'Pillow' },
        { category: 'Frontend', technologies: 'HTML5 • CSS • JavaScript' },
        { category: 'Database', technologies: 'SQLite' },
        { category: 'Authentication', technologies: 'Django Authentication' },
        { category: 'Environment Management', technologies: 'python-dotenv' }
      ],
      background: 'The project was originally developed as a college mini project in 2024 and was later published on GitHub in 2026 as part of the technical portfolio. Its primary domain is Generative AI / Deep Learning, with a focus on integrating text-to-image generation into a user-facing web application.'
    }
  }
];
