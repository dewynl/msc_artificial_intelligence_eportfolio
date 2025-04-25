import React from 'react';

import * as styles from './HomePage.styles';
import SectionTitle from '../../components/SectionTitle';
import { css } from '@emotion/css';
import { whites } from '../../colors';
import AboutMeSection from './AboutMeSection';
import TechStack from './TechStack';
import ModulesSection from './ModulesSection';

const h1Styles = css`
  color: ${whites[1]};
`;

const HomePage = () => {
  return (
    <div className={styles.homepageWrapperStyles}>
      <div className={styles.headerStyles}>
        <SectionTitle className={h1Styles}>Msc in Artificial Intelligence</SectionTitle>
        <span className={styles.subtitleStyles}>
          This is my e-portfolio based on the work carried out on the Msc Artificial Intelligence.
        </span>
      </div>
      <AboutMeSection />
      <TechStack />
      <ModulesSection />
    </div>
  );
};

export default HomePage;
