import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
  stateprop1: false,
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true,
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false,
      };

    default:
      return state;
  }
};

export default Reducer1;
