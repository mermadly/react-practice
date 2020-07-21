import React, {Component} from 'react';
import Component1 from '../functional/component1'

class Container1 extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            stateprop1: "Our initial state",
            stateprop2: 5
        }
    }
    //CORRECT
    changeState = () => (

        this.setState({stateprop2: this.state.stateprop2 + 1,stateprop1: this.state.stateprop1 + "L"}
            )

        //ALSO CORRECT 
        // this.setState((prevState, props) => ({
        //     stateprop2: prevState.stateprop2 + 1})
        //     )
    )

    changeState2 = () => {
        this.setState({stateprop1: this.state.stateprop1 + "L"})

    }

    render() {
        return (
            <>
        <div>
            <button onClick={() => this.changeState()}>Change State</button>
            {this.state.stateprop2}</div>
        <div>
            <button onClick={() => this.changeState2()}>Change State</button>
            {this.state.stateprop1}</div>

            <Component1 prop1 ={this.state.stateprop1}/>
            </>
        )
    }
}

export default Container1