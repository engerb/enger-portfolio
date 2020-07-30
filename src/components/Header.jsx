import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className=''>
                {this.props.block.title}
            </div>
        );
    }
}

export default Header;