import { css } from '@emotion/css';
import { whites } from '../../colors';

export const homepageWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const headerStyles = css`
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  justify-content: center;
  background-image: url('869.jpg');
  background-color: lightgray;
  background-size: cover;
  background-position: center;
`;

export const subtitleStyles = css`
  color: ${whites[1]};
  margin-top: 12px;
  font-weight: 700;
`;
