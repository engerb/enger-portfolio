import React from 'react';

export default (props) => {
    return (
        <svg width="0" height="0">
            <defs>
                <clipPath id={props.maskID}>
                    <path d="M0 30C0 13.4315 13.4315 0 30 0H644.5L579.615 60.095C573.485 65.7726 570 73.7496 570 82.1051V370C570 386.569 556.569 400 540 400H30C13.4314 400 0 386.569 0 370V30Z"/>
                </clipPath>
            </defs>
        </svg>
    )
}