/**
 * Created by xj on 2017/5/30.
 */
'use strict';
const user = require('../models/user.js')
const jwt = require('jsonwebtoken')
module.exports = {
    'POST /server/todologin/': async(ctx, next) => {
        const data = ctx.request.body;
        const database = await user.user_login(data.user);
        const userinfo = database[0]
        if (userinfo != '' && userinfo != null) {
            if (userinfo.user_pass != data.password) {
                ctx.body = {
                    success: false, // success标志位是方便前端判断返回是正确与否
                    info: '请输入正确的密码！'
                }
            } else {
                const userToken = {
                    user: userinfo.user_login,
                    id: userinfo.ID
                }
                const secret = 'vue-koa-demo'; // 指定密钥
                const token = jwt.sign(userToken, secret); // 签发token
                ctx.body = {
                    success: true,
                    token: token, // 返回token
                }
            }
        } else {
            ctx.body = {
                success: false,
                info: '用户不存在！'
            }
        }
    }
};