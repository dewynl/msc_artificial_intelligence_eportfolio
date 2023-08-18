import React from 'react';
import { useParams } from 'react-router-dom';

const ModulePage = () => {
    const { moduleId } = useParams();

    return <>{moduleId}</>
}

export default ModulePage;