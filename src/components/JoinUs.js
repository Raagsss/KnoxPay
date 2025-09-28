import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaCheckCircle, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const JoinUsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(29, 78, 216, 0.02) 0%, transparent 50%);
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  font-weight: 400;
`;


const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  width: 60%;
  text-align: center;
  line-height: 1.6;
  margin: 0 auto;
  margin-bottom: 3.3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Required = styled.span`
  color: #ef4444;
  margin-left: 0.25rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 3rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background-color: white;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%233b82f6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #9ca3af;
    background-color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
  transition: all 0.3s ease;

  &:has(input:checked) {
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #3b82f6;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.5;
  cursor: pointer;
  flex: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;

  &:has(input:checked) {
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    color: #3b82f6;
    border-color: #9ca3af;
    background: white;
  }
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #3b82f6;
  cursor: pointer;
  appearance: none;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;

  &:checked {
    background: #3b82f6;
    border-color: #3b82f6;
    position: relative;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border-color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  margin-top: 2rem;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SuccessText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
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

const JoinUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    postcode: '',
    email: '',
    phone: '',
    readyToPartner: false,
    businessCategory: '',
    monthlyTurnover: '',
    additionalInfo: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const serviceId = 'service_8bda10q';
      const templateId = 'template_0gxn669';
      const publicKey = 'BIlkXZ2rZ792Dl3wK';

      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        business_name: formData.businessName,
        postcode: formData.postcode,
        phone: formData.phone,
        ready_to_partner: formData.readyToPartner ? 'Yes' : 'No',
        business_category: formData.businessCategory,
        monthly_turnover: formData.monthlyTurnover,
        additional_info: formData.additionalInfo,
        consent: formData.consent ? 'Yes' : 'No',
        to_name: 'Knoxpay Team'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Thanks! You\'re on our Founders\' Circle list. We\'ll be in touch shortly with next steps and your early-partner perks.'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        postcode: '',
        email: '',
        phone: '',
        readyToPartner: false,
        businessCategory: '',
        monthlyTurnover: '',
        additionalInfo: '',
        consent: false
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was an error submitting the form. Please try again.'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <JoinUsSection id="join-us" ref={ref}>
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
          <Header variants={itemVariants}>
            <Title>Join the Founders' Circle</Title>
            <Subtitle>
              We're not live yet — but we're building something game-changing. That's why we're looking for forward-thinking SMEs to join our very first pilot batch, The Founders' Circle. By stepping in early, you're not just a customer — you're a partner helping us shape the future of payments.
            </Subtitle>
          </Header>


          <FormContainer variants={itemVariants}>
            <FormTitle>Join the Founders' Circle – Knoxpay</FormTitle>
            <FormDescription>
              Register your interest to secure an exclusive early-partner spot. Limited places. We'll contact you with next steps.
            </FormDescription>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="fullName">
                  Full name <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="businessName">
                  Business name <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="postcode">
                  Postcode <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">
                  Email <Required>*</Required>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  id="readyToPartner"
                  name="readyToPartner"
                  checked={formData.readyToPartner}
                  onChange={handleInputChange}
                  required
                />
                <CheckboxLabel htmlFor="readyToPartner">
                  I'm ready to become a Founding Partner <Required>*</Required>
                </CheckboxLabel>
              </CheckboxGroup>

              <FormGroup>
                <Label htmlFor="businessCategory">Business category</Label>
                <Select
                  id="businessCategory"
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleInputChange}
                >
                  <option value="">Select category</option>
                  <option value="cafe-restaurant">Café/Restaurant</option>
                  <option value="retail">Retail</option>
                  <option value="salon-personal-care">Salon/Personal care</option>
                  <option value="trades-services">Trades/Services</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Estimated monthly card turnover</Label>
                <RadioGroup>
                  <RadioOption>
                    <Radio
                      type="radio"
                      name="monthlyTurnover"
                      value="< £5k"
                      checked={formData.monthlyTurnover === '< £5k'}
                      onChange={handleInputChange}
                    />
                    <span>&lt; £5k</span>
                  </RadioOption>
                  <RadioOption>
                    <Radio
                      type="radio"
                      name="monthlyTurnover"
                      value="£5k–£20k"
                      checked={formData.monthlyTurnover === '£5k–£20k'}
                      onChange={handleInputChange}
                    />
                    <span>£5k–£20k</span>
                  </RadioOption>
                  <RadioOption>
                    <Radio
                      type="radio"
                      name="monthlyTurnover"
                      value="£20k–£50k"
                      checked={formData.monthlyTurnover === '£20k–£50k'}
                      onChange={handleInputChange}
                    />
                    <span>£20k–£50k</span>
                  </RadioOption>
                  <RadioOption>
                    <Radio
                      type="radio"
                      name="monthlyTurnover"
                      value="£50k+"
                      checked={formData.monthlyTurnover === '£50k+'}
                      onChange={handleInputChange}
                    />
                    <span>£50k+</span>
                  </RadioOption>
                </RadioGroup>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="additionalInfo">Anything we should know?</Label>
                <TextArea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your business and how Knoxpay could help..."
                />
              </FormGroup>

              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                <CheckboxLabel htmlFor="consent">
                  I agree to Knoxpay contacting me about the pilot and understand my data will be handled per the Privacy Policy. <Required>*</Required>
                </CheckboxLabel>
              </CheckboxGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Become a Founding Partner'}
              </SubmitButton>
            </Form>
          </FormContainer>
        </motion.div>
      </Container>
    </JoinUsSection>
  );
};

export default JoinUs;
