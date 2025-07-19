import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

const FooterSection = styled.footer`
  background: #0f172a;
  color: #e2e8f0;
  padding: 60px 0 30px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const FooterLinks = styled.div`
  h3 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: #94a3b8;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
        
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          transform: translateX(5px);
        }
      }
    }
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      justify-content: center;
      text-align: center;
    }
    
    .icon {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 1rem;
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }
    
    .text {
      color: #94a3b8;
      line-height: 1.6;
      
      a {
        color: #94a3b8;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 0.9rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection id="footer">
      <Container>
        <FooterContent>
          <FooterLogo>
            <h2>Your<span>Name</span></h2>
            <p>
              A passionate developer creating beautiful and functional web applications.
              Let's build something amazing together!
            </p>
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
              <a href="mailto:your.email@example.com">
                <FaEnvelope />
              </a>
            </SocialLinks>
          </FooterLogo>
          
          <FooterLinks>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="skills" 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </FooterLinks>
          
          <ContactInfo>
            <h3>Contact Info</h3>
            <div className="contact-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <div className="text">
                Your City, Country
              </div>
            </div>
            <div className="contact-item">
              <span className="icon"><FaEnvelope /></span>
              <div className="text">
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon"><FaPhone /></span>
              <div className="text">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>
          </ContactInfo>
        </FooterContent>
        
        <Copyright>
          <p>
            &copy; {currentYear} Your Name. All Rights Reserved. 
            <br />
            Built with <FaCode style={{ color: '#ef4444' }} /> by You
          </p>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
