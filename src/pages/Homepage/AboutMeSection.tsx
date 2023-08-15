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
`;

const aboutMeContentStyles = css`
  text-align: center;
  font-weight: 500;
  padding: 0px 128px 0px 128px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  line-height: 1.334;
  text-align: center;
`;

const AboutMeSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className={aboutMeContainerStyles}>
        <SectionTitle>About Me</SectionTitle>
        <h3 className={aboutMeContentStyles}>
          My name is Dewyn Liriano, from the Dominican Republic. I am a highly
          passionate, dependable, self-reliant, and goal-driven person. My keen
          ability is that I'm a fast learner and "learn by doing" kind of
          person. I have experience managing small teams and seeing projects
          from their planning to their implementation.
          <br />
          <br />
          Currently, I'm enrolled in a MSc in Artificial Intelligence in the
          University of Essex Online.
        </h3>
        <Button onClick={toggleModal}>Know a Little Bit More</Button>
      </div>
      {showModal && <WorkExperienceModal onClose={toggleModal} />}
    </>
  );
};

export default AboutMeSection;
