import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ebaaf371-80bd-4830-907a-9096f659d7ed'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getUsersProfile(userId = 2) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getMyProfile() {
    return instance
      .get(`auth/me`)
      .then(response => response.data);
  },
  setFollow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data);
  },
  setUnfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data);
  }
}
