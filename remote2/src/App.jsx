import React from "react";
import ReactDOM from "react-dom";

import Exemplu from "./Exemplu";

import PostsContainer from './components/PostsContainer'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote2</div>
     <Exemplu/> 
    <PostsContainer />
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