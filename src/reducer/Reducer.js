import { ADD_EMPLOYEE, GET_EMPLOYEE } from "../actionType/ActionType";

const initialState = {
  employee: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default employeeReducer;
