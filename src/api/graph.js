import request from "@/util/request"

export const getOpinionInfo = (params) => {
  return request.get(`/opinionGraph/getOpinionInfo`, {
    params: params
  })
}
export const getOpinionInfoTree = (params) => {
  return request.get('/opinionGraph/getOpinionInfoTree', {
    params: params
  })
}
export const getOpinionDetail = (params) => {
  return request.get('/opinionGraph/getOpinionDetail', {
    params: params
  })
}
export const getOpinionDetailByName = (params) => {
  return request.get('/opinionGraph/getOpinionDetailByName', {
    params: params
  })
}