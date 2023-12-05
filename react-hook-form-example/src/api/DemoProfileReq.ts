import request from "../utils/request";
import Profile from './../types/Profile';

export function getAllDemoProfile(page:number, pageSize:number) {
    return request({
      url: `/demoprofile/all`,
      method: 'get',
      params: {
        'page': page,
        'pageSize': pageSize,
      }
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

export function updateDemoProfile( profile: Profile) {
  // profile.image = null;
  // profile.coverImage = null;
  console.log("Update Profile: ", profile);
  
  return request({
    url: `/demoprofile/update`,
    method: 'put',
    data: profile,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export function activeInactiveUser() {
  return request({
    url: `/user/activeinactive/1`,
    method: 'post',
  })
}