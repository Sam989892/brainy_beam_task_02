import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import '../styles/projects.css';
import stockImages from '../stockImages';

export const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Todo List",
      category: "Frontend",
      image: stockImages.todolist,
      description: "A React-based todo list application",
      technologies: ["React", "TypeScript", "CSS"],
      year: "2024",
      githubUrl: "https://github.com/Sam989892/brainy_beam_task_01"
    },
    {
      id: 2,
      title: "Calculator",
      category: "Frontend",
      image: stockImages.calculator,
      description: "A simple calculator application",
      technologies: ["JavaScript", "HTML", "CSS"],
      year: "2024",
      githubUrl: "https://github.com/Sam989892/brainy_beam_task_05"
    },
    {
      id: 3,
      title: "Clothing Brand Website",
      category: "Full Stack",
      image: stockImages.clothing,
      description: "E-commerce platform for a clothing brand",
      technologies: ["React", "Node.js", "MongoDB"],
      year: "2024",
      githubUrl: "https://github.com/Sam989892/Tristana"
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="bentolio">
      <div className="projects-container">
        <Header />
        
        <div className="projects-intro fade-in"
          style={{
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.3s'
          }}>
          <h1>Featured Projects</h1>
          <p>A collection of my recent work in development and design</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card fade-in"
              onClick={() => handleProjectClick(project.githubUrl)}
              style={{
                opacity: isLoaded ? 1 : 0,
                transitionDelay: `${0.2 * (index + 1)}s`,
                cursor: 'pointer'
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <span className="project-category">{project.category}</span>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};