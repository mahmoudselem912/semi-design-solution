import React from 'react';
import './btn.css'

const Btn = ({text, utility=""}) => {

    return(
        <a href="#a" className={`btn btn--white btn--animated ${utility}`}>{text}</a>
    )
};

export default Btn