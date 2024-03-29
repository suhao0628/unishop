import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}

export const getSMSCode = (captchaCode, captchaKey, phone) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile: phone
    }
  })
}

export const Login = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
