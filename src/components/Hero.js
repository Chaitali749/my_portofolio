import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232565eb' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.6;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  width: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding-top: 60px;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

const Greeting = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #94a3b8;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 580px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    background: rgba(37, 99, 235, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #94a3b8;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(145deg, rgba(37, 99, 235, 0.2), rgba(30, 64, 175, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  animation: morph 8s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  
  @keyframes morph {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    50% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232565eb' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
  
  img {
    width: 90%;
    height: 90%;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    object-fit: cover;
    border: 5px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #94a3b8;
  cursor: pointer;
  z-index: 10;
  
  span {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
  
  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary};
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
`;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Greeting>Hello, I'm</Greeting>
            <Name>Chaitali Joshi</Name>
            <Title>Frontend Developer</Title>
            <Description>
              I'm a passionate frontend developer with expertise in creating beautiful,
              responsive, and user-friendly web applications. I love turning ideas into
              reality through clean and efficient code.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton
                to="contact" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                <HiOutlineMail /> Contact Me
              </PrimaryButton>
              
              <SecondaryButton 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download
              >
                <FaFileDownload /> Download CV
              </SecondaryButton>
            </ButtonGroup>
            
            <SocialLinks>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </SocialLinks>
          </motion.div>
        </HeroText>
        
        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWrapper>
              {/* Replace with your image */}
              <img 
                src="https://via.placeholder.com/500x500" 
                alt="Profile" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x500';
                }}
              />
            </ImageWrapper>
          </motion.div>
        </HeroImage>
      </HeroContent>
      
      <ScrollIndicator 
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
