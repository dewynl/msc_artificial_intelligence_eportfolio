import React, { Component, ErrorInfo, ReactNode } from 'react';
import { css } from '@emotion/css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const errorContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px;
`;

const errorTitle = css`
  font-size: 2rem;
  font-weight: 700;
  color: #d32f2f;
  margin-bottom: 16px;
`;

const errorMessage = css`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 24px;
`;

const errorDetails = css`
  font-family: monospace;
  font-size: 0.9rem;
  color: #999;
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  max-width: 800px;
  overflow-x: auto;
  margin-bottom: 24px;
`;

const retryButton = css`
  background-color: #ff3366;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #cc2952;
  }
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={errorContainer}>
          <h1 className={errorTitle}>Something went wrong</h1>
          <p className={errorMessage}>
            We're sorry, but something unexpected happened. This error has been logged and we'll
            look into it. Please try refreshing the page or contact support if the problem persists.
          </p>
          {this.state.error && process.env.NODE_ENV === 'development' && (
            <div className={errorDetails}>
              <strong>Error:</strong> {this.state.error.message}
              <br />
              <strong>Stack:</strong> {this.state.error.stack}
            </div>
          )}
          <button className={retryButton} onClick={this.handleRetry}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
