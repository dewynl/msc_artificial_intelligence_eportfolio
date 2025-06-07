import React from 'react';
import { css, cx } from '@emotion/css';
import { useParams } from 'react-router-dom';
import { modulesPageData } from '../../data/static-data';
import { getImagePath } from '../../utils/imageUtils';
import NotFound from '../../components/NotFound';
import ErrorBoundary from '../../components/ErrorBoundary';
import type { RouteParams, ModuleData } from '../../types';

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

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<RouteParams>();

  const moduleContent: ModuleData | undefined = modulesPageData.find(
    moduleData => moduleData.moduleId === moduleId,
  );

  // Handle invalid module ID
  if (!moduleContent) {
    return (
      <NotFound
        title="Module Not Found"
        message={`The module "${moduleId}" doesn't exist or may have been moved. Please check the module ID and try again.`}
      />
    );
  }

  const background = css`
    background-image: url(${getImagePath(moduleContent.background)});
  `;

  return (
    <div>
      <div className={cx(moduleTitle, background)}>
        <h1>{moduleContent.title}</h1>
      </div>
      <div className={wrapper}>
        <ErrorBoundary
          fallback={
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h2>Failed to load module content</h2>
              <p>
                There was an error loading the content for this module. Please try refreshing the
                page.
              </p>
            </div>
          }
        >
          {moduleContent.content}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ModulePage;
