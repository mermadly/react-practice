import React, { Component } from "react";
import Component1 from "./functional/component1";
import Container1 from "./container/container1";
import Container2 from "./container/container2";
import Container3 from "./container/container3";
import Routes from "./routes";

class App extends Component {
  // renderFunction1 = () => {
  //   return (true ? <div className="App">Condition 1 </div> : <div className="App">Condition 2 </div>)
  // }

  Arr1 = [
    { id: 1, text: "text 1", number: 1 },
    { id: 2, text: "text 2", number: 2 },
    { id: 3, text: "text 3", number: 3 },
    { id: 4, text: "text 4", number: 4 },
    { id: 5, text: "text 5", number: 5 },
  ];

  RenderListItem = (props) => (
    <div>
      {props.item.text}
      <p>{props.item.number}</p>
    </div>
  );

  render() {
    return (
      <div>
        {/* {this.Arr1.map((item, index) =>  (<this.RenderListItem key={item.id} item={item}/>)) }
        <Container2 /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
