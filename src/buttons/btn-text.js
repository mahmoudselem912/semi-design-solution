import React from 'react';
import './btn-text.css';

const BtnText = ({name, href}) => {

    return(
        <a href={`#${href}`} className="btn-text">{name}</a>
    )
}

export default BtnText