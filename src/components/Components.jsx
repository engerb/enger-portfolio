import React from 'react';
import Header from './Header';
import ProjectHeader from './ProjectHeader';

const Components = {
    Header: Header,
    ProjectHeader: ProjectHeader
}

export default (block, indexKey) => {
    // component does exist
    if (typeof Components[block.component] !== 'undefined') {
        return React.createElement(Components[block.component], {
            key: (block.key ? block.key : indexKey),
            ...block
        })
    } else {
        return React.createElement(
            () => <div>The component {block.component} has not been created yet.</div>,
            { key: (block.key ? block.key : indexKey) }
        )
    }
}