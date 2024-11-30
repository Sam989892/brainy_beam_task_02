import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import stockImages from '../stockImages';
import '../styles/about.css';
export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'RESTful API', 'OOP'],
    database: ['MongoDB'],
    tools: ['Git', 'VS Code', 'Figma', 'JIRA'],
    soft: ['Problem-Solving', 'Team Collaboration', 'Communication', 'Adaptability']
  };

  return (
    <div className="bentolio">
      <div className="about-container">
        <Header />
        
        <div className="about-content fade-in"
          style={{
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.3s'
          }}>
          
          <motion.div className="about-header">
            <div className="portrait-container">
              <img src={stockImages.portrait} alt="Profile" />
            </div>
            <div className="intro-text">
              <h1>Hi, I'm Saiyed Madni</h1>
              <p>Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div className="about-bio">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with a focus on creating intuitive and efficient web applications. 
              My journey in web development started with a curiosity for building things that make a difference.
              I enjoy tackling complex problems and turning them into simple, beautiful solutions.
            </p>
          </motion.div>

          <motion.div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skill-tags">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 