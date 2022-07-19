//import { createSignal } from 'react-signal';
import { useState } from 'react'
import React from 'react';

// export default () => {
//     const [count, setCount] = createSignal(0);
  
//     return (
//       <div>
//         <div>Count = {count()}</div>
//         <button onClick={() => setCount(count() + 1)}>Add One</button>
//       </div>
//     );
//   };

  class Counter extends React.Component {
    render() {
        // const [count, setCount] = useState(0);
      return(
        <counter >
          <div>
           {/* <div>Count = {count}</div>
           <button onClick={() => setCount(count + 1)}>Add One</button> */}
           Counter
         </div> 
        </counter>
      );
    }
  }
  export default Counter;