import React from 'react'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'
import { connect } from 'react-redux'
import { GlobalStore } from 'redux-micro-frontend';
import rootReducer  from '../redux/reducer';
import { addPost} from "../redux/actions";
import { createStore } from 'redux';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            posts2: []
        };

        this.addPost = this.addPost.bind(this);
        this.counterChanged = this.counterChanged.bind(this);
        this.stateChanged = this.stateChanged.bind(this);

        this.globalStore = GlobalStore.Get();
        this.store = createStore(rootReducer);
        this.globalStore.RegisterStore("PostApp", this.store, [GlobalStore.AllowAll]);

        try {
            this.globalStore.SubscribeToPartnerState("PostApp", "Post2App", this.counterChanged)
        }
        catch (error) { 
        }
        this.globalStore.Subscribe("PostApp", this.stateChanged);
    }

    addPost( text, id ) {
        this.globalStore.DispatchAction("PostApp", addPost(text, id ));
    }


    counterChanged(counterState) {
        this.setState({
            posts2: counterState.global
        });
    }

    stateChanged(postState) {
        this.setState({
            posts: postState
        });
    }
}


const PostsContainer = (props) => {
    return (
        <div>
            <NewPostForm />
            <h2>Posts:</h2>

            

            {props.posts.map(post => {
                return <PostCard post={post} key={post.id} />
            }
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsContainer)