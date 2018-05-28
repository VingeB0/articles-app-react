import React, {Component} from 'react';

export default (Component) => class Accordion extends Component {

    state = {
        openItemId : null
        // openItemId : this.props.openItemId
        // this.props.articles[0].id
    };

    toggleOpenItem = (openItemId) => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    };

    render() {
        // console.log(this.props)
        return <Component {...this.props} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId}/>
    }
}


