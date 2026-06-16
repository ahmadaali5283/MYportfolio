import tailwindIcon from "../assets/tailwind.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodbIcon.svg";
import sqlserverIcon from "../assets/sqlserver.svg";
import fastapiIcon from "../assets/FastAPI.svg";
import googleGeminiIcon from "../assets/gemini-color.svg";
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
      reactIcon,
      nodeIcon,
      expressIcon,
      mongodbIcon,
      fastapiIcon,
      googleGeminiIcon,
      tailwindIcon,
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
    index: 4,
    title: "CineVerse",
    description: `CineVerse is a full-stack theater management web application designed to provide users with a seamless and interactive movie-booking experience. Built using React on the frontend, Node.js and Express on the backend, and SQL Server for robust database management, the platform is optimized for performance, usability, and scalability.

        Seat and Show Selection: Users can view available shows and select seats in real-time via an intuitive interface.

        User Authentication: Secure login, signup using jwt/bcrypt.

        Movie Search: Easily search for movies by title.

        Top Rated Movies: Browse a dynamically generated list of the highest-rated movies.

        Reviews & Ratings: Authenticated users can leave reviews and rate movies, helping others choose what to watch.

        Newsletter Subscription: Users can subscribe to the newsletter and receive email updates about upcoming movies, promotions, and offers.

        Responsive UI: Mobile-friendly and optimized for various screen sizes for the best viewing experience.`,
    techstack: [reactIcon, nodeIcon, expressIcon, sqlserverIcon],
    images: [cineverse1, cineverse2, cineverse3, cineverse4, cineverse5],
    githublink: "https://github.com/ahmadaali5283/CineVerseProject",
    sitelink: "",
  }
];
