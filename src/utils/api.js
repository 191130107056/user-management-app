// api.js
import axios from 'axios';
import {PER_PAGE_USERS} from '../constants/Stack';

export const fetchUsersApi = page => {
  return axios.get(
    `https://randomuser.me/api/?results=${PER_PAGE_USERS}&page=${page}`,
  )
};
