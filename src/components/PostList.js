import React from 'react';
import {connect} from 'react-redux';
import {fethPosts} from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fethPosts();
    }

    render() {
        return <div>Post List</div>;
    }
}

export default connect(
    null,
    {fethPosts}
    )(PostList);