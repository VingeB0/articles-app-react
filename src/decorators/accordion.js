import React from 'react';

export default (Component) => class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openItemId : null
            // openItemId : this.props.openItemId
            // this.props.articles[0].id
        }
    }

    render() {
        // console.log(this.props)
        return <Component {...this.props} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId}/>
    }

    toggleOpenItem = (openItemId) => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    };
}
