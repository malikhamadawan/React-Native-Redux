import types from '../types/types';

export const incrementActions = params => {
  return {
    type: types.LOGIN,
    params,
  };
};

// export const decrementActions = data => {
//   return {
//     type: types.DECREMENT,
//     data,
//   };
// };
