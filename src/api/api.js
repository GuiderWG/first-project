import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ebaaf371-80bd-4830-907a-9096f659d7ed',
  },
});

export const authAPI = {
  getMyProfile() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status,
    });
  },
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  getUsersProfile(userId) {
    console.warn('Obsolete method. Use "profileAPI" object.');
    return profileAPI.getUsersProfile(userId);
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
