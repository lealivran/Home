import jwt    from 'jsonwebtoken'
import fs from 'fs'
const publicKey = fs.readFileSync('server/demo.rsa.pub')
const privateKey = fs.readFileSync('server/demo.rsa')

//pure fonction to sign
export const sign = (user)=>{
  return  token = jwt.sign(user, privateKey, {expiresInMinutes: 1440 });
}
//pure fonction to decode
export const verify = (token) =>{
  jwt.verify(token, privateKey, (err, decoded) =>{
    return (err)? {decoded: false} :{decoded: true , user: decoded}
  });
}
