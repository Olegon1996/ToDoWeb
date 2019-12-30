import {
  ADD_TODO_ITEM,
  CHANGE_TODO_STATUS,
  DELETE_TODO_ITEM,
  FETCHING_DATA,
  FETCH_DATA_SUCCESES,
  FETCH_DATA_ERROR
} from "../actions/actionsTypes";

let initialState = {
  todos: [],
  todoLength: 0,
  loading: false,
  errorMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESES:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        todoLength: action.payload.length
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        todos: [],
        loading: false,
        errorMessage: action.payload
      };
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoLength: state.todoLength + 1
      };

    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoLength: --state.todos.length
      };

    case CHANGE_TODO_STATUS:
      console.log('asd');
      
      return {
        ...state,
      };

    default:
      return state;
  }
}
