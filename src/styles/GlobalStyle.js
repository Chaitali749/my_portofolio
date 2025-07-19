import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset and Base Styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.dark};
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  h1 {
    font-size: 3.5rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 60%;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      left: 50%;
      transform: translateX(-50%);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  /* Lists */
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Buttons */
  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.default};
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    }
  }

  /* Layout */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 6rem 0;
    position: relative;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 4rem 0;
    }
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      margin: 1rem auto 0;
    }
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
