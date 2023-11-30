import request from "../utils/request";

export function downloadImage(imageId: number) {
    return request({
      url: `/image/download/${imageId}`,
      method: 'get',
    })
}