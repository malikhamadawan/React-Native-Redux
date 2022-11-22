import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';

export const getPostService = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.POST}`, params, {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res.data;
};
