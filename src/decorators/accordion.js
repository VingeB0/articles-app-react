import React, {Component} from 'react';

export default (Component) => class Accordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openItemId : this.props.openItemId
        }
    }

    toggleOpenItem = (openItemId) => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    };

    render() {
        return <Component {...this.props} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId}/>
    }
}


