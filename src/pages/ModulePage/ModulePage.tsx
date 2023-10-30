import { css, cx } from '@emotion/css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { modulesPageData } from '../../data/static-data';

const wrapper = css`
	display: flex;
	flex-direction: column;
	text-align: start;
  padding: 16px 120px;

   p {
      margin: 8px;
    }

  table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #f5f5f5;
        }
`;

const moduleTitle = css`
    display: flex;
    flex-direction: column;
    height: 30vh;
    align-items: start;
    padding-left: 128px;
    justify-content: center;
    background-color: lightgray;
    background-size: cover;
    background-position: center;
    color: white;
`;

const ModulePage = () => {
	const { moduleId } = useParams();

	const moduleContent = modulesPageData.find(
		moduleData => moduleData.moduleId === moduleId
	);

  const background = css`
    background-image: url(${moduleContent?.background});
  `;

	return (
		<div>
			<div className={cx(moduleTitle, background)}>
				<h1>{moduleContent?.title}</h1>
			</div>
			<div className={wrapper}>
				{moduleContent?.content}
			</div>
		</div>
	);
};

export default ModulePage;
