import request from "@/utils/request";

// export function sendSmsCode(params) {
//   return request({
//     url: "http://video-ce.com/api/app/send_sms_code",
//     method: "POST",
//     data: params
//   });
// }

// export function loginMobile(params) {
//   return request({
//     url: "http://video-ce.com/api/member/login_mobile",
//     method: "POST",
//     data: params
//   });
// }

export function sendSmsCode(params) {
  return request({
    url: "/api/app/send_sms_code",
    method: "POST",
    data: params
  });
}

export function loginMobile(params) {
  return request({
    url: "/api/member/login_mobile",
    method: "POST",
    data: params
  });
}

export function ios_tf(params) {
  return request({
    url: "/api/home/ios_tf",
    method: "POST",
    data: params
  });
}

