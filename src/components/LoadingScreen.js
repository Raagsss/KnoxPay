import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaShieldAlt, FaBolt, FaPoundSign } from 'react-icons/fa';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
`;

const Orb1 = styled(Orb)`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  top: -50px;
  right: -50px;
`;

const Orb2 = styled(Orb)`
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  bottom: -30px;
  left: -30px;
`;

const Orb3 = styled(Orb)`
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const LoadingText = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  z-index: 10;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  z-index: 10;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8));
  border-radius: 2px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  z-index: 10;
`;

const IconWrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Icon = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <BackgroundOrbs>
        <Orb1
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Orb2
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <Orb3
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </BackgroundOrbs>

      <Logo
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Knoxpay
      </Logo>

      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Loading amazing payment solutions...
      </LoadingText>

      <ProgressBar>
        <ProgressFill
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </ProgressBar>

      <IconContainer>
        <IconWrapper
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Icon>
            <FaShieldAlt />
          </Icon>
        </IconWrapper>
        <IconWrapper
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Icon>
            <FaBolt />
          </Icon>
        </IconWrapper>
        <IconWrapper
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Icon>
            <FaPoundSign />
          </Icon>
        </IconWrapper>
      </IconContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen; 