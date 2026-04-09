import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("BIlkXZ2rZ792Dl3wK");

const ContactSection = styled.section`
  padding: 120px 0 100px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.02) 0%, transparent 50%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  background: #2d3748;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  justify-content: center;
  min-width: 0;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  position: relative;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  transition: all 0.3s ease;
  z-index: 1;
  min-width: 0;

  &:hover {
    transform: translateX(8px);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ContactIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 1.75rem;
  position: relative;
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 2px solid rgba(96, 165, 250, 0.2);
    border-radius: 50%;
    animation: pulse 3s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  ${ContactItem}:hover & {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(96, 165, 250, 0.4);
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
  position: relative;
`;

const ContactText = styled.p`
  color: #64748b;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
`;

const ContactForm = styled(motion.form)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  padding: 2.5rem;
  border-radius: 30px;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  color: #1e293b;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  font-family: inherit;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: #60a5fa;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Notification = styled(motion.div)`
  position: relative;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  min-width: 300px;

  &.success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  }

  &.error {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  }
`;

const NotificationIcon = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const NotificationText = styled.span`
  flex-grow: 1;
  font-size: 0.9rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    postcode: ''
  });

  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name || !formData.email || !formData.businessName || !formData.postcode) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fill in all fields.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        business_name: formData.businessName,
        postcode: formData.postcode,
        to_name: 'Knoxpay Team'
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_8bda10q',
        'template_y5rgdhn',
        templateParams,
        'BIlkXZ2rZ792Dl3wK'
      );

      console.log('EmailJS Success:', result);
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        businessName: '',
        postcode: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setNotification({
        show: true,
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification({ show: false, type: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      text: 'Prashant.atolia@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      text: '07424706364'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      text: 'United Kingdom'
    }
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <AnimatePresence>
        {notification.show && (
          <NotificationContainer>
            <Notification 
              className={notification.type}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <NotificationIcon>
                {notification.type === 'success' ? <FaCheck /> : <FaTimes />}
              </NotificationIcon>
              <NotificationText>{notification.message}</NotificationText>
              <CloseButton onClick={closeNotification}>
                <FaTimes />
              </CloseButton>
            </Notification>
          </NotificationContainer>
        )}
      </AnimatePresence>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader variants={itemVariants}>
            <SectionTitle>Contact Us</SectionTitle>
            <SectionSubtitle>
              Ready to revolutionize your payments? Get in touch with us today and join the future of business transactions.
            </SectionSubtitle>
          </SectionHeader>

          <ContactContent>
            <ContactInfo>
              {contactInfo.map((info, index) => (
                <ContactItem
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <ContactIcon>
                    <info.icon />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactTitle>{info.title}</ContactTitle>
                    <ContactText>{info.text}</ContactText>
                  </ContactDetails>
                </ContactItem>
              ))}
            </ContactInfo>

            <ContactForm variants={cardVariants} onSubmit={handleSubmit}>
              <FormTitle>Get in Touch</FormTitle>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="businessName">Business Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="businessName" 
                  name="businessName" 
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your Business Name" 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="postcode">Postcode</FormLabel>
                <FormInput 
                  type="text" 
                  id="postcode" 
                  name="postcode" 
                  value={formData.postcode}
                  onChange={handleInputChange}
                  placeholder="Your Postcode" 
                  required 
                />
              </FormGroup>
              <SubmitButton 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </SubmitButton>
            </ContactForm>
          </ContactContent>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 