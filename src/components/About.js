import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaRocket, FaShieldAlt, FaBolt, FaHandshake, FaBuilding, FaUniversity, FaLandmark, FaRocket as FaEagle, FaHandshake as FaFSB, FaCheckCircle, FaComments, FaClock, FaLock, FaTimes, FaChartLine, FaGlobe, FaUsers, FaCreditCard, FaMobile, FaLock as FaSecurity } from 'react-icons/fa';

// Import images from assets
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';

const AboutSection = styled.section`
  padding: 80px 0 120px;
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
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(29, 78, 216, 0.02) 0%, transparent 50%);
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
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  background: #2d3748;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeroText = styled.div`
  color: #334155;
`;

const HeroTitle = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 0.4rem;
  align-items: flex-start;
  padding-left: 10rem;

  @media (max-width: 768px) {
    gap: 2rem;
    padding-left: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 2rem;
  position: relative;
  padding: 0.5rem 0;

  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1rem;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
    transform: translateY(-50%);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  min-width: 120px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  ${StatItem}:hover &::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    min-width: 100px;
  }
`;

const StatLabel = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  padding: 0.5rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
    transition: width 0.4s ease;
  }

  ${StatItem}:hover &::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const FeaturesSection = styled.div`
  margin-top: 2rem;
`;

const FeaturesTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
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

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
`;

const PartnersSection = styled.div`
  margin-top: 4rem;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const PartnersTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const PartnersSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const PartnersCarousel = styled.div`
  display: flex;
  gap: 3rem;
  animation: scroll 30s linear infinite;
  width: max-content;
  padding: 1rem 0;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const PartnersRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const PartnerCard = styled(motion.div)`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  }
`;

const PartnerIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const PartnerName = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
  text-align: left;
`;

const About = () => {
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
        staggerChildren: 0.2,
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

  const partners = [
    { name: 'Furnace Incubator', image: pic4, fallback: 'FI' },
    { name: 'NatWest Accelerator', image: pic1, fallback: 'NW' },
    { name: 'Wakefield Council', image: pic5, fallback: 'WC' },
    { name: 'Barclays Eagle Labs', image: pic3, fallback: 'BE' },
    { name: 'Federation of Small Businesses (FSB)', image: pic2, fallback: 'FSB' },
  ];

  const features = [
    {
      title: 'Zero Transaction Fees',
      description: 'Say goodbye to hefty transaction fees. Keep more money in your pocket with our no-fee payment platform.',
      icon: FaCreditCard,
    },
    {
      title: 'Instant Transfers',
      description: 'Real-time processing with instant confirmations. Your money moves as fast as your business needs.',
      icon: FaBolt,
    },
    {
      title: 'Bank-Grade Security',
      description: 'Built with enterprise-level security and fraud protection for complete peace of mind.',
      icon: FaSecurity,
    },
    {
      title: 'Open Banking Powered',
      description: 'Direct bank-to-bank transfers using cutting-edge Open Banking technology for maximum efficiency.',
      icon: FaShieldAlt,
    },
    {
      title: '24/7 Availability',
      description: 'Process payments anytime, anywhere. No more waiting for business hours or bank holidays.',
      icon: FaClock,
    },
    {
      title: 'UK Regulated',
      description: 'Fully compliant with UK financial regulations. Your trust and security are our top priorities.',
      icon: FaHandshake,
    },
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader variants={itemVariants}>
            <SectionTitle>About Knoxpay</SectionTitle>
            <SectionSubtitle>
              Revolutionizing payments for small businesses with Open Banking technology
            </SectionSubtitle>
          </SectionHeader>

          <AboutContent>
            <HeroSection>
              <HeroText variants={itemVariants}>
                <HeroTitle>Payments shouldn't be complicated, expensive, or slow</HeroTitle>
                <HeroDescription>
                  At Knoxpay, we're building a payment initiation platform powered by Open Banking — helping small businesses send and receive money directly from their bank accounts without relying on card networks or outdated systems.
                </HeroDescription>
                <HeroDescription>
                  Founded in the UK, Knoxpay has been shaped and supported by a strong network of partners and programmes. We're not just building technology — we're building trust, giving small business owners the financial tools they deserve.
                </HeroDescription>
              </HeroText>

              <motion.div variants={itemVariants}>
                <StatsGrid>
                  <StatItem variants={cardVariants} whileHover={{ y: -10 }}>
                    <StatNumber>0%</StatNumber>
                    <StatLabel>Transaction Fees</StatLabel>
                    
                  </StatItem>
                  <StatItem variants={cardVariants} whileHover={{ y: -10 }}>
                    <StatNumber>24/7</StatNumber>
                    <StatLabel>Availability</StatLabel>
                    
                  </StatItem>
                  <StatItem variants={cardVariants} whileHover={{ y: -10 }}>
                    <StatNumber>UK</StatNumber>
                    <StatLabel>Based & Regulated</StatLabel>
                    
                  </StatItem>
                </StatsGrid>
              </motion.div>
            </HeroSection>

            <FeaturesSection>
              <FeaturesTitle variants={itemVariants}>Why Choose Knoxpay?</FeaturesTitle>
              <FeaturesGrid>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FeatureIcon>
                      <feature.icon />
                    </FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureCard>
                ))}
              </FeaturesGrid>
            </FeaturesSection>

            <PartnersSection>
              <PartnersTitle variants={itemVariants}>Supported By</PartnersTitle>
              <PartnersSubtitle variants={itemVariants}>
                We're proud to be supported by a network of leading organisations that share our vision for empowering small businesses
              </PartnersSubtitle>
              
              <PartnersCarousel>
                <PartnersRow>
                  {partners.map((partner, index) => (
                    <PartnerCard
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.03 }}
                    >
                      <PartnerIcon>
                        <img 
                          src={partner.image} 
                          alt={partner.name} 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <span style={{ display: 'none' }}>{partner.fallback}</span>
                      </PartnerIcon>
                      <PartnerName>{partner.name}</PartnerName>
                    </PartnerCard>
                  ))}
                </PartnersRow>
                <PartnersRow>
                  {partners.map((partner, index) => (
                    <PartnerCard
                      key={`duplicate-${index}`}
                      variants={cardVariants}
                      whileHover={{ scale: 1.03 }}
                    >
                      <PartnerIcon>
                        <img 
                          src={partner.image} 
                          alt={partner.name} 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <span style={{ display: 'none' }}>{partner.fallback}</span>
                      </PartnerIcon>
                      <PartnerName>{partner.name}</PartnerName>
                    </PartnerCard>
                  ))}
                </PartnersRow>
              </PartnersCarousel>
            </PartnersSection>
          </AboutContent>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 