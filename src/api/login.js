import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}

export const getSMSCode = (captchaCode, captchaKey, phone) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      phone
    }
  })
}
