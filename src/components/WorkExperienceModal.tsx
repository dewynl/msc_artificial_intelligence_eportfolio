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
  gap: 12px;
`;

const workExperienceWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0;
`;

const jobTtile = css`
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
`;

const companyWrapper = css`
  margin: 0;
`;

const periodWrapper = css`
  font-weight: 500;
`;

const taskAndAchievementsWrapper = css`
  color: rgb(255, 51, 102);
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 8px 0px 0px 0px;

`;

const WorkExperience = ({
	jobTitle,
	company,
	period,
	achievements
}: WorkExperienceProps) => {
	return (
		<div className={workExperienceWrapper}>
			<h6 className={jobTtile}>
				{jobTitle}
			</h6>
			<span className={companyWrapper}>
				{company}
			</span>
			<span className={periodWrapper}>
				{period}
			</span>
			<div>
				<p className={taskAndAchievementsWrapper}>
					<i>Tasks/Achievements</i>
				</p>
				<ul style={{ margin: 0 }}>
					{achievements.map((achievement, index) =>
						<li key={index}>
							{achievement}
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

const WorkExperienceModal = ({ onClose }: WorkExperienceModalProps) => {
	return (
		<Modal onClose={onClose} title="Work Experience">
			<div className={modalContentWrapper}>
				{workExperience.map((experience, index) =>
					<WorkExperience
						key={index}
						jobTitle={experience.title}
						company={experience.company}
						period={experience.employmentTime}
						achievements={experience.tasks}
					/>
				)}
			</div>
		</Modal>
	);
};

export default WorkExperienceModal;
