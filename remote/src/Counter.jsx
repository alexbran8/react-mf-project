import { createSignal } from 'react-signal';
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

export default () => {
  
        const [count, setCount] = useState(0);
      return(
        <counter >
          <div>
           <div>Count = {count}</div>
           <button onClick={() => setCount(count + 1)}>Add One</button>
         </div> 
        </counter>
      );
    
  };
  