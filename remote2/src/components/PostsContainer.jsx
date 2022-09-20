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
            local: [],
            posts: [],
            global: []
        };

        this.addPostLocal = this.incrementLocalCounter.bind(this);
        this.addPostGlobal = this.incrementGlobalCounter.bind(this);
        // this.counterChanged = this.counterChanged.bind(this);
        // this.stateChanged = this.stateChanged.bind(this);
        this.updateState = this.updateState.bind(this);

        this.globalStore = GlobalStore.Get();
        this.store = this.globalStore.CreateStore("Post2App", rootReducer, []);
        this.globalStore.RegisterGlobalActions("Post2App", ["ADD_POST"]);
        this.globalStore.SubscribeToGlobalState("Post2App", this.updateState)


       
        //this.globalStore.Subscribe("Post2App", this.stateChanged);
    }

    addPostLocal( text, id ) {
        this.globalStore.DispatchAction("Post2App", addPost(text, id ));
    }

    addPostGlobal( text, id ) {
        this.globalStore.DispatchAction("Post2App", addPost(text, id ));
    }

    updateState(globalState) {
        this.setState({
            local: globalState.Post2App.local,
            global: globalState.Post2App.global,
            posts: globalState.Post2App.posts
        });
    }



    // counterChanged(counterState) {
    //     this.setState({
    //         globalCounter: counterState.global
    //     });
    // }

    // stateChanged(postState) {
    //     this.setState({
    //         posts: postState
    //     });
    // }
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