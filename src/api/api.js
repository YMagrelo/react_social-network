import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getUsers = (pageSize = 10, currentPage = 1) => instance
  .get(`users?count=${pageSize}&page=${currentPage}`)
  .then((response) => response.data);

export const getAuthUserData = () => instance.get('auth/me')
  .then((response) => response.data);

// export const getUserProfileData = (userId) => axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//   .then((response) => response.data);

// export const getUnfollow = (userId) => axios
//   .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
//     withCredentials: true,
//     headers: {
//       'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
//     },
//   })
//   .then((response) => response.data);
