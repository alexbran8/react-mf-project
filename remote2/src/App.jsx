import React from "react";
import ReactDOM from "react-dom";

import Exemplu from "./Exemplu";
import {Provider} from "react-redux";
import PostsContainer from './components/PostsContainer'
// import store from "./redux/store";

import "./index.css";


const App = () => (
  <div className="container">
    <Provider store={store}>
    <div>Name: remote2</div>
     <Exemplu/> 
    <PostsContainer />
   </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));


// import PostsContainer from './components/PostsContainer'

// function App() {
//   return (
//     <div className='App'>
//       <PostsContainer />
//     </div>
//   );
// }

// export default App;