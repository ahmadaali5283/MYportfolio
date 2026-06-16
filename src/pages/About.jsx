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
            I'm a Full-Stack & AI Engineer building fast,
            scalable web applications with intelligent features at their core.
            My stack spans TypeScript, React/Next.js, and Node.js/Express
            on the full-stack side, with Python/FastAPI, LangChain,
            and LLM integrations powering the AI layer.
          </p>
          <p>
            Currently bridging web development and AI by building production
            LLM integrations with LangChain and designing autonomous workflows
            with n8n. Whether architecting responsive frontends with Tailwind
            or managing data across MongoDB and PostgreSQL,
            I focus on clean, scalable systems that deliver real results.
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
