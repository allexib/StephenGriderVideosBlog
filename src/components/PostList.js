import React from 'react';
import {connect} from 'react-redux';
import {fethPosts} from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fethPosts();
    }

    render() {
        console.log(this.props.posts);
        return <div>Post List</div>;
    }
}

const mapStateToProps = (state) => {
    return{posts: state.posts};
}

export default connect(
    mapStateToProps,
    {fethPosts}
)(PostList);