import tailwindIcon from "../assets/tailwind.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodbIcon.svg";
import sqlserverIcon from "../assets/sqlserver.svg";
import fastapiIcon from "../assets/FastAPI.svg";
import googleGeminiIcon from "../assets/gemini-color.svg";
import pythonIcon from "../assets/python.svg";
import pytorchIcon from "../assets/pytorch.svg";
import viteIcon from "../assets/vite.svg";
import huggingfaceIcon from "../assets/huggingface-color.svg";
import groqIcon from "../assets/groq.svg";
import cloudinaryIcon from "../assets/cloudinary.svg";
import langchainIcon from "../assets/langchain-color.svg";
import chromaIcon from "../assets/Chroma--Streamline-Svg-Logos.svg";

import cineverse1 from "../assets/cineverse1.jpg";
import cineverse2 from "../assets/cineverse2.jpg";
import cineverse3 from "../assets/cineverse3.jpg";
import cineverse4 from "../assets/cineverse4.png";
import cineverse5 from "../assets/cineverse5.png";

import evalvision1 from "../assets/evalvision1.png";
import evalvision2 from "../assets/evalvision2.png";
import evalvision3 from "../assets/evalvision3.png";
import evalvision4 from "../assets/evalvision4.png";
import evalvision5 from "../assets/evalvision5.png";
import evalvision6 from "../assets/evalvision6.png";
import evalvision7 from "../assets/evalvision7.png";

import leaflens1 from "../assets/leaflens1.PNG";
import leaflens2 from "../assets/leaflens2.PNG";

import goconect1 from "../assets/goconect1.PNG";
import chatapp2 from "../assets/chatapp2.PNG";
import chatapp3 from "../assets/chatapp3.PNG";
import chatapp4 from "../assets/chatapp4.PNG";

