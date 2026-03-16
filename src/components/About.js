import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaLaptopCode, FaTools } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1e293b;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    bottom: -10px;
    left: 20%;
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 1.5rem;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  
  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    @media (max-width: 992px) {
      justify-content: center;
    }
    
    strong {
      min-width: 120px;
      display: inline-block;
      color: #334155;
    }
    
    span {
      color: #64748b;
    }
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const SkillsTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SkillItem = styled.span`
  background: #e2e8f0;
  color: #334155;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'Git', 'Responsive Design', 'UI/UX'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>
        
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutImage>
              <img 
                src="https://via.placeholder.com/500x600" 
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x600';
                }}
              />
            </AboutImage>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AboutText>
              <h3>I'm a Passionate Web Developer</h3>
              <p>
                Hello! I'm [Your Name], a dedicated web developer with a passion for creating beautiful, 
                functional, and user-friendly websites. With [X] years of experience in the field, I've 
                had the privilege of working on a variety of projects that have honed my skills in both 
                front-end and back-end development.
              </p>
              
              <InfoList>
                <li>
                  <strong>Name:</strong>
                  <span>Chaitali Joshi</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>chaitalijoshi130@gmail.com</span>
                </li>
                <li>
                  <strong>Experience:</strong>
                  <span>Fresher But Good at Programming</span>
                </li>
                <li>
                  <strong>Location:</strong>
                  <span>Bengaluru,Karnataka,India</span>
                </li>
              </InfoList>
              
              <SkillsContainer>
                <SkillsTitle>
                  <FaLaptopCode /> My Skills
                </SkillsTitle>
                <SkillsList>
                  {skills.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillsContainer>
              
              <SkillsContainer>
                <SkillsTitle>
                  <FaTools /> Tools & Technologies
                </SkillsTitle>
                <SkillsList>
                  <SkillItem>VS Code</SkillItem>
                  <SkillItem>GitHub</SkillItem>
                  <SkillItem>Figma</SkillItem>
                  <SkillItem>Postman</SkillItem>
                  <SkillItem>Terminal</SkillItem>
                </SkillsList>
              </SkillsContainer>
            </AboutText>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
