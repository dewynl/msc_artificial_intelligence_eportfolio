import { css } from "@emotion/css";
import React from "react";
import WebIcon from "../../components/icons/WebIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import CloudComputingIcon from "../../components/icons/CloudComputingIcon";

const techStackWrapper = css`
    display: flex;
    height: 480px;
    align-items: center;
    align-self: center;
    width: 100%;
    background: url('/appCurvyLines.png');
    background-color: rgb(255, 245, 248);

    svg {
        height: 50px;
        width: 50px;
    }
`;

const stackDescriptionWrapper = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 12px;
`;

const stackNameWrapper = css`
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
`;

const descriptionWrapper = css`
    margin: 0px;
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.4;
`;

const StackDescription = ({
  icon,
  stackName,
  description
}: {
  icon: JSX.Element;
  stackName: string;
  description: string;
}) => {
  return (
    <div className={stackDescriptionWrapper}>
      <div>
        {icon}
      </div>
      <div className={stackNameWrapper}>
        {stackName}
      </div>
      <div className={descriptionWrapper}>
        {description}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className={techStackWrapper}>
      <StackDescription
        icon={<WebIcon />}
        stackName="Web Development"
        description="Javascript, Typescript, React, GraphQL"
      />
      <StackDescription
        icon={<CodeIcon />}
        stackName="Backend Development"
        description="Python, Flask, OpenCV, Airtable, MongoDB"
      />
      <StackDescription
        icon={<CloudComputingIcon />}
        stackName="Infrastructure"
        description="Kafka, Argo Workflows, Docker, Serverless"
      />
    </div>
  );
};

export default TechStack;
