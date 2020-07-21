import React, { Component } from "react";
import * as ACTION_TYPES from "../store/actions/action_types";
import * as ACTIONS from "../store/actions/actions";
import { connect } from "react-redux";

class Container3 extends Component {
  render() {
    const user_text = "hola";
    return (
      <div>
        <button
          onClick={console.log(this.props.stateprop1, this.props.stateprop2)}
        >
          Get State
        </button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action Creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action Creator 2
        </button>
        <button onClick={() => this.props.action_creator3(user_text)}>
          Dispatch Action Creator 3
        </button>
        {this.props.stateprop2 ? <h1> {this.props.stateprop2osta} </h1> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateprop1: state.reducer1.stateprop1,
    stateprop2: state.user_reducer.user_text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container3);
