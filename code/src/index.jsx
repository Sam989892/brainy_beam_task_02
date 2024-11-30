import React, { useState, useEffect } from "react";
import "./style.css";
import arrow from './poto/arrow.svg';
import circle from './poto/circle.svg';
import flower from './poto/flower.svg';
import border1 from './poto/border1.svg';
import border2 from './poto/border2.svg';
import portrait from './poto/portrait.jpg';
import { Link } from 'react-router-dom';
import stockImages from './stockImages';
import { Header } from "./components/Header";

export const Bentolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="bentolio">
      <div className="div">
        {/* Portrait with simple fade */}
        <div className={`PORTRAIT portrait-fade ${isLoaded ? 'visible' : ''}`}>
          <img 
            src={stockImages.portrait} 
            alt=" Portrait" 
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }} 
          />
        </div>

        {/* Other sections with staggered fade-ins */}
        <div className={`fade-in-right ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '1.0s'}}>
          <div className="SOCIALS">
            <div className="LINKS">
              <a 
                href="https://www.instagram.com/username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-wrapper"
              >
                INSTAGRAM
              </a>

              <a 
                href="https://twitter.com/username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-wrapper"
              >
                TWITTER
              </a>

              <a 
                href="https://www.linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-wrapper"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        <div className={`fade-in-up ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '0.8s'}}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="CONTACT">
              <div className="text-wrapper-2">Contact me</div>
              <div className="TOP-BAR">
                <div className="have-some-questions">
                  Have some
                  <br />
                  questions?
                </div>
                <img className="ARROW" alt="Arrow" src={stockImages.arrow} />
              </div>
            </div>
          </Link>
        </div>

        <div className={`fade-in-left ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '0.6s'}}>
          <div className="ABOUT">
            <p className="p">
              Saiyed Madni is a skilled developer passionate about creating intuitive digital experiences. With expertise in web development, app design, and machine learning, Sam blends technology with creativity to deliver impactful projects.
            </p>
            <img className="CIRCLE-ICON" alt="Profile" src={stockImages.circle} />
          </div>
        </div>

        <div className={`fade-in-right ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '1.2s'}}>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="WORK">
              <div className="project-item">
                <div className="project-header">
                  <span className="project-title"></span>
                  <img className="arrow-icon" src={stockImages.arrow} alt="arrow" />
                </div>
                <div className="project-thumbnail">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                    alt="Musea Project" 
                  />
                </div>
                <div className="divider"></div>
              </div>
              <div className="ITEM-1">
                <div className="text-wrapper-3">To-do List</div>
              </div>
              <div className="ITEM-2">
                <img className="BORDER" alt="Verve Project" src={stockImages.border1} />
                <div className="text-wrapper-3">Calculator</div>
              </div>
              <div className="ITEM-3">
                <img className="BORDER" alt="Elara Project" src={stockImages.border2} />
                <div className="text-wrapper-3">Clothing Brand Webstie</div>
              </div>
              <div className="ITEM-4">
                <div className="text-wrapper-3">Projects</div>
              </div>
            </div>
          </Link>
        </div>

        <div className={`fade-in-left ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '0.4s'}}>
          <div className="SLOGAN-INTRO">
            <p className="artist-redefining">
              <span className="span">Developer Crafting </span>
              <span className="text-wrapper-4">Modern Solutions</span>
              <span className="span"> with Cutting-Edge Technology</span>
            </p>
            <img className="FLOWER-ICON" alt="Decorative Flower" src={stockImages.flower} />
          </div>
        </div>

        <div className={`fade-in ${isLoaded ? 'visible' : ''}`} 
             style={{transitionDelay: '1.4s'}}>
              <Header />
        </div>
      </div>
    </div>
  );
};
