import { css } from '@emotion/css';
import React from 'react';
import XIcon from './icons/XIcon';

interface ModalProps {
  children: React.ReactNode;
  zIndex?: number;
  onClose: () => void;
  title?: string;
}

const modalOverlayStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const modalWrapperStyles = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  width: 70%;
  max-height: 80vh;
  overflow: hidden;
  z-index: 1001;
`;

const closeButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const modalHeaderRowStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
`;

const titleWrapperStyles = css`
  flex-grow: 1;
  text-align: start;
  margin: 0;
  color: #333;
  font-size: 24px;
`;

const closeButtonWrapperStyles = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const modalContentStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(80vh - 100px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const Modal = ({ onClose, title, children }: ModalProps) => {
  return (
    <div className={modalOverlayStyles} onClick={onClose}>
      <div className={modalWrapperStyles} onClick={e => e.stopPropagation()}>
        <div className={modalHeaderRowStyles}>
          <h2 className={titleWrapperStyles}>{title}</h2>
          <div className={closeButtonWrapperStyles}>
            <button className={closeButtonStyles} onClick={onClose}>
              <XIcon />
            </button>
          </div>
        </div>
        <div className={modalContentStyles}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
