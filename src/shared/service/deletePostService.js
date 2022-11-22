import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';

export const deletePostService = async params => {
  const res = await axios.delete(
    `${BASE_URL}${ENDPOINTS.DELETEPOST}${params?.params}`,
    {
      header: {
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};
