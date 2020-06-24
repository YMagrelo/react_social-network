import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
  },
});

export const profileAPI = {
  getUserProfile(userId) {
    return instance
      .get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance
      .put('profile/status', { status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  },

  saveProfile(profile) {
    return instance
      .put('profile', { profile });
  },
};

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
};


export const authAPI = {

  me() {
    return instance.get('auth/me');
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },

  logout() {
    return instance.delete('auth/login');
  },
};
