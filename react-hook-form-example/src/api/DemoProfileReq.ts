import request from "../utils/request";
import Profile from './../types/Profile';

export function getAllDemoProfile() {
    return request({
      url: `/demoprofile/all`,
      method: 'get',
    })
}

export function createDemoProfile( profile: Profile) {
  return request({
    url: `/demoprofile/create`,
    method: 'post',
    data: profile,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}