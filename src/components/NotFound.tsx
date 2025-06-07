import React from 'react';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const notFoundContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
`;

const notFoundTitle = css`
  font-size: 4rem;
  font-weight: 700;
  color: #ff3366;
  margin-bottom: 16px;
`;

const notFoundSubtitle = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

const notFoundMessage = css`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 32px;
`;

const homeButton = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ff3366;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #cc2952;
  }
`;

interface NotFoundProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'Page Not Found',
  // eslint-disable-next-line quotes
  message = "The page you're looking for doesn't exist or may have been moved.",
  showHomeButton = true,
}) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={notFoundContainer}>
      <h1 className={notFoundTitle}>404</h1>
      <h2 className={notFoundSubtitle}>{title}</h2>
      <p className={notFoundMessage}>{message}</p>
      {showHomeButton && (
        <button className={homeButton} onClick={handleGoHome}>
          <Home size={20} />
          Go to Homepage
        </button>
      )}
    </div>
  );
};

export default NotFound;
