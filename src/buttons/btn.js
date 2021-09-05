import React from 'react';
import './btn.css'

const Btn = ({text, utility="", margin=""}) => {

    return(
        <a href="#a" className={`btn btn--white btn--animated ${utility}`} style={{marginTop: `${margin}`}}>{text}</a>
    )
};

export default Btn