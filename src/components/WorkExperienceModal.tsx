import React from 'react';
import Modal from './Modal';
import { css } from '@emotion/css';

import { workExperience } from '../data/static-data';

interface WorkExperienceModalProps {
  onClose: () => void;
}

interface WorkExperienceProps {
  jobTitle: string;
  company: string;
  period: string;
  achievements: string[];
}

const modalContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const workExperienceWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const jobTtile = css`
  margin: 0 0 8px 0;
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  text-transform: uppercase;
  font-weight: 700;
`;

const companyWrapper = css`
  margin: 0 0 4px 0;
  font-size: 16px;
  color: #ff3366;
  font-weight: 500;
`;

const periodWrapper = css`
  font-weight: 500;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const taskAndAchievementsWrapper = css`
  color: #333;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin: 16px 0 8px 0;
  border-bottom: 2px solid #ececec;
  padding-bottom: 6px;
  display: inline-block;
`;

const achievementsList = css`
  margin: 0;
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const WorkExperience = ({ jobTitle, company, period, achievements }: WorkExperienceProps) => {
  return (
    <div className={workExperienceWrapper}>
      <h6 className={jobTtile}>{jobTitle}</h6>
      <span className={companyWrapper}>{company}</span>
      <span className={periodWrapper}>{period}</span>
      <div>
        <p className={taskAndAchievementsWrapper}>
          <i>Tasks/Achievements</i>
        </p>
        <ul className={achievementsList}>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const WorkExperienceModal = ({ onClose }: WorkExperienceModalProps) => {
  return (
    <Modal onClose={onClose} title="Work Experience">
      <div className={modalContentWrapper}>
        {workExperience.map((experience, index) => (
          <WorkExperience
            key={index}
            jobTitle={experience.title}
            company={experience.company}
            period={experience.employmentTime}
            achievements={experience.tasks}
          />
        ))}
      </div>
    </Modal>
  );
};

export default WorkExperienceModal;
