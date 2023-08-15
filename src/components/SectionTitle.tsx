import React, { useEffect, useRef, useState } from 'react';
import { cx, css } from '@emotion/css';

const wrapperStyles = css`
  display: inline-block;
`;
const h1Styles = css`
  display: block;
  margin: 0;
  font-weight: 700;
  gap: 12px;
  text-transform: uppercase;
`;

const dividerStyles = css`
  height: 4px;
  display: block;
  margin: 8px auto 0px;
  background-color: rgb(255, 51, 102);
`;

interface H1Props extends React.HTMLProps<HTMLHeadingElement> {
  children: JSX.Element | string;
}

const SectionTitle = ({ children, ...props } : H1Props) => {
  const h1Ref = useRef<any>();
  const [dividerWidth, setDividerWidth] = useState('0px');
  useEffect(() => {
    if (h1Ref) {
      const clientWidth = h1Ref?.current?.clientWidth || 0;
      setDividerWidth(`${ clientWidth * 0.6}px`);
    }
  }, [h1Ref]);

  return (
    <div className={wrapperStyles}>
      <h1 ref={h1Ref} className={cx(h1Styles, props.className)} {...props}>
        {children}
      </h1>
      <span
        className={dividerStyles}
        style={{
          width: dividerWidth,
        }}
      />
    </div>
  );
};

export default SectionTitle;
