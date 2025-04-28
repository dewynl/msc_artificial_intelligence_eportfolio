import React, { useState } from 'react';
import { css } from '@emotion/css';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${className || ''}`}
        onClick={openModal}
      />

      {isOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.closeButton} onClick={closeModal}>
            <X size={24} />
          </button>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={src} alt={alt} className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  image: css`
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
  `,
  modal: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  modalContent: css`
    position: relative;
    max-width: 90%;
    max-height: 90%;
    animation: zoomIn 0.3s ease;

    @keyframes zoomIn {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1);
      }
    }
  `,
  modalImage: css`
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  `,
  closeButton: css`
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `,
};

export default ZoomableImage;
