import types from '../types/types';

const initialState = {
  userData: null,
};

export const counterReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        userData: action?.params,
      };
    default:
      return {
        ...state,
      };
  }
};
