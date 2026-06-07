import React from "react";
import "./About.css";

const skills = [
  "React / Next.js",
  "Node.js / Express",
  "Python / FastAPI",
  "TypeScript",
  "MongoDB / PostgreSQL",
  "Tailwind CSS",
  "AI / LLM Integration / RAG",
  "AI Automation / n8n",
];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">
          Crafting digital experiences <br />
          <span className="about-title-accent">with purpose.</span>
        </h1>
      </div>

      <div className="about-grid">
        <div className="about-text-col">
          <p>
            I'm a Full-Stack Developer focused on building fast, scalable web
            applications and incorporating intelligent automation into modern
            workflows. My core stack centers around TypeScript, React/Next.js,
            and Node.js/Express, alongside Python/FastAPI for backend services
            and data layers.
          </p>
          <p>
            Currently, I’m bridging the gap between web development and AI by
            implementing practical LLM integrations and building autonomous
            workflows with n8n. Whether designing responsive frontends with
            Tailwind or managing data across MongoDB and PostgreSQL, I focus on
            clean architecture and reliable execution.
          </p>
        </div>

        <div className="about-skills-col">
          <div className="skills-card">
            <div className="skills-card-title">Core Skills</div>
            <div className="core-skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="core-skill-card">
                  <div className="core-skill-dot"></div>
                  <span className="core-skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
