import * as TYPES from '../../types/types';

const initialState = {
  isSuccess: false,
  isFailure: false,
};

export const deletePostReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch (type) {
    case TYPES.DELETE_POST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.DELETE_POST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return {
        ...state,
      };
  }
};
