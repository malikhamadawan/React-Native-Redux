import * as types from '../../types/types';

export const deletePostActions = (params, cbSuccess, cbFailure) => {
  return {
    type: types.DELETE_POST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
