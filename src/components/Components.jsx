import React from 'react';
import Header from './Header';

const Components = {
    Header: Header
};

export default (block, key) => {
    // component does exist
    if (typeof Components[block.component] !== 'undefined') {
        return React.createElement(Components[block.component], {
            key: key,
            block: block
        });
    } else {
        return React.createElement(
            () => <div>The component {block.component} has not been created yet.</div>,
            { key: key }
        );
    }
}