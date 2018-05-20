import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        inputValue: ''
    };

    handleInputValueChange = (ev) => {
        if(ev.target.value.length > 4) return

        this.setState({
            inputValue: ev.target.value
        });
    };

    render() {
        // console.log(this.state.inputValue);

        return (
            <div>
                Name <input type="text" value={this.state.text} onChange={this.handleInputValueChange} />
            </div>
        );
    }
}

export default UserForm;
