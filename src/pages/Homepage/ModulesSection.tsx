import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { css, cx } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { modulesPageData } from '../../data/static-data';

interface ModuleCardProps {
	moduleId: string;
	coverImage: string;
	name: string;
	status: 'todo' | 'in progress' | 'done';
	onClick: (moduleId: string) => void;
}

const moduleCardWrapper = css`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 36px;
  border: 1px solid lightgray;
  cursor: pointer;

  :hover {
    background-color: #F5F5F5;
  }
`;

const coverImageStyles = css`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 35px 35px 0px 0px;
  svg {
    width: 300px;
    height: 300px;
  }
`;

const moduleCardDescription = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: start;
  padding: 8px;
`;

const moduleName = css`
  font-size: 18px;
  font-weight: 700;
`;

const StatusBar = ({ status }: { status: string }) => {
	const statusRef = useRef<HTMLSpanElement>(null);

	const statusDone = '#A0C49D';
	const statusInProgress = '#F0B86E';
	const statusTodo = '#ED7B7B';

	const moduleStatusSpan = css`
    text-transform: capitalize;
    width: 120px;
    border-radius: 12px;
    text-align: center;
    color: white;
    font-weight: 500;
  `;

	let backgroundColor = undefined;
	switch (status) {
		case 'to do':
			backgroundColor = statusTodo;
			break;
		case 'in progress':
			backgroundColor = statusInProgress;
			break;
		case 'done':
			backgroundColor = statusDone;
			break;
		default:
			backgroundColor = 'lightgray';
	}

	const spanColorStyle = css`
    background-color: ${backgroundColor};
  `;

	return (
		<span ref={statusRef} className={cx(spanColorStyle, moduleStatusSpan)}>
			{status}
		</span>
	);
};

const ModuleCard = ({
	moduleId,
	coverImage,
	name,
	status,
	onClick
}: ModuleCardProps) => {
	const backgroundCover = css`
    background: url('${coverImage}') ;
  `;

	return (
		<div className={moduleCardWrapper} onClick={() => onClick(moduleId)}>
			<div className={cx(backgroundCover, coverImageStyles)} />
			<div className={moduleCardDescription}>
				<span className={moduleName}>
					{name}
				</span>
				<StatusBar status={status} />
			</div>
		</div>
	);
};

const modulesSectionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;  
`;

const moduleCardsWrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

const ModulesSection = () => {
	const navigate = useNavigate();
	const handleModuleCardClick = (moduleId: string) => {
		navigate(`/module/${moduleId}`);
	};

	return (
		<div className={modulesSectionWrapper}>
			<div>
				<SectionTitle>Modules</SectionTitle>
			</div>
			<div className={moduleCardsWrapper}>
				{modulesPageData.map(module =>
					<ModuleCard
						key={module.moduleId}
						moduleId={module.moduleId}
						coverImage={module.moduleCoverImage}
						name={module.title}
						status={module.status as 'todo' | 'done' | 'in progress'}
						onClick={() => handleModuleCardClick(module.moduleId)}
					/>
				)}
			</div>
		</div>
	);
};

export default ModulesSection;
