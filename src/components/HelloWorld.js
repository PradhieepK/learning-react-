import { Component } from "react";
import ChildHelloWorld from "./ChildHelloWorld";

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentname: "Parent",
    };
  }

  greetParent=()=>{
    alert("Hello"+this.state.parentname)
  }
  render() {
    return (
      <div>
        <h1>
          <u>Class Component</u>
        </h1>
        <h3>Hello World</h3>
        <ChildHelloWorld greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default HelloWorld;
