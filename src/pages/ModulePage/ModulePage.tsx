import React from 'react';
import { css, cx } from '@emotion/css';
import { useParams } from 'react-router-dom';
import { modulesPageData } from '../../data/static-data';
import { getImagePath } from '../../utils/imageUtils';

const wrapper = css`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 32px 120px;
  background-color: #fcfcfc;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin: 16px 0;
    line-height: 1.8;
    color: #444;
  }

  a {
    color: #ff3366;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #cc2952;
      text-decoration: underline;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
  }

  th,
  td {
    border: 1px solid #eaeaea;
    text-align: left;
    padding: 12px 16px;
  }

  th {
    background-color: #f7f7f7;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: monospace;
  }
`;

const moduleTitle = css`
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: flex-start;
  padding-left: 120px;
  justify-content: center;
  background-color: #333;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 1;
  }

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    position: relative;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const ModulePage = () => {
  const { moduleId } = useParams();

  const moduleContent = modulesPageData.find(moduleData => moduleData.moduleId === moduleId);

  const background = css`
    background-image: url(${moduleContent?.background
      ? getImagePath(moduleContent.background)
      : ''});
  `;

  return (
    <div>
      <div className={cx(moduleTitle, background)}>
        <h1>{moduleContent?.title}</h1>
      </div>
      <div className={wrapper}>{moduleContent?.content}</div>
    </div>
  );
};

export default ModulePage;
