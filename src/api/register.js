import request from "@/utils/request";

// export function sendSmsCode(params) {
//   return request({
//     url: "http://live.zbitcloud.com/appapi",
//     method: "POST",
//     data: params
//   });
// }

export function sendSmsCode(params) {
  return request({
    url: "/appapi",
    method: "POST",
    data: params
  });
}
