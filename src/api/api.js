import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ebaaf371-80bd-4830-907a-9096f659d7ed',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  getUsersProfile(userId = 2) {
    return instance.get(`profile/${userId}`);
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  getMyProfile() {
    return instance.get(`auth/me`);
  },
};
