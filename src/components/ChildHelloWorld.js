import React, { Component } from 'react';



class ChildHelloWorld extends Component {
   
    
    render() { 
        return ( <div>
            <button onClick={()=>this.greetHandler()}>Child</button>
            </div>
         );
    }
}
 
export default ChildHelloWorld;



// function ChildHelloWorld(props) {
//   return (
//     <div>
//         <button onClick={()=>props.greetHandler()}>Child</button>
//     </div>
//   )
// }

// export default ChildHelloWorld