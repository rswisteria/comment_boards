var React = require('react');
var ReactDOM = require('react-dom');

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="commentBox">
                <h2>Comments</h2>
                <CommentForm />
                <CommentList />
            </div>
        );
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    onFocus() {
        this.setState({ active: true });
    }

    onBlur() {
        this.setState({ active: false });
    }

    render() {
        return(
            <div className="commentForm">
                <input type="text" className={this.state.active ? 'active' : ''}
                       onFocus={this.onFocus.bind(this)}
                       onBlur={this.onBlur.bind(this)}
                       placeholder={this.state.active ? '' : 'コメントする'} />
            </div>
        )
    }
}

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="commentForm">
            </div>
        )
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <article className="comment">
                <h3 className="commentAuthor">{this.props.author}</h3>
                {this.props.children}
            </article>
        )
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('container')
);