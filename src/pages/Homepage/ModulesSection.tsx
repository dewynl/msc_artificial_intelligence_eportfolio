import React, { useRef } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { css, cx } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { modulesPageData } from '../../data/static-data';
import { getImagePath } from '../../utils/imageUtils';

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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: white;

  :hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const coverImageStyles = css`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.2) 100%);
    transition: all 0.3s ease;
  }
`;

const moduleCardDescription = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: start;
  padding: 16px;
  flex-grow: 1;
  justify-content: space-between;
`;

const moduleName = css`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #333;
`;

const StatusBar = ({ status }: { status: string }) => {
  const statusRef = useRef<HTMLSpanElement>(null);

  const moduleStatusSpan = css`
    text-transform: capitalize;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    color: white;
    font-weight: 500;
    letter-spacing: 0.5px;
    max-width: fit-content;
  `;

  let backgroundColor = undefined;
  switch (status) {
    case 'to do':
      backgroundColor = '#FF6B6B';
      break;
    case 'in progress':
      backgroundColor = '#4ECDC4';
      break;
    case 'done':
      backgroundColor = '#59CD90';
      break;
    default:
      backgroundColor = '#C7C7C7';
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

const ModuleCard = ({ moduleId, coverImage, name, status, onClick }: ModuleCardProps) => {
  const backgroundCover = css`
    background: url('${getImagePath(coverImage)}');
  `;

  return (
    <div className={moduleCardWrapper} onClick={() => onClick(moduleId)}>
      <div className={cx(backgroundCover, coverImageStyles)} />
      <div className={moduleCardDescription}>
        <span className={moduleName}>{name}</span>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  padding: 12px 0;
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
        {modulesPageData.map(module => (
          <ModuleCard
            key={module.moduleId}
            moduleId={module.moduleId}
            coverImage={module.moduleCoverImage}
            name={module.title}
            status={module.status as 'todo' | 'done' | 'in progress'}
            onClick={() => handleModuleCardClick(module.moduleId)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModulesSection;
