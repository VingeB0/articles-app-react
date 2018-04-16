import React, {Component} from 'react';

// import Article from "./Article.js";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : true
        };
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <li>
                <h2>{article.title}</h2>
                <button onClick={this.toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
                <div>
                    { isOpen ? null : <p>{article.text}</p>}
                </div>
            </li>
        );
    }
}

export default Article;
