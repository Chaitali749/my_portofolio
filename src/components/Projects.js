import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const ProjectsSection = styled.section`
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
  margin-bottom: 1rem;
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

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#64748b')};
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.primary : '#e2e8f0')};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme, active }) => (active ? theme.colors.primary : 'rgba(37, 99, 235, 0.1)')};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ active, theme }) => (active ? 'white' : theme.colors.primary)};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .project-image {
      transform: scale(1.05);
    }
    
    .project-links {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    
    a {
      color: white;
      background: rgba(255, 255, 255, 0.1);
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        transform: translateY(-3px);
      }
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
    color: #1e293b;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  
  span {
    background: #e2e8f0;
    color: #475569;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#', 
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality and real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecast using a weather API.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', 'API', 'CSS3'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'Find recipes based on ingredients you have at home with nutritional information.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'API', 'Styled Components'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A blogging platform with rich text editing and user comments functionality.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Styled Components', 'Framer Motion'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
  ];
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Work</SectionTitle>
          <SectionSubtitle>
            Here are some of my recent projects. Each project represents a unique challenge and learning opportunity.
          </SectionSubtitle>
        </motion.div>
        
        <Filters>
          {categories.map((category, index) => (
            <FilterButton
              key={index}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </Filters>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400';
                  }}
                />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechList>
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </TechList>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
