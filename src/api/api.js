import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
  },
});

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`);
  },

  getUserProfile(userId) {
    return instance
      .get(`profile/${userId}`);
  },
};

export const authAPI = {
  getAuthUserData() {
    return instance.get('auth/me')
      .then((response) => response.data);
  },
};