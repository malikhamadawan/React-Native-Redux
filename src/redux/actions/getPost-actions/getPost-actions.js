import * as types from '../../types/types';

export const getPostActions = (cbSuccess, cbFailure) => {
  return {
    type: types.GET_ALL_POST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
