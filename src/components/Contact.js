import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  .icon {
    background: ${({ theme }) => theme.colors.primary}15;
    color: ${({ theme }) => theme.colors.primary};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      font-size: 1.1rem;
      color: #334155;
      margin-bottom: 0.5rem;
    }
    
    span, a {
      color: #64748b;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    a {
      display: block;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f1f5f9;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const ContactForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #334155;
      font-weight: 500;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 1rem;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
      }
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }
  
  .submit-btn {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    &:disabled {
      background: #94a3b8;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
  
  .success-message {
    color: #10b981;
    margin-top: 1rem;
    font-weight: 500;
  }
  
  .error-message {
    color: #ef4444;
    margin-top: 1rem;
    font-weight: 500;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your EmailJS service ID, template ID, and public key
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result);
        setSubmitStatus({ success: true, message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSubmitStatus({ 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me using the form below or through any of the contact methods.
          </SectionSubtitle>
        </motion.div>

        <ContactContainer>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo>
              <h3>Contact Information</h3>
              <p>
                I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <InfoItem>
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <span>Your City, Country</span>
                </div>
              </InfoItem>
              
              <InfoItem>
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>
              </InfoItem>
              
              <InfoItem>
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </InfoItem>
              
              <SocialLinks>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </SocialLinks>
            </ContactInfo>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus.message && (
                <div className={submitStatus.success ? 'success-message' : 'error-message'}>
                  {submitStatus.message}
                </div>
              )}
            </ContactForm>
          </motion.div>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
