import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaPlay, FaStar, FaCheck, FaCreditCard, FaUser, FaTimes } from 'react-icons/fa';
import arrowImage from '../assets/arrow.png';
import qrCodeImage from '../assets/qr-sample.png';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #f8f9ff 0%, #fff5f0 50%, #f0f4ff 100%);
  overflow: hidden;
  padding: 140px 0 60px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, transparent, var(--bg-primary));
    z-index: 1;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const Content = styled.div`
  color: #2d3748;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #2d3748;
  letter-spacing: -0.02em;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PlayStoreButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #2d3748;
  background: white;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(45, 55, 72, 0.15);
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d3748;
  font-weight: 500;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #fbbf24;
`;

const VisualSection = styled.div`
  position: relative;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    height: auto;
    min-height: 600px;
    margin-top: 2rem;
  }
`;

const PhoneMockup = styled(motion.div)`
  position: relative;
  width: 380px;
  height: 760px;
  background: #1a1a1a;
  border-radius: 50px;
  padding: 11px;
  box-shadow: 
    0 35px 100px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: #1a1a1a;
    border-radius: 50px 50px 0 0;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #666;
    border-radius: 2px;
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 640px;
    padding: 10px;
    transform: none;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 40px;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: #2d3748;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  background: white;
  padding: 2.2rem 1.25rem 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
`;

const UserSection = styled.div`
  padding: 1.25rem 1.25rem 1rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
`;

const UserAvatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  margin: 0 auto 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  font-weight: 700;
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
`;

const PayingLabel = styled.div`
  font-size: 0.75rem;
  color: #718096;
  margin-bottom: 0.375rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const UserName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.75rem;
`;

const Amount = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 1.25rem;
`;

const NoteInput = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
`;

const InputField = styled.div`
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.875rem;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const CardSection = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid #e2e8f0;
`;

const QRContainer = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const QRCode = styled.div`
  width: 240px;
  height: 120px;
  border-radius: 12px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const QRTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const QRSubtitle = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const ScanButton = styled.button`
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
  }
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active ? '#8b5cf6' : '#e5e7eb'};
`;

const PayButton = styled.button`
  background: linear-gradient(135deg, #60a5fa, #3b82f6);;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.75rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);

  &:hover {
    background: #e55a2b;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
  }
`;

const SuccessPopup = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: -100px;
  background: white;
  border-radius: 20px;
  padding: 1.7rem;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 200px;
  z-index: 10;
`;

const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #48bb78;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.75rem;
  box-shadow: 0 10px 30px rgba(72, 187, 120, 0.3);
`;

const SuccessText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.4;
  
  br {
    display: block;
    content: "";
    margin-top: 0.25rem;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 25px solid white;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
`;

const HandDrawnArrow = styled.img`
  position: absolute;
  top: -90px;
  left: 60%;
  transform: translateX(-50%);
  width: 100px;
  height: 80px;
  z-index: 11;
`;

const UserQRCode = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 8px;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  return (
    <HeroSection id="home">
      <BackgroundPattern />
      
      <Container ref={ref}>
        <Content>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Title variants={itemVariants}>
              Fastest way to make payment anywhere.
            </Title>
            
            <ButtonGroup variants={itemVariants}>
              <PlayStoreButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPlay />
                Play Store
              </PlayStoreButton>
              <RatingContainer>
                <Stars>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Stars>
                <span>4.9/5 — Android</span>
              </RatingContainer>
            </ButtonGroup>
          </motion.div>
        </Content>

        <VisualSection>
          <PhoneMockup
            variants={phoneVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Screen>
              <Header>
                <HeaderTitle>Payment</HeaderTitle>
                <CancelButton>
                  <FaTimes />
                </CancelButton>
              </Header>
              
              <UserSection>
                <UserAvatar>RD</UserAvatar>
                <PayingLabel>PAYING</PayingLabel>
                
                <UserQRCode>
                  <img src={qrCodeImage} alt="Payment QR Code" />
                </UserQRCode>
                <UserName>Robert</UserName>
                <Amount>£50.00</Amount>
              </UserSection>
              
              <NoteInput>
                <InputField>Add a note</InputField>
              </NoteInput>
              
              <CardSection>
                <QRContainer>
                  <ScanButton>Send Money</ScanButton>
                </QRContainer>
              </CardSection>
              
              
            
            </Screen>
          </PhoneMockup>

          <SuccessPopup
            variants={popupVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <HandDrawnArrow src={arrowImage} alt="Arrow" />
            <SuccessIcon>
              <FaCheck />
            </SuccessIcon>
            <SuccessText>
              £50.00 sent<br />
              Successfully!
            </SuccessText>
          </SuccessPopup>
        </VisualSection>
      </Container>
    </HeroSection>
  );
};

export default Hero; 
