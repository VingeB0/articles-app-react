import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.Component {

    state = {
        isOpen : true
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}