export const myprojects = [
  {
    index: 0,
    title: "EvalVision AI",
    description: `EvalVision AI is a modern automated grading and evaluation web application designed to offer educators a streamlined and intelligent assessment experience. Built with a clean, responsive UI, a robust backend architecture, and a dedicated AI processing service, the platform emphasizes accuracy, efficiency by making it easy for teachers to evaluate student submissions and provide detailed feedback anytime.

        Exam Management: Users can intuitively create and organize exams, each complete with designated rubrics and specific grading criteria.

        Automated AI Grading: Seamlessly process student submissions through advanced AI and OCR services that extract text and evaluate answers based on established rubrics.

        Submission Tracking: A built-in upload portal allows educators to quickly submit student assignments, track their grading status, and manage batches of documents.

        Detailed Evaluation Insights: A modern central dashboard summarizing assignment scores, AI-generated feedback, and criteria breakdowns for quick access.

        Interactive Results Panel: Explore student performance charts, review AI scoring decisions, and easily override or adjust grades to maintain full control over the assessment process.

        Secure Handling: Safe submission and storage of exams, rubrics, and sensitive student data with validated endpoints and robust backend protection.

        Responsive UI: Fully optimized for mobile, tablet, and desktop to ensure a smooth user experience across devices.`,
    techstack: [
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Google Gemini", icon: googleGeminiIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
    images: [
      evalvision1,
      evalvision2,
      evalvision3,
      evalvision4,
      evalvision5,
      evalvision6,
      evalvision7,
    ],
    githublink: "https://github.com/ahmadaali5283/EVALVISION",
    sitelink: "https://eval-vision-client.vercel.app",
  },
  {
    index: 1,
    title: "LeafLens.ai",
    description: `LeafLens.ai is an AI-powered plant disease diagnostic platform using a custom Vision Mamba (State Space Model) architecture for efficient leaf image classification, paired with Google Gemini for AI-driven treatment recommendations. Achieved 90%+ accuracy with real-time inference under 100ms, running efficiently on CPU without requiring heavy GPU resources.

        Vision Mamba (SSM) Classifier: Implements a custom Vision State Space Model for super-efficient feature learning and classification on plant leaves, achieving high accuracy with a fraction of the computational load of traditional CNNs or Vision Transformers (ViTs).

        Google Gemini Diagnosis: Connects to the Google Gemini API to analyze disease classification outputs and generate highly contextualized, organic, and chemical-based plant treatment recommendations.

        Real-Time Processing: Built to process leaf images in under 100ms on CPU, making it highly suitable for field deployment on mobile devices without requiring expensive GPU servers.

        Intelligent Plant Care Dashboard: A clean, intuitive dashboard where farmers and growers can upload plant images, track past diagnostics, view charts of disease prevalence, and manage recommendations.`,
    techstack: [
      { name: "React", icon: reactIcon },
      { name: "Vite", icon: viteIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Vision Mamba (SSM)", icon: huggingfaceIcon },
      { name: "Google Gemini API", icon: googleGeminiIcon },
      { name: "PyTorch", icon: pytorchIcon },
    ],
    images: [leaflens1, leaflens2],
    githublink: "https://github.com/ahmadaali5283/Leaflens-AI",
    sitelink: "",
  },
  {
    index: 2,
    title: "GoConnect - ChatApp with RAG Assistant",
    description: `GoConnect is a full-stack, real-time chat application featuring secure authentication, media sharing, and an AI-powered Retrieval-Augmented Generation (RAG) assistant. The platform combines a responsive React frontend with an Express/Node.js backend and a dedicated FastAPI AI service.

        Real-Time Chat & Media Uploads: Built with Socket.io for instant messaging, featuring JWT authentication for secure sessions and Cloudinary integration for smooth media file sharing.

        Retrieval-Augmented Generation (RAG): Uses FastAPI, LangChain, and LangGraph to power an intelligent AI assistant. Conversation history and messages are stored in MongoDB and indexed in ChromaDB for fast retrieval.

        Semantic Conversation Search: Leverages HuggingFace Embeddings and ChromaDB vector store to enable users to search their chats semantically, retrieving contextually relevant messages instead of simple keyword matches.

        Context-Aware AI Assistant: The LangGraph-powered chat assistant maintains memory of the ongoing conversation, providing context-aware responses and automatic chat history summarization via Groq LLMs.`,
    techstack: [
      { name: "React.js", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "LangChain & LangGraph", icon: langchainIcon },
      { name: "ChromaDB", icon: chromaIcon },
      { name: "Groq LLM", icon: groqIcon },
      { name: "Cloudinary", icon: cloudinaryIcon },
    ],
    images: [goconect1, chatapp2, chatapp3, chatapp4],
    githublink: "https://github.com/ahmadaali5283/chatapp",
    sitelink: "https://chatapp-cu1kq3oa0-ahmad-alis-projects-6fee7d15.vercel.app",
  },
  {
    index: 3,
    title: "CineVerse",
    description: `CineVerse is a full-stack theater management web application designed to provide users with a seamless and interactive movie-booking experience. Built using React on the frontend, Node.js and Express on the backend, and SQL Server for robust database management, the platform is optimized for performance, usability, and scalability.

        Seat and Show Selection: Users can view available shows and select seats in real-time via an intuitive interface.

        User Authentication: Secure login and signup using JWT and bcrypt.

        Movie Search: Easily search for movies by title.

        Top Rated Movies: Browse a dynamically generated list of the highest-rated movies.

        Reviews & Ratings: Authenticated users can leave reviews and rate movies, helping others choose what to watch.

        Newsletter Subscription: Users can subscribe to the newsletter and receive email updates about upcoming movies, promotions, and offers.

        Responsive UI: Mobile-friendly and optimized for various screen sizes for the best viewing experience.`,
    techstack: [
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "SQL Server", icon: sqlserverIcon },
    ],
    images: [cineverse1, cineverse2, cineverse3, cineverse4, cineverse5],
    githublink: "https://github.com/ahmadaali5283/CineVerseProject",
    sitelink: "",
  }
];
