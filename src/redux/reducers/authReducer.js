import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESSES,
  LOGUP_ERROR,
  LOGUP_REQUEST,
  LOGUP_SUCCESSES,
  LOGOUT_SUCCESSES,
  LOGOUT_ERROR,
} from "../actions/actionsTypes";

const initialState = {
  isLogIn: false,
  userInfo: {
    name: "",
    email: "",
    id: ""
  },
  errorText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;

    case LOGIN_SUCCESSES:
      return {
          ...state,
          isLogIn: true,
          userInfo: {
            name: action.payload.name,
            email: action.payload.email,
            id: action.payload.uid,
          }
      };

    case LOGIN_ERROR:
      return {
          ...state,
          isLogIn: false,
          userInfo: {},
          errorText: action.payload,
      };

    case LOGUP_REQUEST:
      return state;

    case LOGUP_SUCCESSES:
      return {
          ...state,
        isLogIn: true,
        userInfo: {
            name: action.payload.name,
            email: action.payload.email,
            id: action.payload.uid,
          }
      };

    case LOGUP_ERROR:
      return {
          ...state,
          isLogIn: false,
          userInfo: {},
          errorText: action.payload,
      };

      case LOGOUT_SUCCESSES:
      return {
          ...state,
          isLogIn: false,
          userInfo: {}
      };

    case LOGOUT_ERROR:
      return {
          ...state,
          isLogIn: true,
          userInfo: {},
          errorText: action.payload,
      };

    default:
      return state;
  }
};
