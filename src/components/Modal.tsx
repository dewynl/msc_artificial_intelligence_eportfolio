import { css } from "@emotion/css";
import React from "react";
import XIcon from "./icons/XIcon";

interface ModalProps {
  children: any;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalWrapperStyles = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  width: 70%;
  max-height: 80%;
`;

const closeButtonStyles = css`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const modalHeaderRowStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const titleWrapperStyles = css`
  flex-grow: 1;
  text-align: start;
`;

const closeButtonWrapperStyles = css`
  direction: flex;
  align-items: center;
  flex-shrink: 1;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const modalContentStyles = css`
  display: flex;
  overflow-y: scroll;
`;

const Modal = ({ onClose, title, children, ...props }: ModalProps) => {
  return (
    <div className={modalOverlayStyles} onClick={onClose}>
      <div className={modalWrapperStyles} onClick={e => e.stopPropagation()}>
        <div className={modalHeaderRowStyles}>
          <h2 className={titleWrapperStyles}>
            {title}
          </h2>
          <div className={closeButtonWrapperStyles}>
            <button className={closeButtonStyles} onClick={onClose}>
              <XIcon />
            </button>
          </div>
        </div>
        <div className={modalContentStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
