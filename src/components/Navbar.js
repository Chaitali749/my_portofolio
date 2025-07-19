import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ scrollNav, theme }) => 
    scrollNav ? 'rgba(30, 41, 59, 0.95)' : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  box-shadow: ${({ scrollNav }) => 
    scrollNav ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home" smooth={true} duration={500} onClick={toggleHome}>
            Portfolio
          </NavLogo>
          
          <MobileIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          
          <NavMenu isOpen={isOpen}>
            <NavItem>
              <NavLinks 
                to="home" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="about" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="skills" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Skills
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="projects" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="contact" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          
          <NavBtn>
            <NavBtnLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
            >
              Let's Talk
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(30, 41, 59, 0.95)',
          zIndex: 9,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          transition: '0.3s ease-in-out',
        }}>
          <NavLinks 
            to="home" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              padding: '1.5rem',
              fontSize: '1.5rem',
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            onClick={toggleMenu}
          >
            Home
          </NavLinks>
          
          <NavLinks 
            to="about" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              padding: '1.5rem',
              fontSize: '1.5rem',
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            onClick={toggleMenu}
          >
            About
          </NavLinks>
          
          <NavLinks 
            to="skills" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              padding: '1.5rem',
              fontSize: '1.5rem',
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            onClick={toggleMenu}
          >
            Skills
          </NavLinks>
          
          <NavLinks 
            to="projects" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              padding: '1.5rem',
              fontSize: '1.5rem',
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            onClick={toggleMenu}
          >
            Projects
          </NavLinks>
          
          <NavLinks 
            to="contact" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              padding: '1.5rem',
              fontSize: '1.5rem',
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            onClick={toggleMenu}
          >
            Contact
          </NavLinks>
          
          <NavBtnLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
            style={{
              marginTop: '1rem',
              fontSize: '1.2rem',
              padding: '0.8rem 2rem',
            }}
            onClick={toggleMenu}
          >
            Let's Talk
          </NavBtnLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
