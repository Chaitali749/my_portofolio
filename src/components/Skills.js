import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaMobile, FaDatabase } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
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

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.7;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin: 0;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 600;
    color: #334155;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  width: ${({ width }) => width}%;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Django', level: 65 },
        { name: 'RESTful API', level: 80 },
      ],
    },
    {
      icon: <FaDatabase />,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 65 },
      ],
    },
    {
      icon: <FaMobile />,
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      icon: <FaTools />,
      title: 'Tools & More',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 60 },
        { name: 'CI/CD', level: 65 },
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Skills</SectionTitle>
          <SectionSubtitle>
            Here are the technologies and tools I work with. I'm always eager to learn new skills and
            stay up-to-date with the latest industry trends.
          </SectionSubtitle>
        </motion.div>

        <SkillsContainer>
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCategory
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <CategoryHeader>
                  {category.icon}
                  <h3>{category.title}</h3>
                </CategoryHeader>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillInfo>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </SkillInfo>
                    <ProgressBar>
                      <Progress
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        width={skill.level}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            </motion.div>
          ))}
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
