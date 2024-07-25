import {randomBytes , createHmac } from 'crypto';

export const authentication = (salt, password)=> {
    return createHmac('sha256', [salt, password].join('/')).update(process.env.NEXT_PUBLIC_AUTH_SECRET).digest('hex');
  }
  
export const random = () => randomBytes(128).toString('base64');