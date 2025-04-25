import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/buttons/Button';
import { css } from '@emotion/css';
import WorkExperienceModal from '../../components/WorkExperienceModal';

const aboutMeContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  position: relative;
  background-color: #f9f9f9;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${process.env.PUBLIC_URL}/appCurvyLines.png);
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const aboutMeContentStyles = css`
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  padding: 0 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.8;
  color: #333;
  font-size: 18px;
  position: relative;
  z-index: 1;

  strong {
    color: #ff3366;
    font-weight: 600;
  }
`;

const buttonWrapperStyles = css`
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

const AboutMeSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <div className={aboutMeContainerStyles}>
        <SectionTitle>About Me</SectionTitle>
        <h3 className={aboutMeContentStyles}>
          My name is <strong>Dewyn Liriano</strong>, from the Dominican Republic. I am a highly
          passionate, dependable, self-reliant, and goal-driven person. My keen ability is that I'm
          a fast learner and "learn by doing" kind of person. I have experience managing small teams
          and seeing projects from their planning to their implementation.
          <br />
          <br />
          Currently, I'm enrolled in a MSc in Artificial Intelligence in the University of Essex
          Online.
        </h3>
        <div className={buttonWrapperStyles}>
          <Button onClick={toggleModal}>Know a Little Bit More</Button>
        </div>
      </div>
      {showModal && <WorkExperienceModal onClose={toggleModal} />}
    </>
  );
};

export default AboutMeSection;
