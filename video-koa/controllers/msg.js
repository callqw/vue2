'use strict';
const url = require("url");
var crypto = require("crypto");
function sha1(str){
    var md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}
module.exports = {
    'POST ': async(ctx, next)=> {
        weixinApi.loop(ctx.request, ctx.response);
        var query = url.parse(ctx.url,true).query;
        var signature = query.signature;
        console.info(query);
        console.info("a");
        console.info(ctx.request.body);
    }
}