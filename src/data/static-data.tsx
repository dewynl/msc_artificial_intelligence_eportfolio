import React from 'react';
import MachineLearningBody from './machine-learning/MachineLearningBody';
import KnowledgeRepresentation from './knowledge-representation/KnowledgeRepresentation';

export const workExperience = [
	{
		title: 'Software Engineer',
		company: 'FranklinCovey',
		employmentTime: '04/23 - Present',
		tasks: [
			'Develop a Client Dashboard with React and Django to show dashboards and metrics',
			'Develop a React based workflows'
		]
	},
	{
		title: 'Software Engineer',
		company: 'EPAM Systems',
		employmentTime: '05/22 - 12/22',
		tasks: [
			'Develop a highly accessible React component library to use in a couple of other projects for a client.',
			'Create unit tests for the React components developed.',
			'Create set of requirements for the front end components APIs.'
		]
	},
	{
		title: 'Senior Software Engineer',
		company: 'Resonance Companies',
		employmentTime: '03/19 - 05/22',
		tasks: [
			'Developed a React app for the brands to interact with the platform.',
			'Developed a GraphQL API to consume from the different data sources in the platform.',
			'Automated and orchestrated flows to drive time to costumer down.',
			'Manage small teams of engineers to plan and implement projects.'
		]
	},
	{
		title: 'Software Engineer',
		company: 'Avathar Tech',
		employmentTime: '11/18 - 03/19',
		tasks: [
			// eslint-disable-next-line quotes
			"Enabled user's payment of household utilities like gas, electricity, and water.",
			'Established connection with telecommunication companies to enable users payment of phone and internet services.',
			'Stored users information that made easy for them to make this actions faster after the first time.'
		]
	},
	{
		title: 'Web Developer',
		company: 'PUCMM',
		employmentTime: '08/18 - 12/18',
		tasks: [
			'Upgraded Point-of-Sale UX for a smoother experience while using tablets and phones.',
			'Migrated web application to a new Bootstrap based template they acquired.',
			'Enabled application to take orders offline to avoid delaying costumers when wifi wasn’t strong enough. These orders were then synced back with our server as soon as internet connection was recovered.'
		]
	}
];

export const modulesPageData = [
	{
		moduleId: '3',
		title: 'Machine Learning',
		background: 'public/machine-learning-cover.png',
		coverImage: 'machine-learning-cover.gif',
		status: 'done',
		content: <MachineLearningBody />
	},
	{
		moduleId: '4',
		title: 'Knowledge Representation and Reasoning',
		background: 'public/machine-learning-cover.png',
		coverImage: 'machine-learning-cover.gif',
		status: 'in progress',
		content: <KnowledgeRepresentation />
	}
];
